$(document).ready(function() {
var weixin_io = 0;
	$('.head .all_div .nav li').eq(7).click(function(event) {
		
			$('#big_erwma').toggleClass('rere');
			$('#sjx').toggleClass('rere');


	});
	

	
/*	$('body').click(function() {
		if(weixin_io == 1){
			$('#big_erwma').removeClass('rere');
			$('#sjx').removeClass('rere');
			setTimeout(function(){weixin_io = 0;},400);
		}
		
	});*/
	
	

var ZYF_picList = ['images/1.jpg', 'images/2.jpg', 
					   'images/3.jpg', 'images/4.jpg', ];
//==========放整个图片轮播的盒子===============	
var ZYF_bigBox = $('<div id="ZYF_bigBox"/>');
ZYF_bigBox.css({
	'width': '100%',
	'height': '100%',
	'position': 'relative',
});

$('.banner').append(ZYF_bigBox);
//==========放整个图片轮播的盒子 END===============	


//==========放图片的盒子===============	
	var ZYF_picBox = $('<ul id="ZYF_picBox"/>');
	ZYF_picBox.css({
		'width': '100%',
		'height': '100%',
		'position': 'absolute',
		'z-index': '5',
	});
	ZYF_bigBox.append(ZYF_picBox);
//==========放图片的盒子 END===============


//==========放按钮的盒子 END===============
	var ZYF_btnBox = $('<ul id="ZYF_btnBox"/>');
	ZYF_btnBox.css({
		'width': '250px',
		'height': '15px',
		'position': 'absolute',
		'z-index': '10',
		'bottom': '20px',
		'left': '10px',
	});
	ZYF_bigBox.append(ZYF_btnBox);
//==========放按钮的盒子 END===============


//==========图片===============	
	for(var i=0; i<ZYF_picList.length; i++ ){
			var ZYF_pic = $('<li id="ZYF_pic"/>');
			ZYF_pic.css({
				'width': '100%',
				'height': '100%',
				'background': 'url('+ZYF_picList[i]+')',
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
				'background-position': 'center',
				'position': 'absolute',
				
			});
		ZYF_picBox.append(ZYF_pic);
//==========图片 END===============	

//==========按钮===============
		var ZYF_btn = $('<li class="ZYF_btn"/>');
			ZYF_btn.css({
				'width': '33px',
				'height': '15px',
				'z-index': '10',
				'float': 'left',
				'background': 'url(images/nav.png) top center',
				'cursor':'pointer',
				'margin-right': '10px',
				'display': 'inline-block',
			});
		ZYF_btnBox.append(ZYF_btn);
		$('#ZYF_btnBox li').eq(0).addClass('btn_on');
	
//==========按钮 END===============

	//for END
	}
	$('#ZYF_picBox li').hide();
	$('#ZYF_picBox li').eq(0).show();
	
	function play(){
		ZYF_num++;
		/*ZYF_zindex++;
		$('#ZYF_picBox li').eq(ZYF_num).css({'z-index': ZYF_zindex});*/
		if(ZYF_num==-1){$('#ZYF_picBox li').eq(3).fadeOut(500);}
		$('#ZYF_picBox li').eq(ZYF_num-1).fadeOut(500);
		$('#ZYF_picBox li').eq(ZYF_num).hide().fadeIn(500);
		if(ZYF_num==3){ZYF_num=-1;}
		$('#ZYF_btnBox li').removeClass('btn_on');
		$('#ZYF_btnBox li').eq(ZYF_num).addClass('btn_on');

	}	
	
	var ZYF_num=0;
	/*var ZYF_zindex=0;*/
	var ZYF_t = setInterval(function(){
				
			play();
	},5000);
	$('.ZYF_btn').click(function() {
			
		clearInterval(ZYF_t);
		ZYF_num = $(this).index();
		console.log(ZYF_num);
		$('#ZYF_picBox li').fadeOut(500);
		$('#ZYF_picBox li').eq(ZYF_num).fadeIn(500);
		$('#ZYF_btnBox li').removeClass('btn_on');
		$('#ZYF_btnBox li').eq(ZYF_num).addClass('btn_on');
		ZYF_t = setInterval(function(){	play();},5000);
		if(ZYF_num==-1){$('#ZYF_picBox li').eq(3).fadeOut(500);}
		if(ZYF_num==3){ZYF_num=-1;}
	});

	//点击二维码小图
	$('.head .all_div .nav li').eq(7).click(function(event) {
		
	});
	//点击二维码小图 END
//ready END	
});