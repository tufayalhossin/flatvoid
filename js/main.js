$(document).ready(function(){

	// get the current window size
	var win = $(window).outerWidth(true);
	$(window).on('resize', function() { win = $(window).outerWidth(true); });

	// main navbar toggle system
	$('.nav-inner').on('click', '.brand a:last-child', function(e) {
		// check the window width is less then 992 or not
		if(win < 992) {
			var menu = $('.nav-inner').find('.menu');

			if(menu.hasClass('open')) {
				menu.removeClass('open');
			} else {
				menu.addClass('open');
			}

			console.log(menu);
		}

		// neutralize the event
		e.preventDefault();
	});


	/*$(window).scroll(function(){
		 var win = $(window).outerWidth(true);

		if(win > 992) {
			if ($(this).scrollTop() > 0) {
		        $('.nav-wrapper').addClass("fixed");
		       } else {
		         $('.nav-wrapper').removeClass("fixed");  
			}
		}
	    
	});*/


});

