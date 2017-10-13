//韦金娜负责的部分开始=====================

var data=['联系我们','人才招聘','探店花絮'];//数组  点击后让最顶部的文字改变

$(document).ready(function(){
	
	$('.wjn_mbx').eq(0).show();//筛选面包屑的第一个显示出来(因为在css中已隐藏)

	$('.wjn_header li h3').eq(0).css({'color':'#4d4d4d'});//一开始导航里的中文字不变
	
	$('.wjn_li').eq(0).show();//筛选一个小导航显示出来(因为在css中已隐藏)

	$('.wjn_BOX ul').eq(0).show();//筛选中间的一个板块显示(因为在css中已隐藏)
	
	$('.wjn_header li').click(function(){
    $('body').animate({'scrollTop':0},0);
    setTimeout(function(){
		$('body').animate({'scrollTop':860},700);
	},100)
		//获取索引
		var t=$(this);
		var tt=t.index();

		//让最顶部的文字改变
		$('#wjn_t').html(data[tt]);

		//让之前的面包屑隐藏，再筛选显示
		$('.wjn_mbx').hide();
		$('.wjn_mbx').eq(tt).show();

		//加高亮样式
		$('.wjn_header li').removeClass('wjn_on');
		t.addClass('wjn_on');

		//点击后让导航里的中文字变黑
		$('.wjn_header li h3').css({'color':'#bcbcbc'});
		$('.wjn_header li h3').eq(tt).css({'color':'#4d4d4d'});

		//让之前的小导航隐藏，再筛选显示
		$('.wjn_li').hide();
		$('.wjn_li').eq(tt).show();

		//让之前的板块隐藏，再筛选显示
		$('.wjn_BOX ul').hide();
		//console.log(tt);
		$('.wjn_BOX ul').eq(tt).show();
		
	});



//韦金娜负责的部分结束=====================


// ============================================================大图轮播

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



//LJY====================================
	$('.LJY_ul li').hover(function(){ //鼠标划过时执行
		var i = $(this).index();
		if(i<=3){

			$('.LJY_show1').animate({"height":"0"}, 30);
			$('.LJY_info').hide();
			setTimeout(function(){
				$('.LJY_show1').animate({"height":"300px"}, 300);
				$('.LJY_info').eq(i).show();

			},5);
			console.log(i);

		}
		if( i>3){

			//点击下面6个li的时候，上面显示框收缩隐藏
			$('.LJY_show1').animate({"height":"0"}, 200);
			setTimeout(function(){
				$('.LJY_show1 .LJY_info').hide();

			},100);

			//下面的显示框显示信息
			$('.LJY_show2').animate({"height":"0"}, 10);
			$('.LJY_show2 .LJY_info').hide();

			setTimeout(function(){
				$('.LJY_show2').animate({"height":"300px"}, 200);

			},10);
			
			setTimeout(function(){
				$('.LJY_info').eq(i-1).show();	
			},300);						

		}

	},function(){ //鼠标移走时执行
		var i = $(this).index();
		if(i<=3){
			$('.LJY_show1').animate({"height":"300px"}, 300);
	
		}

		if(i>3){
			$('.LJY_show2').animate({"height":"300px"}, 300);
	
		}

	});//hover的结束

//====================控制浮动框
	$(document).scroll(function(){
	var scrolltop=$(document).scrollTop();
	if (scrolltop>430) {
	$('#popup_left').stop().animate({ "top":(scrolltop+310)+'px' },500);
	};
	$('#popup_right').stop().animate({ "top":(scrolltop+165)+'px' },500);
})




}); //ready的结束

//======================================================





