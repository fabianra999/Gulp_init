/**
 * Animacion Scroll vinculo
 *    clase activa para efecto "aAnimate"
 */
function linkAnimate() {
    $('body').on('click', 'a.aAnimate', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
        return false;
    });
}

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


/**
 * Funcion slider
 *
 */
function slideToggle() {

// Set the effect type (slide slow fast swing linear)
    var effect = 'slide';

    // Set the options for the effect type chosen (Right Left Up Down)
    var options = {direction: "down"};

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $('#bannerfullscreen').toggle(effect, options, duration);

}
