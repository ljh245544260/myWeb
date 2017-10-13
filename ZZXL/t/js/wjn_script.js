$(document).ready(function(){

	$('.wjn_menu').hover(function(){
		var div=$(this).find('.wjn_menu2');
		div.stop().animate({
			'margin-left':'0px'
		},400);
	},function(){
		var div=$(this).find('.wjn_menu2');
		div.stop().animate({
			'margin-left':'-65px'
		},400);
	});

	$('.wjn_shouye').hover(function(){
		//要注意margin-left  margin-top  margin-right  margin-bottom
		//方法一
		// var xx=$(this);
		// var yy=xx.index();
		// $('.wjn_shang').eq(yy).css({
		// 	'margin-left':'0',
		// 	'transition':'all 0.5s'
		// });
		// $('.wjn_you').eq(yy).css({
		// 	'margin-top':'0',
		// 	'transition':'all 0.5s'
		// });


		//方法二
		var list1=$(this).find('.wjn_shang');
		list1.stop().animate({
			'margin-left':'0',
		},300);

		var list2=$(this).find('.wjn_you');
		list2.stop().animate({
			'margin-top':'0',
		},300);

		var list3=$(this).find('.wjn_xia');
		list3.stop().animate({
			'margin-right':'0',
		},300);

		var list4=$(this).find('.wjn_zuo');
		list4.stop().animate({
			'margin-bottom':'0',
		},300);
	},function(){
		//方法一
		// $('.wjn_shang').css({
		// 	'margin-left':'-278px',
		// 	'transition':'all 0.5s'
		// });
		// $('.wjn_you').css({
		// 	'margin-top':'-218px',
		// 	'transition':'all 0.5s'
		// });

		//方法二
		var list1=$(this).find('.wjn_shang');
		list1.stop().animate({
			'margin-left':'-278px',
		},300);

		var list2=$(this).find('.wjn_you');
		list2.stop().animate({
			'margin-top':'-218px',
		},300);

		var list3=$(this).find('.wjn_xia');
		list3.stop().animate({
			'margin-right':'-278px',
		},300);

		var list4=$(this).find('.wjn_zuo');
		list4.stop().animate({
			'margin-bottom':'-218px',
		},300);

	});

	$('#aaa').click(function() {
		window.location.href = 'index.html';//页面跳转
	
	});

});