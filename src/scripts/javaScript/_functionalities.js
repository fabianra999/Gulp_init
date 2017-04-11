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
