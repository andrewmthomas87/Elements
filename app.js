
function resize() {
	$('body').css('font-size', $(window).width() / 15);
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
});
