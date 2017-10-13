$(document).ready(function(){
	

	var LJH = {

		'setHTMLFont':function(){//设置HTM标签的fon-size
			var ww = $(window).width();
			var base_W = 375;//基础宽度
			var base_fontSize = 10;//在基础宽度下的字体尺寸
			var scaleSize = base_fontSize *(ww/base_W);
			//当前窗口宽度除以基础宽度得出倍数，乘以基础字号得出最终字号
			$('html').css({'font-size': scaleSize + 'px'});
			
		},
	}

	$(window).resize(function(){//窗口大小发生改变，执行设置尺寸
		LJH.setHTMLFont();
		
	});
	LJH.setHTMLFont();//页面载入马上执行设置尺寸

	

	var Pictime = 0;
	var bgDiv = $('.bg');
	var li = $('.Nav li');
	var wheel_IO = true;//鼠标滑轮滑动控制开关
	console.log('窗口宽度：' + $(window).width());
	console.log('窗口高度：' + $(window).height() );
	var span1 = $('#font1 span');
	var span2 = $('#font2 span');
	var p1 = $('#font1 p');
	var p2 = $('#font2 p');

	DownmoveIn(Pictime);
	$('#icon1 li').hover(function(){	
		var pointer = $(this).index();
		$('#font1 .fontBox').eq(pointer).css({'opacity':'1'})
		addspancss(pointer);			
		changeNum(1,pointer);
	
	},function(){
		var pointer = $(this).index();
		canspancss1(pointer);
		clearInterval(aa);	
	});

	$('#icon2 li').hover(function(){	
		var pointer = $(this).index();
		$('#font2 .fontBox').eq(pointer).css({'opacity':'1'})
		addspancss(pointer);	
		changeNum(2,pointer);		
	},function(){
		var pointer = $(this).index();
		canspancss2(pointer);	
		clearInterval(aa);	
	});
	function addspancss(e){
		span1.eq(e).css({'width': num(1,e) +'%'})		
		span2.eq(e).css({'width': num(2,e) +'%'})
	}
	function canspancss1(e){
		span1.eq(e).css({'width':'5%'})
		$('#font1 .fontBox').eq(e).css({'opacity':'0'})
		//$('.dishedBox').css({'opacity':'0'})
	}
	function canspancss2(e){
		span2.eq(e).css({'width':'5%'})
		$('#font2 .fontBox').eq(e).css({'opacity':'0'})
		//$('.dishedBox').css({'opacity':'0'})
	}
	console.log('第一页:' + Pictime)

	function num(a,n){
		if(a==1){/*第一排icon*/
			if(n==0){
				return 90;
			}
			if(n==1){
				return 92;
			}
			if(n==2){
				return 91;
			}
			if(n==3){
				return 90;
			}
			if(n==4){
				return 86;
			}
			if(n==5){
				return 90;
			}			
		}
		if(a==2){/*第二排icon*/
			if(n==0){
				return 75;
			}
			if(n==1){
				return 78;
			}
			if(n==2){
				return 76;
			}
			if(n==3){
				return 83;
			}
			if(n==4){
				return 87;
			}
			if(n==5){
				return 96;
			}
		}
	}


	function changeNum(m,e){
		var i=50
		//num(1,e)
		if(m==1){
			aa = setInterval(function(){
				i+=2;
				p1.eq(e).html(i+'%');
				if(i>num(1,e)){
					clearInterval(aa);
				}				
			},20);				
		}
		if(m==2){
			aa = setInterval(function(){
				i+=2;
				p2.eq(e).html(i+'%');
				if(i>num(2,e)){
					clearInterval(aa);
				}
				
			},20);				
		}

	}


	$(document).mousewheel(function(e,d,x,y){
		if(wheel_IO == false){return;}
		wheel_IO = false;//开关关闭
		setTimeout(function(){
			wheel_IO = true;
		},1000);
		Pictime = Pictime + (d==1?-1:1);
		//判断d是否等于1，是则d为-1，否则为1
		var bgCount = bgDiv.length;
		if(Pictime<0){Pictime=0}
		if(Pictime>=bgCount){Pictime = bgCount-1}
		play(d);
	});

	var last;
	function play(d){
		if(d==-1){/*向下滑动*/
			last =  Pictime-1
			// bgDiv.css({'z-index':'5'})
			bgDiv.css({'opacity':'0'})
			bgDiv.height(0);//板块回收
			bgDiv.eq( Pictime ).css({'opacity':'1'})		
			bgDiv.eq( Pictime ).show().height($(window).height());//第i个板块显示出来	
			// bgDiv.eq( Pictime ).css({'z-index':'999'})		
			DownmoveIn(Pictime)
		}
		if(d==1){/*向上滑动*/
			last =  Pictime+1
			// bgDiv.css({'z-index':'5'})
			bgDiv.css({'opacity':'0'})

			bgDiv.height(0);//板块回收
			// bgDiv.eq( Pictime ).css({'z-index':'999'})
			bgDiv.eq( Pictime ).css({'opacity':'1'})		
			bgDiv.eq( Pictime ).height($(window).height()  );//第i个板块高度改为窗口高度
			UpmoveIn(Pictime);
		}

		DownmoveOut(last);
		UpmoveOut(last);		

		li.removeClass('on');
		li.removeClass('c2on');
		li.eq( Pictime ).addClass('on');
		
		if(li.eq(Pictime).hasClass('c2')){
			li.eq(Pictime).addClass('c2on')
			console.log('c2')
		}else{
			console.log('c1')
		}	
		console.log('当前页:' + Pictime)
		console.log('上一页:' + last)
	}

	li.click(function(){
		var This = $(this).index();
		// li.removeClass('on');
		// li.eq(This).addClass('on');
		Pictime = This;
		//bgDiv.height(0);
		play(-1);
		DownmoveOut(last);
		UpmoveOut(last);		
	});

	var navLi = $('#navFont li')
	var workli = $('.a');
	navLi.click(function(){
		var This = $(this).index();
		console.log(This);

		workli.addClass('rotateOutDownLeft')
		workli.addClass('animated');
		workli.removeClass('show');
		workli.removeClass('fadeIn');

		setTimeout(function(){
			workli.eq(This).addClass('fadeIn');
			workli.eq(This).addClass('show');
			workli.eq(This).removeClass('rotateOutDownLeft')
		},200);
		

		navLi.removeClass('Fonton');
		navLi.eq(This).addClass('Fonton');

	});



/*------------------------向下滑动鼠标---------------------------------------*/


	function DownmoveIn(_type){/*执行向下翻页的动画函数*/
		if(_type==0){
			$('.left').addClass('bounceInDown')
			$('.left').addClass('animated')
		}
		if(_type==1){
			$('.Head').addClass('bounceInDown')
			$('.Head').addClass('animated')

			$('.detailInfo').addClass('bounceInDown')
			$('.detailInfo').addClass('animated')			
		}
		if(_type==2){
			$('.mid .title').addClass('bounceInDown')
			$('.mid .title').addClass('animated')

			$('.skillInfo').addClass('bounceInDown')
			$('.skillInfo').addClass('animated')			
		}
		if(_type==3){
			$('.Four').addClass('bounceInDown')
			$('.Four').addClass('animated')	
		}
		if(_type==4){
			$('.Five').addClass('bounceInDown')
			$('.Five').addClass('animated')	
		}		
	}

	function DownmoveOut(_type){/*执行移除向下翻页动画函数*/
		if(_type==0){
			$('.left').addClass('')
			$('.left').removeClass('bounceInDown')
			$('.left').removeClass('animated')

		}
		if(_type==1){
			$('.Head').removeClass('bounceInDown')
			$('.Head').removeClass('animated')

			$('.detailInfo').removeClass('bounceInDown')
			$('.detailInfo').removeClass('animated')			
		}
		if(_type==2){
			$('.mid .title').removeClass('bounceInDown')
			$('.mid .title').removeClass('animated')

			$('.skillInfo').removeClass('bounceInDown')
			$('.skillInfo').removeClass('animated')			
		}
		if(_type==3){
			$('.Four').removeClass('bounceInDown')
			$('.Four').removeClass('animated')	
		}
		if(_type==4){
			$('.Five').removeClass('bounceInDown')
			$('.Five').removeClass('animated')	
		}		
	}













/*---------------------------向下滑动鼠标-----------------------------------------*/





/*---------------------------向上滑动鼠标-----------------------------------------*/



	function UpmoveIn(_type){/*执行向上翻页的动画函数*/
		if(_type==0){
			$('.left').addClass('bounceInUp')
			$('.left').addClass('animated')
		}
		if(_type==1){
			$('.Head').addClass('bounceInUp')
			$('.Head').addClass('animated')

			$('.detailInfo').addClass('bounceInUp')
			$('.detailInfo').addClass('animated')			
		}
		if(_type==2){
			$('.mid .title').addClass('bounceInUp')
			$('.mid .title').addClass('animated')

			$('.skillInfo').addClass('bounceInUp')
			$('.skillInfo').addClass('animated')			
		}
		if(_type==3){
			$('.Four').addClass('bounceInUp')
			$('.Four').addClass('animated')	
		}
		if(_type==4){
			$('.Five').addClass('bounceInUp')
			$('.Five').addClass('animated')	
		}		
	}

		function UpmoveOut(_type){/*执行移除向下移动的动画函数*/
			if(_type==0){
				$('.left').removeClass('bounceInUp')
				$('.left').removeClass('animated')
			}
			if(_type==1){
				$('.Head').removeClass('bounceInUp')
				$('.Head').removeClass('animated')

				$('.detailInfo').removeClass('bounceInUp')
				$('.detailInfo').removeClass('animated')			
			}
			if(_type==2){
				$('.mid .title').removeClass('bounceInUp')
				$('.mid .title').removeClass('animated')

				$('.skillInfo').removeClass('bounceInUp')
				$('.skillInfo').removeClass('animated')			
			}
			if(_type==3){
				$('.Four').removeClass('bounceInUp')
				$('.Four').removeClass('animated')	
			}
			if(_type==5){
				$('.Five').removeClass('bounceInUp')
				$('.Five').removeClass('animated')	
			}		
	}





/*---------------------------向上滑动鼠标-----------------------------------------*/





$('#')


















});
















































