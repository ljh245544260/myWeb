$(document).ready(function(){
	/*欢迎页面定时执行*/
	var win_height = $(window).height();
	var win_width = $(window).width();
	console.log('height' + win_height);
	console.log('width' + win_width);
	$('.welcome').css({'height':win_height + 'px'});
	$('.welcome').css({'width':win_width + 'px'});
	setTimeout(function(){
		animate();		
	},100);
	setTimeout(function(){
			$('.welcome').css({'display':'none'});
			$('.WebBody').css({'display':'block'});
			console.log('我执行了1');
			//$('.main').css({'opacity':'1','z-index':'99'});
		},2200);
	function animate(){	
		$('.welcomeLine').css({'width':'100%'});
		console.log('我执行了2');
		//console.log('我执行了width');
	}
	/*欢迎页面定时执行*/


});