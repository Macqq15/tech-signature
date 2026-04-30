/**
 * runsitself.co — Meta Pixel with GDPR consent guard + custom events
 * Pixel ID: 4476008692626040 (Build With Creators Pixel / Dataset)
 *
 * STRICT mode: fbevents.js is NOT loaded until user grants marketing consent.
 *
 * Events fired:
 *  - PageView         — every page (after consent)
 *  - ViewContent      — /agency-starter-lto landing
 *  - Purchase $14.95  — /agency-oto1 (post-LTO landing, value approximated to base SKU)
 *  - Purchase $297    — /wiring-booked.html (post-Wiring booking)
 *  - InitiateCheckout — click on any buy.stripe.com link
 *  - Lead             — click on Discovery booking (calendar.app.google)
 *
 * Note: client-side Purchase value is approximate (LTO has 4 SKUs $14.95-$28.95).
 * Server-side CAPI through Stripe webhook would give exact values — deferred.
 */
(function () {
  'use strict';

  var PIXEL_ID = '4476008692626040';
  var initialized = false;

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
        value: 14.95,
        currency: 'USD'
      });
    }

    if (path === '/agency-oto1') {
      if (!sessionStorage.getItem('rs_purchase_lto_fired')) {
        fbq('track', 'Purchase', {
          value: 14.95,
          currency: 'USD',
          content_name: 'AI Board (LTO)',
          content_category: 'Digital Product',
          content_ids: ['ai-board-lto']
        });
        try { sessionStorage.setItem('rs_purchase_lto_fired', '1'); } catch (e) {}
      }
    }

    if (path === '/wiring-booked.html' || path === '/wiring-booked') {
      if (!sessionStorage.getItem('rs_purchase_wiring_fired')) {
        fbq('track', 'Purchase', {
          value: 297,
          currency: 'USD',
          content_name: 'AI Board Wiring Service',
          content_category: 'Service',
          content_ids: ['wiring-service']
        });
        try { sessionStorage.setItem('rs_purchase_wiring_fired', '1'); } catch (e) {}
      }
    }
  }

  function attachClickTracking() {
    document.addEventListener('click', function (e) {
      var target = e.target && e.target.closest ? e.target.closest('a, button') : null;
      if (!target) return;

      var href = target.getAttribute('href') || '';

      if (href.indexOf('buy.stripe.com') !== -1) {
        if (window.fbq) {
          fbq('track', 'InitiateCheckout', {
            content_name: 'Stripe Checkout',
            currency: 'USD'
          });
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
