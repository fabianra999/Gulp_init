/*anima vinculo a con class aAnimate con id dentro de body o etc*/
function linkAnimate () {
	$('body').on('click', 'a.aAnimate', function  () {
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 800);
		return false;
	});
}

/*hacer scroll horizontal con btn rueda mouse solo en div class container-horizontal*/
function scrollHorizontal () {
	$('.container-horizontal').on('mousewheel', function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});
}

function slideToggle(){

// Set the effect type (slide slow fast swing linear)
	var effect = 'slide';

	// Set the options for the effect type chosen (Right Left Up Down)
	var options = { direction: "down" };

	// Set the duration (default: 400 millisecond	s)
	var duration = 500;

	$('#bannerfullscreen').toggle(effect, options, duration);

}
