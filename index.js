$(window).ready(function(){

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


})