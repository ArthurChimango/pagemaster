(function () {
            const SITE_ID = document.currentScript.getAttribute('data-site-id') || 'unknown';

            const APP_ID = 'monitoramento-web';
            const PROJECT_ID = 'monitoramento-6fb56';

            let visitorId = localStorage.getItem('_alyx_vid');
            if (!visitorId) {
                visitorId = 'v_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('_alyx_vid', visitorId);
            }

            // Gerenciamento de sessão mais robusto (expira após 30 min de inatividade)
            let sessionData;
            const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutos
            try { sessionData = JSON.parse(localStorage.getItem('_alyx_sid')); } catch (e) { sessionData = null; }

            const now = Date.now();
            if (!sessionData || (now - sessionData.ts > SESSION_TIMEOUT)) {
                sessionData = { id: 's_' + Math.random().toString(36).substr(2, 9), ts: now };
            }
            sessionData.ts = now; // Atualiza o timestamp para manter a sessão ativa
            localStorage.setItem('_alyx_sid', JSON.stringify(sessionData));
            const sessionId = sessionData.id;

            const device = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

            const eventQueue = [];
            let flushTimeout = null;
            const FLUSH_INTERVAL = 5000; // Envia eventos a cada 5 segundos

            function toFirestoreType(val) {
                if (typeof val === 'string') return { stringValue: val };
                if (typeof val === 'number') return { doubleValue: val };
                if (typeof val === 'boolean') return { booleanValue: val };
                return { stringValue: String(val) };
            }

            function generateId(length = 20) {
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                for (let i = 0; i < length; i++) { result += chars.charAt(Math.floor(Math.random() * chars.length)); }
                return result;
            }

            function flushQueue(isUnloading = false) {
                if (flushTimeout) clearTimeout(flushTimeout);
                flushTimeout = null;
                if (eventQueue.length === 0) return;

                const eventsToSend = [...eventQueue];
                eventQueue.length = 0;

                const writes = eventsToSend.map(ev => {
                    const docId = generateId();
                    const path = 'projects/' + PROJECT_ID + '/databases/(default)/documents/artifacts/' + APP_ID + '/public/data/events_' + SITE_ID + '/' + docId;
                    const fields = {}; for (let key in ev) { fields[key] = toFirestoreType(ev[key]); }
                    return { update: { name: path, fields } };
                });

                const body = JSON.stringify({ writes });
                const url = 'https://firestore.googleapis.com/v1/projects/' + PROJECT_ID + '/databases/(default)/documents:commit';

                if (isUnloading && navigator.sendBeacon) { navigator.sendBeacon(url, body); }
                else { fetch(url, { method: 'POST', body, headers: { 'Content-Type': 'application/json' } }).catch(() => { }); }
            }

            function queueEvent(type, extraData = {}) {
                const payload = { siteId: SITE_ID, visitorId, sessionId, type, path: window.location.pathname, device, timestamp: Date.now(), ...extraData };
                eventQueue.push(payload);
                if (!flushTimeout) { flushTimeout = setTimeout(() => flushQueue(false), FLUSH_INTERVAL); }
            }

            async function getGeoLocation() {
                try {
                    let geo = sessionStorage.getItem('_alyx_geo');
                    if (geo) return JSON.parse(geo);

                    const response = await fetch('https://freegeoip.app/json/');
                    if (!response.ok) return {};
                    const data = await response.json();
                    const location = { country: data.country_name, region: data.region_name, city: data.city };
                    if (location.city && location.region) {
                        sessionStorage.setItem('_alyx_geo', JSON.stringify(location));
                        return location;
                    }
                    return {};
                } catch (e) { return {}; }
            }

            (async () => {
                const location = await getGeoLocation();
                queueEvent('pageview', { referrer: document.referrer, ...location });
            })();

            document.addEventListener('click', function (e) {
                let target = e.target;
                let elementStr = '';
                const extraData = {};

                // Adicionado para rastreamento de produtos
                const productCard = target.closest('.product-card[data-product-id]');
                if (productCard) {
                    extraData.productId = productCard.dataset.productId;
                    extraData.productName = productCard.dataset.productName;
                }

                // 1. Prioriza o data-attribute para identificação clara.
                const analyticsIdElement = target.closest('[data-analytics-id]');
                if (analyticsIdElement) {
                    elementStr = analyticsIdElement.getAttribute('data-analytics-id');
                } else {
                    // Tenta encontrar um elemento interativo pai, como um botão ou link.
                    const interactiveParent = target.closest('button, a, [role="button"]');
                    const elementToDescribe = interactiveParent || target;

                    // 2. Prioriza o texto dentro do elemento, se for curto e descritivo.
                    let text = (elementToDescribe.innerText || '').trim().replace(/\s+/g, ' ');
                    if (text && text.length > 0 && text.length < 80) {
                        elementStr = elementToDescribe.tagName.toLowerCase() + '[text="' + text + '"]';
                    }
                    // 3. Como alternativa, usa o 'aria-label' para acessibilidade.
                    else if (elementToDescribe.getAttribute('aria-label')) {
                        elementStr = elementToDescribe.tagName.toLowerCase() + '[aria-label="' + elementToDescribe.getAttribute('aria-label') + '"]';
                    }
                    // 4. Como alternativa, usa o ID do elemento.
                    else if (elementToDescribe.id) {
                        elementStr = elementToDescribe.tagName.toLowerCase() + '#' + elementToDescribe.id;
                    }
                    // 5. Como última alternativa, usa as classes CSS (o comportamento antigo).
                    else if (elementToDescribe.className && typeof elementToDescribe.className === 'string') {
                        elementStr = elementToDescribe.tagName.toLowerCase() + '.' + elementToDescribe.className.split(' ').filter(c => c.length > 0).join('.');
                    }
                    // 6. Se nada mais, apenas o nome da tag.
                    else {
                        elementStr = elementToDescribe.tagName.toLowerCase();
                    }
                }

                queueEvent('click', {
                    x: e.pageX,
                    y: e.pageY,
                    element: elementStr.substring(0, 150), // Aumentei o limite para textos mais longos
                    // Adicionado para corrigir a escala do mapa de calor
                    docWidth: document.documentElement.scrollWidth,
                    ...extraData
                });
            });

            let maxScroll = 0;
            document.addEventListener('scroll', function () {
                let scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
                if (scrollPercent > maxScroll) maxScroll = scrollPercent;
            }, { passive: true });

            window.addEventListener('beforeunload', function () {
                if (maxScroll > 0) queueEvent('scroll', { scrollDepth: maxScroll });
                flushQueue(true);
            });

            // Ouve por eventos de navegação interna da SPA
            let lastTrackedPath = window.location.pathname;
            window.addEventListener('flow-navigation', (e) => {
                const newPath = e.detail.path;
                if (newPath && newPath !== lastTrackedPath) {
                    queueEvent('pageview', { path: newPath });
                    lastTrackedPath = newPath;
                }
            });
        })();