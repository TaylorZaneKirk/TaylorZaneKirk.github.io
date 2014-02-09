//Function Name: resizeMe
//Trigger: on resize
//Purpose: To force parameters such as font size
//			to resize based on current window size

//Trigger detection and function handler
$(function(){
	$("body").css('min-Height', '350px');
	$("body").css('min-Width', '700px');
	
	$(window).bind('resize', function(){
		resizeMe();
	}).trigger('resize');
});

resizeMe = function(){
	var preferredHeight = 667;
	var displayHeight = $(window).height();
	var percentage = displayHeight / preferredHeight;
	var newFontSize = Math.floor(78 * percentage) - 1;
	if(newFontSize >= 32)
		$("body").css('font-size', newFontSize);	
}