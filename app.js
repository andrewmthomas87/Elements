
function resize() {
	$('body').css('font-size', $(window).width() / 50);
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
});
