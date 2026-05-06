/**
 * runsitself.co — Meta Pixel with GDPR consent guard + custom events + CAPI bridge
 * Pixel ID: 4476008692626040 (Build With Creators Pixel / Dataset)
 *
 * STRICT mode: fbevents.js is NOT loaded until user grants marketing consent.
 *
 * Events fired:
 *  - PageView         — every page (after consent)
 *  - ViewContent      — /agency-starter-lto landing
 *  - Purchase         — /agency-oto1 (real LTO value: 7/21.95/36.90)
 *  - Purchase $97     — /diagnostic-booked.html (post-Audit booking)
 *  - InitiateCheckout — click on any buy.stripe.com link (with mapped value)
 *  - Lead             — click on Discovery booking (calendar.app.google)
 *
 * Attribution bridge (Pixel ↔ CAPI dedup):
 *   - Captures fbclid from URL on landing → builds _fbc cookie
 *   - On Stripe link click: packs fbc + fbp + event_id into client_reference_id
 *   - Stripe webhook (Cloud Run) parses client_reference_id and forwards to Meta CAPI
 *     using the same event_id so Meta deduplicates Browser + Server hit
 */
(function () {
  'use strict';

  var PIXEL_ID = '4476008692626040';
  var initialized = false;

  var ATTRIBUTION_KEY = 'rs_attribution_v1';
  var FBC_COOKIE_DAYS = 90;

  var STRIPE_VALUE_MAP = {
    '00w7sFe9e56H5YM32Qg7e00': 7,      // LTO base $7 (was $14.95)
    'cNicMZ8OU1Uv5YMavig7e02': 21.95,  // LTO + Lead Gen $14.95 = $21.95
    '7sYaERd5afLl4UI9reg7e01': 21.95,  // LTO + Content Machine $14.95 = $21.95
    'fZu5kx9SYar14UIbzmg7e03': 36.90   // LTO + both bumps = $36.90 (was $28.95)
  };

  function getStripeValue(href) {
    for (var id in STRIPE_VALUE_MAP) {
      if (href.indexOf(id) !== -1) return STRIPE_VALUE_MAP[id];
    }
    return null;
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + value + '; expires=' + expires +
                      '; path=/; domain=.runsitself.co; SameSite=Lax; Secure';
  }

  function captureAttribution() {
    var params = new URLSearchParams(window.location.search);
    var fbclid = params.get('fbclid');
    var data = {};

    try {
      data = JSON.parse(localStorage.getItem(ATTRIBUTION_KEY) || '{}');
    } catch (e) {}

    if (fbclid) {
      var fbc = 'fb.1.' + Date.now() + '.' + fbclid;
      data.fbc = fbc;
      data.fbclid = fbclid;
      data.first_seen = data.first_seen || Date.now();
      setCookie('_fbc', fbc, FBC_COOKIE_DAYS);
    } else {
      var existingFbc = getCookie('_fbc');
      if (existingFbc) data.fbc = existingFbc;
    }

    var fbp = getCookie('_fbp');
    if (fbp) data.fbp = fbp;

    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
      var v = params.get(k);
      if (v) data[k] = v;
    });

    data.landing_url = window.location.origin + window.location.pathname;

    try {
      localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
    } catch (e) {}

    return data;
  }

  function getAttribution() {
    try {
      return JSON.parse(localStorage.getItem(ATTRIBUTION_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function buildClientReferenceId() {
    var attr = getAttribution();
    var parts = [];
    if (attr.fbc) parts.push('fbc=' + encodeURIComponent(attr.fbc));
    if (!attr.fbc) {
      var freshFbp = getCookie('_fbp');
      if (freshFbp) parts.push('fbp=' + encodeURIComponent(freshFbp));
    } else if (attr.fbp) {
      parts.push('fbp=' + encodeURIComponent(attr.fbp));
    }
    if (attr.utm_source) parts.push('us=' + encodeURIComponent(attr.utm_source).slice(0, 30));
    if (attr.utm_campaign) parts.push('uc=' + encodeURIComponent(attr.utm_campaign).slice(0, 30));

    var eventId = 'rs_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    parts.push('eid=' + eventId);

    return { clientRef: parts.join('|').slice(0, 200), eventId: eventId };
  }

  function appendClientRefToStripeUrl(url, clientRef) {
    if (url.indexOf('client_reference_id=') !== -1) return url;
    var sep = url.indexOf('?') === -1 ? '?' : '&';
    return url + sep + 'client_reference_id=' + encodeURIComponent(clientRef);
  }

  function getLtoPurchaseValue() {
    try {
      var params = new URLSearchParams(window.location.search);
      var cartParam = parseFloat(params.get('cart'));
      if (!isNaN(cartParam) && cartParam > 0) return cartParam;
    } catch (e) {}
    try {
      var stored = parseFloat(sessionStorage.getItem('rs_lto_value'));
      if (!isNaN(stored) && stored > 0) return stored;
    } catch (e) {}
    return 7;
  }

  function loadMetaPixel() {
    if (initialized || window.fbq) return;
    initialized = true;

    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', PIXEL_ID);
    fbq('track', 'PageView');

    captureAttribution();
    trackPageEvents();
  }

  function trackPageEvents() {
    if (!window.fbq) return;
    var path = window.location.pathname.replace(/\/$/, '') || '/';

    if (path === '/agency-starter-lto') {
      fbq('track', 'ViewContent', {
        content_name: 'AI Board LTO',
        content_category: 'Digital Product',
        content_ids: ['ai-board-lto'],
        value: 7,
        currency: 'USD'
      });
    }

    if (path === '/agency-oto1') {
      if (!sessionStorage.getItem('rs_purchase_lto_fired')) {
        var ltoValue = getLtoPurchaseValue();
        var lastEventId = null;
        try { lastEventId = sessionStorage.getItem('rs_last_event_id'); } catch (e) {}
        var purchaseEventId = lastEventId || ('rs_p_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8));

        fbq('track', 'Purchase', {
          value: ltoValue,
          currency: 'USD',
          content_name: 'AI Board (LTO)',
          content_category: 'Digital Product',
          content_ids: ['ai-board-lto']
        }, { eventID: purchaseEventId });

        try { sessionStorage.setItem('rs_purchase_lto_fired', '1'); } catch (e) {}
        try { sessionStorage.removeItem('rs_lto_value'); } catch (e) {}
      }
    }

    if (path === '/diagnostic-booked.html' || path === '/diagnostic-booked') {
      if (!sessionStorage.getItem('rs_purchase_audit_fired')) {
        fbq('track', 'Purchase', {
          value: 97,
          currency: 'USD',
          content_name: 'AI-First Company Audit',
          content_category: 'Service',
          content_ids: ['audit-service']
        });
        try { sessionStorage.setItem('rs_purchase_audit_fired', '1'); } catch (e) {}
      }
    }
  }

  function attachClickTracking() {
    document.addEventListener('click', function (e) {
      var target = e.target && e.target.closest ? e.target.closest('a, button') : null;
      if (!target) return;

      var href = target.getAttribute('href') || '';

      if (href.indexOf('buy.stripe.com') !== -1) {
        var stripeValue = getStripeValue(href);
        if (stripeValue) {
          try { sessionStorage.setItem('rs_lto_value', String(stripeValue)); } catch (e) {}
        }

        var built = buildClientReferenceId();
        var newHref = appendClientRefToStripeUrl(href, built.clientRef);
        if (newHref !== href) target.setAttribute('href', newHref);

        try { sessionStorage.setItem('rs_last_event_id', built.eventId); } catch (e) {}

        if (window.fbq) {
          fbq('track', 'InitiateCheckout', {
            content_name: 'Stripe Checkout',
            value: stripeValue || 7,
            currency: 'USD'
          }, { eventID: built.eventId });
        }
      }

      if (href.indexOf('calendar.app.google') !== -1 || href.indexOf('cal.com') !== -1) {
        if (window.fbq) {
          fbq('track', 'Lead', {
            content_name: 'Discovery Call'
          });
        }
      }
    }, true);
  }

  function checkConsent() {
    if (window.rsConsent && window.rsConsent.has('marketing')) {
      loadMetaPixel();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      checkConsent();
      attachClickTracking();
    });
  } else {
    checkConsent();
    attachClickTracking();
  }

  window.addEventListener('rs:consent-changed', function (e) {
    if (e && e.detail && e.detail.marketing) {
      loadMetaPixel();
    }
  });
})();
