$('#ljw_list').find('li').eq(0).show();

var iNow=0, zindex=0, t, img,
		iNow2=0, iNow3=0;
//定时器函数
	function start_Interval(){
	     t=setInterval(function() {
		 play('RIGHT')
		},2000);
	};
	start_Interval();
//左右按钮事件
	$('#left').click(function() {//.unbind()解除一切绑定
		clearInterval(t);
		play('LEFT');		
	});
	$('#right').click(function() {//匿名函数
		clearInterval(t);
		play('RIGHT');		
	});
//序号按钮点击事件
	$('#btns span').click(function() {
	 	iNow3=$(this).index();
	 	clearInterval(t);
	 	play('CLICK');
	 	console.log(iNow3)
	 	console.log(iNow)
	 });
//鼠标悬停状态事件
	$('#ljw_pic_play').mouseover(function() {
		clearInterval(t);
		
	});
	$('#ljw_pic_play').mouseout(function() {
		start_Interval();
	
	});
	function play(type){//函数：名字play，负责播放下一张
		//函数的作用：封装一段代码，放在内存（并没有马上被执行）
		//除非uyou人调用它，调用方法：play（）
		//函数可以接受传递过来的变量
		//用法：function play（接收器）｛使用接收器｝
		//在调用函数的时候：play（发送过去的参数）

		if (type=='LEFT') {iNow--;iNow2=iNow+1}//++和+1的区别！！！//left按钮判断语句
		if (type=='RIGHT'){iNow++;iNow2=iNow-1}//right按钮判断语句
		if (type=='CLICK') {iNow2=iNow;iNow=iNow3}//click序号按钮判断语句
		if (iNow>3){iNow=0}
		if (iNow<0){iNow=3}	
		if (iNow2<0) {iNow2=3}
		if (iNow2>3) {iNow2=0}
		zindex++;
//准备消失的图片效果
		$('#ljw_list li').eq(iNow2).fadeOut();
//准备显示的图片效果		
		img=$('#ljw_list li').eq(iNow);

		img.fadeIn();
		
//序号按钮状态
		$('#btns span').removeClass('span_on');
		$('#btns span').eq(iNow).addClass('span_on');
	};


// 导航******************************************
	$("#cb_bao .cb_hover").hover(function() {
	var i=$(this).index();
	console.log(i)
	$("#cb_bao .cb_hover img").addClass('on');
	$("#cb_bao .cb_hover img").eq(i).removeClass('on');
}, function() {
	$("#cb_bao .cb_hover img").removeClass('on');
});
// 页面1***************************************
$('#kcon a').hover(function() {
	$('#kcon a img').css('opacity', '0.5');
	$(this).find('img').css('opacity', '1');
}, function() {
	$('#kcon a img').css('opacity', '1');
});
// 页面6*************
$(document).scroll(function(){
	var scrolltop=$(document).scrollTop();
	if (scrolltop>430) {
	$('#popup_left').stop().animate({ "top":(scrolltop+310)+'px' },500);
	};
	$('#popup_right').stop().animate({ "top":(scrolltop+165)+'px' },500);
})


//页面2    页面3
$(document).ready(function() {
	

var i =0;
	
    
		$('.X_list li').eq(0).addClass('on')
		var W_w =$(window).width();
		$('.list li').css({'width':W_w});
		var firstLi = $('.list li').eq(0).clone();
		$('.list').append(firstLi).width($('.list li').length*W_w);
		
    var T = setInterval(function(){
play()
    	$('.X_list li').removeClass('on')
    	$('.X_list li').eq(i).addClass('on')
		 			
		 			i++;
							},2000) 

		function play(target){
			 
				if(i==$('.list li').length){
					$('.X_list li').removeClass('on')
    				$('.X_list li').eq(0).addClass('on')
    				i=0;
					$('.list').css({'left':'0%'});

					 $('.list').stop().animate({'left':(0)+'px'}, 300);
				}
				else{
					    $('.list').stop().animate({'left':(i*-W_w)+'px'}, 300);
					}
		}
		$('.X_list li').click(function() {

					var li_index = $(this).index();
						$('.X_list li').removeClass('on')
				    	$('.X_list li').eq(li_index).addClass('on')
					console.log("i="+i);
					i = li_index;
					play( i );
					clearInterval(T);
				})




	var t =0;
	
     
		$('.X_list2 li').eq(0).addClass('on')
		var W_w =$(window).width();
		$('.list2 li').css({'width':W_w});
		var Setion2_FirstLi = $('.list2 li').eq(0).clone();
		$('.list2').append(Setion2_FirstLi).width($('.list2 li').length*W_w);
    var T2 = setInterval(function(){
				play2()
    	$('.X_list2 li').removeClass('on')
    	$('.X_list2 li').eq(t).addClass('on')
		 			
		 			t++;
							},2000) 

		function play2(target){
			 
				if(t==$('.list li').length){
					$('.X_list2 li').removeClass('on')
    				$('.X_list2 li').eq(0).addClass('on')
    				t=0;
					$('.list2').css({'left':'0%'});

					 $('.list2').stop().animate({'left':(0)+'px'}, 0);
				}
				if(t!=$('.list li').length&&t!=0){
					    $('.list2').stop().animate({'left':(t*-W_w)+'px'}, 300);
					}
		}
		$('.X_list2 li').click(function() {

					var li_index2 = $(this).index();
						$('.X_list2 li').removeClass('on')
				    	$('.X_list2 li').eq(li_index2).addClass('on')
					t = li_index2;
					play2( t );
					clearInterval(T2);
				})
});