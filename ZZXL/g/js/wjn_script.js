
$(document).ready(function(){
	//alert('hhh');
	$('.wjn_main_l_b li').hover(
		function(){
			var TS=$(this)
			$('.wjn_main_l_b li').removeClass('on');
			TS.addClass('on');

	});
	$('.wjn_bottom_ul li').hover(
		function(){
			var TS=$(this)
			$('.wjn_bottom_ul li').removeClass('om');
			TS.addClass('om');

	});

	
});

	
