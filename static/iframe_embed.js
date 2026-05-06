/**
 * Okul Anket - iFrame Otomatik Yükseklik
 * Bu dosyayı okul sitesine yükleyin ve iframe yanına ekleyin.
 * 
 * KULLANIM: Okul sitesine sadece şunu yapıştırın:
 *
 * <div id="anket-kap"></div>
 * <script src="iframe_embed.js"></script>
 */
(function() {
  var ANKET_URL = "https://ilkokul_anket.onrender.com"; // <-- Kendi adresinizi yazın

  // iFrame oluştur
  var frame = document.createElement('iframe');
  frame.id = 'anket-cerceve';
  frame.src = ANKET_URL;
  frame.style.cssText = [
    'width:100%',
    'border:none',
    'display:block',
    'min-height:500px',
    'transition:height 0.2s ease'
  ].join(';');
  frame.setAttribute('scrolling', 'no');
  frame.setAttribute('allowtransparency', 'true');

  var kap = document.getElementById('anket-kap') || document.body;
  kap.appendChild(frame);

  // Mesajları dinle
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      frame.style.height = e.data.iframeHeight + 'px';
    }
    // Adım geçişinde iframe'in üstüne kaydır
    if (e.data && e.data.anketScrollTop) {
      var rect = frame.getBoundingClientRect();
      var scrollHedef = rect.top + window.pageYOffset - 16;
      window.scrollTo({top: scrollHedef, behavior: 'smooth'});
    }
  });
})();
