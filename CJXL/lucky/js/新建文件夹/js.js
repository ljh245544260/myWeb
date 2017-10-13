$(document).ready(function(){
	$('#btn').click(function(){
		start();
	});
});

var t;

var j = [
	'1',
	'30元代金券',
	'50元代金券',
	'20元代金券',
	'2',
	'10元代金券',
	'1元代金券',
	'5元代金券',
]



function start(g,d ){
	var n = sjs(15,375);
	var g = 8;//一共有多少个格子
	var d = 360/g; //每个格子占多少度
	
	n=90;
	t = Math.ceil(n/d);
	//t = 375/n;
	// t = n/d;
	//var i = (t/g);
	console.log('-------------------------');
	console.log('转动格子数' + (t*2-1));
	console.log('转动角度' + n);
	// console.log('所在格子数' + i);
	//如何计算转动了多少个格子？
	//Math.ceil(64/30) 所得的余数会向上舍入
	//ceil()向上舍入函数  

	$('#mystyle').remove();//添加之前删除一次

	//动态生成style标签让转盘动起来
	var style = $('<style id = "mystyle"/> ');//新建样式标签
	

	
	
		var s = '@keyframes run{';//拼接样式的字符串
		s += '0%{transform:rotate(0deg); }';
		s += '100%{transform:rotate(' + n+'deg);}';
		s += '}';
	console.log('目标角度' + n )
		style.html(s);//设置标签的html为拼好的字符串
		
		$('head').append(style);//在head标签内追加设置好的样式


		$('#bg').css({"animation":""});//设置css样式归零
		setTimeout(function(){//延迟执行
			$('#bg').css({"animation":"run 1s forwards" });//给目标设置css，添加动画
			end();
		},500);
			
		


	
}

	function sjs(a,b){ //随机数 包括a和b
		return parseInt(Math.random()*(b+1-a)+a);
	}
	/*输入a和b，函数将会从a、b之间随机选择一个数使用*/
function end(){
	
	var ej = j[t-1];
	// if(ej = ''){
	// 	alert('很遗憾请再接再厉!');
	// }else{
	// 	alert('恭喜您抽中' + ej);
	// }
	alert(ej);
}