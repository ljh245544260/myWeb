
$(document).scroll(function(event) {
	var T=0;//滚动条滚动高度；
	T =$(this).scrollTop();
	var nav_T1=$('.H_box').offset().top;
	var nav_T2=$('.ld_main').offset().top;
	var nav_T3=$('.container').offset().top;
	
	var nav_T5=$('.zqh_wrap').offset().top;
	if (T<nav_T1) {
		$('.yu_aboutnav').hide();
	}
	
	if (T>=nav_T1) {
		$('.yu_aboutnav').show();
	
		$('.yu_aboutnav .li1').css({
			'background-position':'0 0'
		});
		$('.yu_aboutnav .li2').css({
			'background-position':'0 0'
		});
		$('.yu_aboutnav .li3').css({
			'background-position':'0 0'
		});
	}

	if (T>=nav_T2) {
		$('.yu_aboutnav .li1').css({
			'background-position':'-44px 0'
		});
		$('.yu_aboutnav .li2').css({
			'background-position':'-44px 0'
		});
		$('.yu_aboutnav .li3').css({
			'background-position':'0 -86px'
		});
	}
	if (T>=nav_T3) {
		$('.yu_aboutnav .li1').css({
			'background-position':'-88px 0'
		});
		$('.yu_aboutnav .li2').css({
			'background-position':'-88px 0'
		});
		$('.yu_aboutnav .li3').css({
			'background-position':'0 -172px'
		});
	}
	if (T>=nav_T5) {
			$('.yu_aboutnav').hide();
		}
});
$(document).ready(function() {
	//=======返回顶部========
	$('#lqh_fr').click(function(){
				$('body').animate({'scrollTop':0},500 );  //动画的方式滚动回到顶部
			});
});