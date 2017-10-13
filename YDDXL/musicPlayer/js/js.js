
var mp3List = [
			{'src':'audio/1.mp3','url':'38','name':'bigbang - bangbangbang'},
			{'src':'audio/2.mp3','url':'38','name':'bigbang - if you'},
			{'src':'audio/3.mp3','url':'39','name':'bigbang - loser'},
		]


var soundArr = [ ];

for( var i=0; i < mp3List.length; i++ ){//遍历音乐
	var sound = new Howl({
		src:[ mp3List[i].src ],
		onend:function(){
			i++;
			if (i >= mp3List.length){ i = 0}
			soundArr[i].play();
		}
	})
	soundArr.push( sound );
}



var i = 0;//播放歌曲数
var l;//音乐总长度
var w;//宽度width
var a;//点击后小圆点出现的位置
var lastPlayId = 0




pic(i);//音乐封面
//soundArr[i].play() //开始播放
soundArr[i].volume(50);//音乐音量大小
$('.text_box').html(mp3List[i].name);//显示歌词信息



$('.left').tap(function(){/*点击右键时触发的效果*/
	soundArr[i].stop();
	//$('.play').removeClass('stop');
	setTimeout(function(){
		soundArr[i].stop();
		i --;
		if (i<=-1){ i = mp3List.length-1 }
		pic(i);
		$('.text_box').html(mp3List[i].name);

		soundArr[i].play();
		console.log('点击left'+ i )
		s = 0;
	},500)
})

$('.right').tap(function(){/*点击右键时触发的效果*/
	soundArr[i].stop()
	// $('.play').removeClass('stop')
	setTimeout(function(){
		i ++;
		if (i >= mp3List.length){ i = 0}
		pic(i);
		$('.text_box').html(mp3List[i].name);
		soundArr[i].play();
		console.log('i:'+i)
		s = 0;	
	},500)
	
})

function pic(e){
	var aa = e+1
	console.log('pic: ' + aa)
	$('.pic_yuan').css({"background":"url(images/" + aa +".jpg)","background-size":"100% 100%"})
}

setInterval(function(){ 
	$('.duration').html(soundArr[i].duration().toFixed(0)+'s')
	$('.seek').html(soundArr[i].seek().toFixed(0)+'s')
},1000)


var s = 1;//播放判定  0时播放 1时暂停
$('#ps').tap(function(){
	console.log("s的值：" + s)
	if( s==1 ){
		//1时为播放
		// $('.play').css({' background':'url(images/play.png)'})
		// $('#ps').hasclass('')
		//$('.play').addClass('stop')
		//soundArr[i].stop()
		$("#ps").removeClass("play");
		$("#ps").addClass("stop");
		soundArr[i].play();
		s=0;
	}else{
		//0时为暂停
		//$('.play').css({' background':'url(images/pause.png)'})
		//$('.play').removeClass('stop')
		
		$("#ps").removeClass("stop");
		$("#ps").addClass("play");
		
		soundArr[i].pause();
		s=1
	}	
})


var d =0;   //图片旋转度数
var T = setInterval(function(){
	d ++;
	$('.pic_yuan').animate({
	'transform':'rotate('+ d + 'deg)'
	})
},30)

/*音量调节--------------------------*/

$('#line').on('touchstart',function(e){
	var x = e.touches[0].pageX-$('#line').offset().left; 
	console.log('x:' + x)
	var wid = $('#line').width();
	console.log('wid:' + wid)
	var m = x/wid;
	console.log('m:' + m*100)
	soundArr[i].volume(m);
	if(m>1){
		m=1
	}
	$('#voice').css({
		'left': m*100 + '%'
	})
});

// $('#line').on('touchmove',function(e){
// 	var x = e.touches[0].pageX-$('#line').offset().right; 
// 	console.log('x:' + x)
// 	var wid = $('#line').width();
// 	console.log('wid:' + wid)
// 	var m = x/wid;
// 	console.log('m:' + m*100)
// 	soundArr[i].volume(m);
// 	if(m<0){
// 		m=0
// 	}
// 	$('#voice').css({
// 		'left': m*100 + '%'
// 	})
// });
/*音量调节--------------------------*/



setInterval(function(){/*播放点的运动*/
	$('.ProgressBar').css({'width':(soundArr[i].seek()/soundArr[i].duration())
		*100 + '%' })
	var PW = $('.ProgressBar').width();
	$('.yuan').css({'margin-left': (PW-10) + 'px'})
},10);


$('.ProgressBar_box').on('touchstart',function(e){ //点击
	var x = e.touches[0].pageX-$('.ProgressBar_box').offset().left; //X为点击时候
	w = $('.ProgressBar_box').width(); //
	l = soundArr[i].duration() //音乐总长度
	a = ( x/w )* l;
	soundArr[i].seek( a );
})
$('.ProgressBar_box').on('touchmove',function(e){ //点击
	var x = e.touches[0].pageX-$('.ProgressBar_box').offset().left; 
	w = $('.ProgressBar_box').width(); //
	l = soundArr[i].duration() //音乐总长度
	a = ( x/w )* l;
	soundArr[i].seek( a );
})



