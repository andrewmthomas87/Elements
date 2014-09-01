
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 47, 50, 79, 82];
var symbols = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Ag', 'Sn', 'Au', 'Pb'];
var names = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Silver', 'Tin', 'Gold', 'Lead'];
var colors = ['Blue', 'Green', 'Red', 'Yellow'];
var locations = [0, 3, 0, 0, 2, 3, 3, 3, 3, 3, 0, 0, 2, 2, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 1, 1, 1, 1];

var characteristics = [numbers, symbols, names, locations];
var characteristicNames = ['Number', 'Symbol', 'Name', 'Location'];

window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

function resize() {
	$('body').css('font-size', $(window).width() / 15);
}

$(window).resize(resize);

$(document).ready(function() {
	resize();
	var element = (int) (Math.random() * numbers.length);
	var element2 = element;
	while (element2 == element) {
		var element2 = (int) (Math.random() * numbers.length);
	}
	var element3 = element;
	while (element3 == element || element3 == element2) {
		var element3 = (int) (Math.random() * numbers.length);
	}
	var element4 = element;
	while (element4 == element || element4 == element3 || element4 == element2) {
		var element4 = (int) (Math.random() * numbers.length);
	}
	var characteristic = (int) (Math.random() * characteristics.length);
	var characteristic2 = characteristic;
	while (characteristic2 == characteristic) {
		var characteristic2 = (int) (Math.random() * characteristics.length);
	}
	$('body h3:first-child').html(characteristicNames[characteristic]);
	$('body h1').html(characteristics[characteristic][element]);
	var answers = [characteristics[characteristic][element], characteristics[characteristic2][element2], characteristics[characteristic3][element3], characteristics[characteristic4][element4]];
	answers.sort(function() { return 0.5 - Math.random() });
	for (var i = 0; i < answers.length; i++) {
		$('body h2:nth-child(' + (i + 1) + ')').html(answers[i]);
	}
});
