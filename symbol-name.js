
var symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Ag', 'Sn', 'Au', 'Pb'];
var names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Silver', 'Tin', 'Gold', 'Lead'];

var answer;

window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

function resize() {
	$('body').css('font-size', $(window).width() / 15);
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
	next();
	$('h2').click(function() {
		if ($('h2.correct').length > 0) {
			return;
		}
		if ($(this).html() == answer) {
			$(this).addClass('correct');
		}
		else {
			$(this).addClass('incorrect');
			for (var i = 0; i < 4; i++) {
				if ($('div h2:nth-child(' + (i + 1) + ')').html() == answer) {
					$('div h2:nth-child(' + (i + 1) + ')').addClass('correct');
				}
			}
		}
		setTimeout(function() {
			next();
		}, 2500);
	});
});

function next() {
	$('h2.correct').removeClass('correct');
	$('h2.incorrect').removeClass('incorrect');
	var element = parseInt(Math.random() * 40);
	$('h1').html(symbols[element]);
	answer = names[element];
	var answers = [answer];
	for (var i = 1; i < 4; i++) {
		var randomAnswer;
		do {
			randomAnswer = names[parseInt(Math.random() * 40)];
		}
		while (answers.indexOf(randomAnswer) > -1);
		answers[i] = randomAnswer;
	}
	answers.sort(function() {
		return 0.5 - Math.random();
	});
	for (var i = 0; i < 4; i++) {
		$('div h2:nth-child(' + (i + 1) + ')').html(answers[i]);
	}
}
