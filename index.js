$(window).ready(function(){

	var scrollTop = $(this).scrollTop();

  	$('#logo-overlay').css({
   		opacity: function() {
      		var elementHeight = $(this).height();
      		return 1 - (elementHeight - scrollTop) / elementHeight;
    	}
  	});

})