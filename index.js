$(window).on('beforeunload', function() {
    	$(window).scrollTop(0);
});

$(document).ready(function(){

	(function changeSocialSize(){	
	 	if ($(window).height() < 800) { 
	 		 $('.fa').addClass('fa-2x');
	 	} else {
	 		$('.fa').addClass('fa-3x');
	 	}
	})();

	(function changeHeightForMobile(){
		let height = $(window).height();
		if ($(window).height() < 3000){
			$('.landing').css('height', height.toString());
		}
	})();


	(function changeNavOpacity(){
		let win = $(window);
		let nav = $("nav");

		win.on("scroll", function(){
		    let top = win.scrollTop();
		    nav.css("opacity", 1 - top / 200);
		})
	})();

	(function scrollToDiv(){
		$("#nav-events").click(function() {
    		$('html,body').animate({
        		scrollTop: $(".events").offset().top},
        	'slow');
		});

		$("#nav-about, #nav-contact").click(function() {
    		$('html,body').animate({
        		scrollTop: $(".footer").offset().top},
        	'slow');
		});
	})();

	(function changeCarouselContainer(){
		var win = $(window);
		if (win.width() >= 1300) { 
			$('.addContainer').addClass('container');
		};

		$(window).on('resize', function(){
		    if (win.width() >= 1300) { 
		    	$('.addContainer').addClass('container');
		    } else {
		    	$('.addContainer').removeClass('container');
		    }
		});
	})();

	(function setFooterLogoHeight(){
		$('.footer-logo-container').css('height', $('.heightToCopy').height());
		
		$(window).on('resize', function(){
		    	$('.footer-logo-container').css('height', $('.heightToCopy').height());
		});
	})();

})
