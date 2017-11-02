// ==============================================================================================
// module/global-nav
// ==============================================================================================
// -----------------------------------------------
// require
// -----------------------------------------------
var overlay = require('../component/overlay');
// -----------------------------------------------
// variable
// -----------------------------------------------
var trg = $('.global-nav__trg');
var tar = $('.global-nav');
var catTrg = $('.global-nav-cat__title');
var catTar = $('.global-nav-cat__items');
// -----------------------------------------------
// function
// -----------------------------------------------
trg.click(function() {
	if($(this).attr('data-is-active') == 'true') {
		trg.attr('data-is-active', 'false');
		tar.attr('data-is-active', 'false');
		overlay(false);
	} else {
		trg.attr('data-is-active', 'true');
		tar.attr('data-is-active', 'true');
		overlay(true);
	}
});
$(window).resize(function() {
	trg.attr('data-is-active', 'false');
	tar.attr('data-is-active', 'false');
	catTrg.attr('data-is-active', 'false');
	catTar.attr('data-is-active', 'false');
	overlay(false);
	trg
});
$('[data-overlay-layer]').click(function() {
	trg.attr('data-is-active', 'false');
	tar.attr('data-is-active', 'false');
	overlay(false);
});
