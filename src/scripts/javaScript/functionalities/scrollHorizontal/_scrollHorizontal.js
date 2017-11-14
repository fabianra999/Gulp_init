/**
 * Scroll horizontal
 *    rueda mouse solo en div class container-horizontal
 */
function scrollHorizontal() {
  $('.container-horizontal').on('mousewheel', function (event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
  });
}
