(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// sticky header
		jQuery(window).scroll(function() {
            var upto = jQuery(window).scrollTop();
            if (upto > 500) {
                jQuery('.header_area').addClass('nav-stciky').removeClass('.header_area');

            } else {
                jQuery('.header_area').removeClass('nav-stciky').addClass('.header_area');
            }
        });
		
		// wow init
		new WOW().init();
				
		
		
		
		
		
		
		
		
	});
})(jQuery);