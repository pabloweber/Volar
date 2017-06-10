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
		if ($(window).height() < 750){
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
	})();

})