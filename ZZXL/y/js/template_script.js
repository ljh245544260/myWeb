var listPic = [
	{'url':'images/m1.jpg','math':'110','text':'CITS7050'},
	{'url':'images/m2.jpg','math':'52','text':'CITS7049'},
	{'url':'images/m3.jpg','math':'46','text':'CITS7048'},
	{'url':'images/m4.jpg','math':'24','text':'CITS7047'},
	{'url':'images/m5.jpg','math':'26','text':'CITS7046'},
	{'url':'images/m6.jpg','math':'45','text':'CITS7045'},
	{'url':'images/m7.jpg','math':'21','text':'CITS7044'},
	{'url':'images/m8.jpg','math':'42','text':'CITS7043'},
	{'url':'images/m9.jpg','math':'67','text':'CITS7042'},
	{'url':'images/m10.jpg','math':'41','text':'CITS7041'},
	{'url':'images/m11.jpg','math':'31','text':'CITS7040'},
	{'url':'images/m12.jpg','math':'37','text':'CITS7039'},
	{'url':'images/m13.jpg','math':'20','text':'CITS7038'},
	{'url':'images/m14.jpg','math':'15','text':'CITS7037'},
	{'url':'images/m15.jpg','math':'16','text':'CITS7036'},
	{'url':'images/m16.jpg','math':'14','text':'CITS7035'},
	{'url':'images/m17.jpg','math':'22','text':'CITS7034'},
	{'url':'images/m18.jpg','math':'18','text':'CITS7033'},
	{'url':'images/m19.jpg','math':'27','text':'CITS7032'},
	{'url':'images/m20.jpg','math':'26','text':'CITS7031'},
	{'url':'images/m21.jpg','math':'30','text':'CITS7030'},
];



