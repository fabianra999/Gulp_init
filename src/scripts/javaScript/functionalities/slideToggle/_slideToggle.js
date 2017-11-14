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
