$(window).ready(function(){

	(function changeSocialSize(){	
	 	if ($(window).height() < 800) { 
	 		 $('.fa').addClass('fa-2x');
	 	} else {
	 		$('.fa').addClass('fa-3x');
	 	}
	})();

})