$(document).ready(function(){
	/*doucument.getElementById('a').play();
		//这里的选择器不能使用jq的选择器，因为jq中没有play()这种函数，故只能使用这种原生选择器
		console.log( document.getElementById('a').currentTime);
*/
/*
	【jq的方法】
	$().val()//获取值
	$().val(123)//设置值
	【原生js的方法】
	document.getElementById('a').currentTime       //获取值
	document.getElementById('a').currentTime  = 123//设置值
	 */

	var i = 5;//广告时间
	var ad = $('#ad');//广告遮罩的的div
	var advage = $('#advage');//广告的div
	
	var a  = document.getElementById('a');//播放器

	var duration = 0;//总播放时间
	var currentTime = 0;//当前播放时间
	var t;//用来存储定时器的变量
	var b ;

	var mouse_x;
	var int;
	var c;
	var end_currentTime;
	var back = $('#back');

	
	


	v = setInterval(function(){
		$('#currentTime').html(formatSeconds(a.currentTime));
		$('#duration').html(formatSeconds(a.duration));
	},1000);
	setInterval(v);

	function update_currentTime(){
		clearInterval(t);
		t = setInterval(function(){
		currentTime = a.currentTime;
			//console.log('当前播放时间' + currentTime);
		b = currentTime / duration; // 当前进度的百分比
		$('#progress_bar').css({"width" : (b*100)+ "%"});//设置进读条长度为百分比
		$('#jdt').css({"left" : (b*100)+ "%"});//
		if(a.ended==true)
		{
			clearInterval(t);
			reset();
		}
		//console.log(''+ a.ended);
		}, 100);
		
	}
//处理倒计时隐藏广告========
	var time = setInterval(function(){
		i -= 1;

		if(i<0){
				clearInterval(time);
				advage.fadeOut();
				ad.fadeOut();
				//advage.fadeOut();
		}else{
			$('#ads').html(i);
		}
	},1000
	);



	$('#back').click(function(){//点击关闭关闭广告
		advage.hide();
	});

	//点击暂停，并显示广告
	//原生js对象转jq对象，使用$()括号括起来，例如$(player)
	$(a).click(function(){
		pause();
		//ad.fadeIn();
	});
	//原生js添加监听，当发生点击时间的时候，执行functio
	//player.addEventListener('click',function(){console.log(123456);});

	$('#btn_play').click(function(){ play(); });
	$('#btn_pause').click(function(){ pause(); });
	$('#btn_load').click(function(){ load(); clearInterval(t);});

	function play(){
		a.play();
		ad.hide();
		advage.hide();
		duration = a.duration;
		update_currentTime();
		setInterval(v);
		
	}
	function pause(){
		clearInterval(t);
		a.pause();
		i = 5;
		advage.show();	
	}
	function load(){
		clearInterval(t);
		a.load();
		ad.hide();

		reset();

		advage.show();
	}

	$('#progress').click(function(e){
		//在鼠标是事件函数括号内，放置变量e，那么e就会等于鼠标对象
		var bar_x = $(this).offset().left;//获得控件在页面中的左边距
		mouse_x = e.pageX;//获得页面中的x坐标
		int = mouse_x - bar_x;//计算出点击位置，处于总长度百分比多少
		c = int / $(this).width();//计算出点击位置，处于总长度百分比
		end_currentTime = duration * c;//计算出总长度乘以百分比（最终时间）
		a.currentTime = end_currentTime;//挪动播放头到最终时间
		// console.log(bar_x);

		//currentTime = a.currentTime;//console.log('当前播放时间' + currentTime);

		b = a.currentTime / duration; // 当前进度的百分比
		$('#progress_bar').css({"width" : (b*100)+ "%"});//
		$('#jdt').css({"left" : (b*100)+ "%"});//


	});
	
	function reset(){
		b=0;
		$('#progress_bar').css({"width" : (b*100)+ "%"});
		$('#jdt').css({"left" : (b*100)+ "%"});//
	}

	function nowpoint(){
		var mouse_x_now = $(this).pageX;
		//$('#progress_bar').css({"width" : (mouse_x_now*100)+ "%"});//设置进读条长度为百分比
		console.log(mouse_x_now);
	}	

	function formatSeconds(value) {
    var sec = parseInt(value);// 秒 sec
    var min = 0;// 分 min
    var hour = 0;// 小时 hour
    if(sec > 60) {
        min = parseInt(sec/60);
        sec = parseInt(sec%60);
            if(min > 60) {
            hour = parseInt(min/60);
            min = parseInt(min%60);
            }
    }
        var result = "00:"+parseInt(sec)+"";
        if(min > 0) {
        result = ""+parseInt(min)+":"+result;
        }
        if(hour > 0) {
        result = ""+parseInt(hour)+":"+result;
        }
    return result;
}






})