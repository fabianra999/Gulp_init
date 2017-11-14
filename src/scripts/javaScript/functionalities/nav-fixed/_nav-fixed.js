/**
 *  nav fixed
 *    clase activa para efecto "menu-fixed"
 *    menui => contenedor fixet
 */
function fixetNav () {
  setTimeout(function () {
    var menui = $('.upselling__nav');
    var alturaMenu = menui.offset().top;
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > alturaMenu) {
        menui.addClass('menu-fixed');
      } else {
        menui.removeClass('menu-fixed');
      }
    });
  }, 1000);
}
