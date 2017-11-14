/**
 *    Info browser
 *        Dispocitivos moviles
 */
function mobileDetecting() {
  var bodyTag = document.getElementsByTagName("body")[0];

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPhone: function () {
      return navigator.userAgent.match(/iPhone|iPod/i);
    },
    ipad: function () {
      return navigator.userAgent.match(/iPad/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  // Es movil
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').addClass('mobile');
  }

  // Es ios
  if (isMobile.iOS()) {
    $('body').addClass('iOS');
  }

  // tipo de movil
  if (isMobile.Android()) {
    $('body').addClass('Android');
  } else if (isMobile.BlackBerry()) {
    $('body').addClass('BlackBerry');
  } else if (isMobile.ipad()) {
    $('body').addClass('ipad');
  } else if (isMobile.iPhone()) {
    $('body').addClass('iPhone');
  } else if (isMobile.Opera()) {
    $('body').addClass('Opera');
  } else if (isMobile.Windows()) {
    $('body').addClass('Windows');
  }

}
