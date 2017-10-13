$(document).ready(function(){
	var time = 0;//work右边点击的次数
	setTimeout(function(){
		animate();
	},2250);

	function animate(){	
		$('.Nav').animate({'top':'0'},100);
	}



/*大图轮播*/
	var z=0;//层次计数器
	var num = 0;	//执行次数计数器
	
	//var picChange_zindex = 0;
	
	var picChange_li = $('.picChange li');
	picChange_li.hide();
	picChange_li.eq(0).show();	
	var win_height = $(window).height();
	var i = win_height - 70;//变量i = 窗口高度-70
	
	// var i = picChange_li.length;
	// console.log(picChange_li.length);

	$(".bg1").addClass('windowSize');
	$(".picChange").addClass('windowSize');
	$(".main").addClass('windowSize');

	$(".bg2").addClass('windowSize');
	$('.windowSize').css({
		'width':'100%',
		'height':$(window).height() +'px',
		//'height':'100%',
		'min-height':'550px',
		'min-width':'1079px',
		// 'max-height'
	});
	//console.log('窗口的高：'+ $(window).height() );
	//
	Start();
/*大图轮播*/
function Start(){//图片轮播定时器函数
	setInterval(function(){
		picPlay();
	},4000);
}

function picPlay(){//首页图片轮播
		z +=1;
		num+=1;
		if(num>0){num=-1;}	
		var li = picChange_li.eq(num);
		li.css({'z-index':z});
		li.hide().fadeIn();
}
/*大图轮播*/
var r = $(document).scrollTop()
console.log('aaaaa:' +r)
	if(r>win_height)
	{
		$('.Nav').removeClass('NavFirst');
		$('.Nav').addClass('NavFixed');

	}


		$('.NavRight li').click(function(){
			var point = $(this).index();
			var mouseNum = win_height*point;
			
			if(point==0){
				$('html,body').animate({scrollTop:10},1000);
				
			}
			if(point==1){
				$('html,body').animate({scrollTop:mouseNum},1000);
				
			}
			if(point==2){
				$('html,body').animate({scrollTop:win_height*2-123},1000);
				
			}
			if(point==3){
				$('html,body').animate({scrollTop:win_height*3-275},1000);
				
			}	
			if(point==4){
				$('html,body').animate({scrollTop:win_height*3+510},1000);
			
			}			
		});
		
		




	
/*--------鼠标滑动导航变窄-----------*/
		$(document).scroll(function(){
			var mousewheel = $(document).scrollTop();
			
			
			$('.NavRight li').removeClass('onHover1');
			$('.NavRight li').removeClass('onHover2');
			if(mousewheel==0){/*o时*/
		 		$('.Nav').removeClass('NavFixed');
		 		$('.NavRight li').removeClass('onHover1');
			}
			if(mousewheel>0&&mousewheel<win_height-35){
				/*导航大于0且小于窗口高度时执行以下代码【首页】*/
		 		$('.Nav').addClass('NavFixed');/*添加导航变窄的css样式*/
		 		$('.Nav').addClass('NavFirst');
		 		$('.NavRight li').eq(0).addClass('onHover1');
		 		/*导航添加Onhover的效果*/
			}
			if(mousewheel>win_height-35&&mousewheel<win_height*2-123){
				/*导航大于窗口高度且小于窗口高度*2时执行以下代码【About】*/
				$('.Nav').removeClass('NavFirst');
				$('.NavRight li').eq(1).addClass('onHover2');	
			}
			if(mousewheel>win_height*2-124&&mousewheel<win_height*3-278){
			/*导航大于窗口高度*2且小于窗口高度*3时执行以下代码【Service】*/	
				$('.Nav').removeClass('NavFirst');
				$('.NavRight li').eq(2).addClass('onHover2');	
			}		
			if(mousewheel>win_height*3-279&&mousewheel<win_height*3+508){
			/*导航大于窗口高度*2且小于窗口高度*3时执行以下代码【Work】*/	
				$('.Nav').removeClass('NavFirst');
				$('.NavRight li').eq(3).addClass('onHover2');	
				//console.log('3333333333')
			}	
			if(mousewheel>win_height*3+508&&mousewheel<win_height*4+510){
			/*导航大于窗口高度*2且小于窗口高度*3时执行以下代码【Service】*/	
				$('.Nav').removeClass('NavFirst');
				$('.NavRight li').eq(4).addClass('onHover2');	
				//console.log('444444444')
			}	
		});


		
/*--------鼠标滑动导航变窄-----------*/
/*---------隐藏导航条内容--------------*/
	$('.Navbtn').click(function(){
		// console.log('i m be click')	
		if($(this).hasClass('NavbtnRotate-90')){
			$('.Navbtn').removeClass('NavbtnRotate -90');
			$('.Navbtn').addClass('NavbtnRotate90');	
			$('.NavRight').animate({'left':'0','opacity':'1'})
		}else{
			$('.Navbtn').removeClass('NavbtnRotate90');
			$('.Navbtn').addClass('NavbtnRotate-90');		
			$('.NavRight').animate({'left':'10px','opacity':'0'})
		}
	});
/*---------隐藏导航条内容--------------*/
/*-----------小鼠标导航位置-------------------*/
	var mouse = $('.mouse');
	mouse.click(function(){
		$('html,body').animate({scrollTop:i},1000);//使用滑动的效果让导航更顺滑
	});
/*-----------小鼠标导航位置-------------------*/
/*==================work小导航hover的效果================*/

	var leftLi = $('.left li');
	leftLi.eq(0).addClass('liIn');
	leftLi.hover(function(){
		// console.log('我被hover了')
		$(this).addClass('liOn');
	},function(){
		$(this).removeClass('liOn');
	});

	var rightLi = $('.right li');
	console.log(rightLi.length);
	rightLi.hover(function(){
		$(this).addClass('liOnBtn');
		
	},function(){
		$(this).removeClass('liOnBtn');
	});
/*==================work小导航hover的效果================*/
/*------------work小导航点击效果----------------*/

var aaaa;
	leftLi.click(function(){
		var po = $(this).index();

		aaaa=$('#ul ul').eq(po).find('li').length;

		console.log(aaaa);

 		console.log('po' + po);
		leftLi.removeClass('liIn');
		$(this).addClass('liIn');
		var t = $(this).index();
		var liBox =$('.listBox ul');
		time=0;
		liBox.css({left:'0'});
	$('.Work').css({'height':'805px'});
	$('.Work_box').css({'height':'600px'});
	$('#ul ul').addClass('listHide');
		if(t==0){
			$('#ALL').removeClass('listHide');
			$('#ALL').addClass('listShow');
		}else if(t==1){
			
			$('#WEB').removeClass('listHide');
			$('#WEB').addClass('listShow');
		}else if(t==2){
			
			$('#APP').removeClass('listHide');
			$('#APP').addClass('listShow');
		}else if(t==3){
		
			$('#OTHER').removeClass('listHide');
			$('#OTHER').addClass('listShow');
			$('.Work').css({'height':'500px'});
			$('.Work_box').css({'height':'300px'});
		}

		// console.log('Li一共' + leftLi.length + '个' );
		// console.log('现在点击的是第' +(t+1)+'个' );
	});
















/*----------work小导航点击效果--------------------*/
/*==================list移动li================*/
	var leftRun = $('#left');
	var rightRun = $('#right');
	var liBox =$('.listBox ul');
	var liBoxNum =$('.list li');

	var liCount = liBoxNum.length;
	// console.log('liCount:' + liCount);
 	
	// var u = $('.listBox ul');
	// var f = u.eq(2);
	// console.log('f:' + f);




	var workWid = 300;

	
	// console.log('time现在的值为' + time);
	
		
	var AiIo=1;

		setInterval(function(){
			setTimeout(function(){AiIo=1},10);

		},800);


			leftRun.click(function(){
				if (AiIo!==1) {return}
				console.log(AiIo);
				time--;	
				if (time<0) {time=0; return}
				//console.log('time现在的值为' + time);
				liBox.animate({left:'-'+(300*time)});
				AiIo=0;
			});		

	

			

			
			if(time<liBoxNum.length)
			{
				
				
				rightRun.click(function(){
					
					if (AiIo!==1) {return}

					console.log(AiIo);

					var listup=aaaa-time; 
					//console.log(listup,time);
					time++;
					if (listup==4) {time=aaaa-4 ; return}

					//console.log('time现在的值为'+time);
					liBox.animate({'left':'-'+(300*time)});
					AiIo=0;
				});
				
				
			}




/*==================list移动li================*/

});