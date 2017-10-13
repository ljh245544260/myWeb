$(document).ready(function(){
	$('.wjn_erweima').bind().click(function(event){
		$('.wjn_sys').show();
	});
	$(document).click(function(){
		$('.wjn_sys').hide();
	});

	$('.wjn_erweima').click(function(event){
		event.stopPropagation();
	});


	$('.wjn_ul li').hover(function(){
		$(this).css({
			'background':'#666',
			'color':'#FFFFFF',
			'transition':'all 0.4s'
		});
	},function(){//鼠标移走后
		$('.wjn_ul li').css({
			'background':'#f0f0f0',
			'color':'#000000',
			'transition':'all 0.3s'
		});
	});

	//高亮样式
	$('.wjn_ul li').click(function(){
		$('.wjn_ul li').removeClass('wjn_on');
		$(this).addClass('wjn_on');
	});

	$('.showmore').hover(function(){
		$('.showmore').css({
			'background':'#000000',
			'transition':'all 0.4s',
		});
		$('.showmore_E').html('显示更多');
		setTimeout(function(){
			$('.showmore_E').css({
				'color':'#FFFFFF'
			});
		},300);
	},function(){//鼠标移走后
		$('.showmore').css({
			'background':'#FFF',
			'transition':'all 0.3s',
		});
		$('.showmore_E').html('show me more');
		setTimeout(function(){
			
			$('.showmore_E').css({
				'color':'#000000'
			});
		},300);
			
	});







});//ready