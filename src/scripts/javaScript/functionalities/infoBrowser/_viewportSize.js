/**
 *    viewport Size
 *        viewportSize
 */
function viewportSize() {
  var ventanaAncho = $(window).width();
  var ventanaAlto = $(window).height();

  var altoViewpor = ventanaAlto + 'px';
  var anchoViewpor = ventanaAncho + 'px';

  if (ventanaAncho <= 480) {
    console.log('movil :', ventanaAncho);

  } else if (ventanaAncho > 480 && ventanaAncho <= 768) {
    console.log('tabla :', ventanaAncho);

  } else if (ventanaAncho > 768) {
    console.log('desktop :', ventanaAncho);
  }
}
