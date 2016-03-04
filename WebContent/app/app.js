/* root's */

var approot = '../app';
var wsroot = '../ws';

/* lib resources */
body('/lib/jquery-2.min.js');
body('/lib/angularjs/angular.min.js');
body('/lib/angularjs/angular-aria.min.js');
body('/lib/angularjs/angular-animate.min.js');
body('/lib/angular-material/angular-material.min.js');
body('/lib/angular-material/angular-material.min.css');

/*  */

var app = angular.module('anguLab', ['ngAnimate', 'ngMaterial'], function($locationProvider) {
	$locationProvider.html5Mode(true);
});

$(document).ready(function() {
	$('body').show();
});

function body(value) {
	if (value.charAt(0) != '/') {
		value = '/' + value;
	}

	if (value.indexOf('.js') > 0) {
		$('body').append('<script src="' + approot + value + '"></script>');
	} else if (value.indexOf('.css') > 0) {
		$('body').append(
				'<link href="' + approot + value + '" rel="stylesheet">');
	}
}