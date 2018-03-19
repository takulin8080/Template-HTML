// ==============================================================================================
// module/movetotop
// ==============================================================================================
// setup ========================================
$('body').append('<div data-movetotop></div>');
// function ========================================
$(window).scroll(function() {
	var pos = $(window).scrollTop();
	if(pos > 600) {
		$('[data-movetotop]').fadeIn('slow');
	} else {
		$('[data-movetotop]').fadeOut('slow');
	}
});
$('[data-movetotop]').click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 600);
});