$(document).ready(function(){

	//颜色选择的点击效果
	$('#qq_color li').click(function(){
		var i=$(this).index();
		console.log('此时i是'+i)
		$('#qq_color li').find('.qq_ok').css({
			'transition':'all 0.5s',
			'transform':'translateY(-15px)',
		});
		$('#qq_color li').eq(i).find('.qq_ok').css({
			'transition':'all 0.5s',
			'transform':'translateY(0.5px)',
		});

	});//qq_color li.click end

	//全、横竖屏选择点击效果
	$('#qq_lytul li').click(function(){
		var i=$(this).index();
		$('#qq_lytul li').css({ 'border-color':'#cacaca', });
		$('#qq_lytul li').eq(i).css({ 'border-color':'#ffd400', });	

	});//$('#qq_lytul li').click end

	/* 图片列表 */

	for (var i = 0; i < listPic.length; i++) {

		var cxm_li = $('<li/>');//创建一个li标签
		cxm_li.css({'float': 'left','width': '280px','height': '400px',
			'margin-right': '42px','margin-left': '9px','position': 'relative',
		});
		$('#cxm_ul').append(cxm_li);
		$('#cxm_ul li:nth-child(3n)').css({'margin-right': '0'});

		var cxm_a = $('<a/>');//创建一个a标签
		cxm_a.css({'color': '#c1c1c1','display': 'block',});
		cxm_a.attr({href:"##",target:"_blank"});
		cxm_li.append(cxm_a);

		var cxm_img = $('<img/>');//创建一个img标签，用来存放图片,追加到a标签里面去
		cxm_img.css({'width':'280px','height':'280px'});
		cxm_img.attr('src',listPic[i].url);
		cxm_a.append(cxm_img);

		var cxm_p = $('<p/>');//创建一个p标签，追加到a标签里面去
		cxm_p.css({'font-size': '9px','line-height': '16px','padding-top': '20px',});
		cxm_a.append(cxm_p);
		cxm_p.html('TEMPLATE NO.');

		var cxm_span = $('<span/>');//创建一个span标签，追加到p标签里面去
		cxm_span.css({'padding-left': '16px','background': 'url(images/star.gif) no-repeat left center','float': 'right',});
		cxm_p.append(cxm_span);
		cxm_span.html(listPic[i].math);

		var cxm_strong = $('<strong/>');//创建一个strong标签，追加到p标签里面去
		cxm_strong.css({'font-size': '16px','display': 'block','font-weight': 'normal',});
		cxm_p.append(cxm_strong);
		cxm_strong.html(listPic[i].text);

		var cxm_shadow = $('<div class="CXM_shadow"/>');//创建黄色的背景遮罩，追加到a标签里面去
		cxm_shadow.css({'width': '100%','height': '280px','position': 'absolute','left': '0','top': '0','background': '#ffd400','opacity':'0',});
		cxm_a.append(cxm_shadow);

		var cxm_more = $('<span/>');//创建一个span标签，追加到背景遮罩里面去
		cxm_more.css({'font-size': '26px','color': '#FFF','background': 'url(images/more.gif) no-repeat right bottom',
			'padding-right': '39px','margin': '13px 0 0 15px',
		});
		cxm_shadow.append(cxm_more);
		cxm_more.html('get more');

		var cxm_like = $('<div/>');//创建一个div，用来存放like
		cxm_li.append(cxm_like);

		var cxm_aa = $('<a class="CXM_aa"/>');//创建一个a标签，追加到cxm_like里面去
		cxm_aa.css({'width': '110px','height': '110px','border': '1px solid #FFFFFF','position': 'absolute','right': '10px','bottom': '32%',
			'display': 'block','background': 'url(images/jia.gif) no-repeat','text-align':' center','color': '#fff',
		    'line-height': '143px','font-size': '11px','opacity':'0',
		});
		cxm_aa.attr({href:"#11",target:"_blank"});
		cxm_like.append(cxm_aa);
		cxm_aa.html('+1');

		var cxm_like1 = $('<span class="CXM_like1"/>');//创建一个span标签，追加到cxm_aa里面去
		cxm_like1.css({'display': 'block','color': '#ffd400','height': '57px','line-height': '57px','font-size': '36px',
			'position': 'absolute','left': '8px','top': '0',
		});
		cxm_aa.append(cxm_like1);
		cxm_like1.html('like it');

		var n = 0;
		cxm_li.hover(function(){//鼠标经过li时执行
			n = $(this).index();
			$('.CXM_shadow').eq(n).css({'opacity':'1',});
			$('.CXM_aa').eq(n).css({'opacity':'1',});
		},function(){//鼠标经过li后执行
			$('.CXM_shadow').eq(n).css({'opacity':'0',});
			$('.CXM_aa').eq(n).css({'opacity':'0',});
		});

		var num = 0;
		cxm_aa.hover(function(){//鼠标经过时执行
			num = $(this).index();
			$(this).eq(num).css({'background-position':' 0 -110px','color':' #ffd400',});
			$('.CXM_like1').css({'color':' #fff',});
		},function(){//鼠标经过后执行
			$(this).eq(num).css({'background-position':'0 0','color':' #fff',});
			$('.CXM_like1').css({'color':' #ffd400',});
		});

	}//for end


	$(function() {
		function sjs(a,b){ //随机数 包括a和b
		return parseInt(Math.random()*(b+1-a)+a);
	}
	
	//下面是往上往下移动（判断两者都是否已经移动过，才能执行）
	$('.Lwf_hidde').addClass('on');
	var lh;
	var ononlh;
	var Lwf_IO=1;
	setInterval(function(){
		lh=$('.on').length;
		if(lh<0){lh=0};
		$('.Lwf_left').find('.on').eq(sjs(0,lh-1)).addClass('onon').removeClass('on').css({
			'animation':' Lwf_a 0.35s cubic-bezier(1,0.5,0.5,0.5) forwards',
		})
		lh--;
		ononlh++;
	},sjs(2500,3000))
	setTimeout(function(){Lwf_IO=0},300)
	setTimeout(function(){//不能马上翻转
		if(Lwf_IO==0){
			setInterval(function(){
			ononlh=$('.onon').length;		
			$('.Lwf_left').find('.onon').eq(sjs(0,ononlh-1)).addClass('on').removeClass('onon').css({
			'animation':' Lwf_b 0.35s cubic-bezier(1,0.5,0.5,0.5) forwards',
			})
			ononlh--;
			lh++;
			},sjs(2500,3000))
			Lwf_IO=1;
		}
	},6000);
	
	//这里是右边的小导航块

	//先加第一个上去
	var Lwf_m=$('<div id="Lwf_m"/>');
	var Lwf_li2h=$('#Lwf_left li').eq(1).offset().top;
	console.log(Lwf_li2h)
	Lwf_m.css({
		'width':'10px',
		'height': '35px',
		'position':'absolute',
		'left':'445px',
		'top':Lwf_li2h+'px',
		'background':'#ffd400',
		'transition':'all '
	});
	$('body').append(Lwf_m)

	$('#Lwf_left li').eq(1).addClass('cord');//最原始的时候有个cord以便判断下一个应该是第几个动画，然后在最后面的时候找到这个删除，然后当前这个加上
	$('#Lwf_left li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		var  Lwf_this=$(this).index();
		var Lwf_litop=$('#Lwf_left li').eq(Lwf_this).addClass('cord1').offset().top;
		var Lwf_fir=$('#Lwf_left').find('.cord').offset().top;
		var Lwf_sec=$('#Lwf_left').find('.cord1').offset().top;
		console.log('Lwf_fir的高度是'+Lwf_fir+'Lwf_sec的高度是'+Lwf_sec)
		var Lwf_end=Lwf_sec-Lwf_fir;
		Lwf_m.css({'animation':''})	
		if(Lwf_end>0){
			setTimeout(function(){
				Lwf_m.css({
				'top':Lwf_litop+'px',
				'background':'rgb(239,239,239)',
				'animation':'Lwf_d 0.8s  forwards'
				})
			},20)
		}else{
			setTimeout(function(){
				Lwf_m.css({
				'top':Lwf_litop+'px',
				'background':'rgb(239,239,239)',
				'animation':'Lwf_c 0.8s  forwards'
				})
			},20)
		}
		
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		var Lwf_fir=$('#Lwf_left').find('.cord').removeClass('cord');
		var Lwf_sec=$('#Lwf_left').find('.cord1').removeClass('cord1').addClass('cord');
	});

	});  //end

//////////////////////////////////////////////////////////////////////////////////////////////


       
       //底部
	
		$('#M_right li').hover(function(){
				var ts=$(this);
				var i=ts.index();
				$('#M_right li').find('.s1').css({
					'transition':'all 0.3s',
					'color':'#b2b2b2','font-size': '25px'
				});
				$('#M_right li').find('.s2').css({
					'transition':'all 0.3s',
					'font-size': '0','color':'#b2b2b2',
				});

				$('#M_right li').eq(i).find('.s1').css({
					'transition':'all 0.3s',
					'font-size': '36px','color':'rgb(99, 99, 99)'
				});
				$('#M_right li').eq(i).find('.s2').css({
					'transition':'all 0.3s',
					'font-size': '14px','color':'rgb(99, 99, 99)'

				});
				
		});
/////////////////////////////////////////////////////////////////////////////////////////////

	
});//ready end