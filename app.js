
function resize() {
	$('body').css('font-size', $(window).width() / 10);
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
});
