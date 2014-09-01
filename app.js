
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 47, 50, 79, 82];
var symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Ag', 'Sn', 'Au', 'Pb'];
var names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Silver', 'Tin', 'Gold', 'Lead'];
var colors = ['Blue', 'Green', 'Red', 'Yellow'];
var locations = [0, 3, 0, 0, 2, 3, 3, 3, 3, 3, 0, 0, 2, 2, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 1, 1, 1, 1];

var characteristics = [numbers, symbols, names, locations];
var characteristicNames = ['Number', 'Symbol', 'Name', 'Location'];

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
});

function next() {
	var questionCharacteristic = parseInt(Math.random() * numbers.length);
	var element = questionCharacteristic;
	$('body h3:first-child').html(characteristicNames[questionCharacteristic]);
	var answerCharacteristic = questionCharacteristic;
	while (answerCharacteristic == questionCharacteristic) {
		answerCharacteristic = parseInt(Math.random() * characteristics.length);
	}
	$('body h3:last-child').html(characteristicNames[answerCharacteristic]);
	answer = characteristics[answerCharacteristic][element];
	var answers = [answer];
	for (var i = 1; i < 4; i++) {
		do {
			answers[i] = characteristics[answerCharacteristic][parseInt(Math.random() * numbers.length)];
		} while (answers.indexOf(answers[i]) > -1);
	}
	answers.sort(function() {
		return 0.5 - Math.random();
	});
	for (var i = 0; i < 4; i++) {
		$('body h2:nth-child(' + (i + 1) + ')').html(answers[i]);
	}
}
