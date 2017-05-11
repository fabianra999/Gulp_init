/*anima vinculo a con class aAnimate con id dentro de body o etc*/
function linkAnimate() {
	$('body').on('click', 'a.aAnimate', function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 800);
		return false;
	});
}

/*hacer scroll horizontal con btn rueda mouse solo en div class container-horizontal*/
function scrollHorizontal() {
	$('.container-horizontal').on('mousewheel', function (event, delta) {
		this.scrollLeft -= delta * 30;
		event.preventDefault();
	});
}

//  detecta browser movil
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
			return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
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

//   detect browser version
function detectBrowser() {
	var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "Other";
			this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
		},
		searchString: function (data) {
			for (var i = 0; i < data.length; i++) {
				var dataString = data[i].string;
				this.versionSearchString = data[i].subString;

				if (dataString.indexOf(data[i].subString) !== -1) {
					return data[i].identity;
				}
			}
		},
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index === -1) {
				return;
			}

			var rv = dataString.indexOf("rv:");
			if (this.versionSearchString === "Trident" && rv !== -1) {
				return parseFloat(dataString.substring(rv + 3));
			} else {
				return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
			}
		},

		dataBrowser: [{ string: navigator.userAgent, subString: "Edge", identity: "MS Edge" }, { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" }, { string: navigator.userAgent, subString: "Trident", identity: "Explorer" }, { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" }, { string: navigator.userAgent, subString: "Opera", identity: "Opera" }, { string: navigator.userAgent, subString: "OPR", identity: "Opera" }, { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" }, { string: navigator.userAgent, subString: "Safari", identity: "Safari" }]
	};

	BrowserDetect.init();

	//body add class
	var bodyTag = document.getElementsByTagName("body")[0];
	//console.log( BrowserDetect.browser + BrowserDetect.version);
	//bodyTag.className += (BrowserDetect.browser + BrowserDetect.version);
	$('body').addClass(BrowserDetect.browser + BrowserDetect.version);
	$('body').addClass(BrowserDetect.browser);
}

//  viewportSize
function viewportSize() {
	var ventanaAncho = $(window).width();
	var ventanaAlto = $(window).height();

	var altoViewpor = ventanaAlto + 'px';
	var anchoViewpor = ventanaAncho + 'px';

	if (ventanaAncho <= 480) {
		//console.log('movil :', ventanaAncho);

	} else if (ventanaAncho > 480 && ventanaAncho <= 768) {
		//console.log('tabla :', ventanaAncho);

	} else if (ventanaAncho > 768) {
		//console.log('desktop :', ventanaAncho);
	}
}

/* llamados
==============================================================================*/
/*$( window ).resize(function() {
	detectBrowser () ;
	mobileDetecting () ;
	viewportSize () ;
});*/

/*(function  () {
	detectBrowser () ;
	mobileDetecting () ;
	viewportSize () ;

	if ($('body').is('.mobile')){ //si tine la clase

	}

})();*/

console.log('for');

for (var i = 1; i <= 10; i++) {

	if (i == 4 || i == 7) {
		//salta el bucle al comienzo cuando i es = a 4 o 7
		continue;
	}

	console.log('mi numero', i); // Primera iteracion imprime var i

	for (var x = 1; x <= 10; x++) {
		console.log(i, 'x', x, '=', i * x);
	}

	if (i == 5) {
		//termina el bucle cuando i es == 5
		break;
	}
}

console.log('while');

var $contador = 1;
while ($contador < 5) {
	console.log('hola while:', $contador);
	$contador++;
	if ($contador == 3) {
		break;
	}
}