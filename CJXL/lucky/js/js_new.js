function sjs(a,b){ //随机数 包括a和b
		return parseInt(Math.random()*(b+1-a)+a);
	}
	/*输入a和b，函数将会从a、b之间随机选择一个数使用*/
/*
function start(){
	var n = ;//n为随机的角度
	var style = $('<style id = "mystyle"/>');//新建标签样式

	var s = '@keyframes run{';//拼接样式的字符串
		s += '0%{transform:rotate(0deg); }';
		s += '100%{transform:rotate(' + n +'deg);}';
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
*/

var d;
$(document).ready(function(){
	$('#btn').click(function(){
	
	var num = sjs(0,7);

		switch(num)
		{
			case 0:start(0,sjs(-22.5,22.5),'谢谢参与（右）');
			break;
			case 1:start(1, sjs(23,65),'抽中30元代金券');
			break;
			case 2:start(2,sjs(70,110),'抽中50元代金券');
			break;
			case 3:start(3,sjs(116,150),'抽中20元代金券');
			break;
			case 4:start(4,sjs(160,190),'谢谢参与（左）');
			break;
			case 5:start(5,sjs(205,230),'抽中10元代金券');
			break;
			case 6:start(6,sjs(250,280),'抽中1元代金券');
			break;
			case 7:start(7,sjs(290,330),'抽中5元代金券');
			break;
		}
		// console.log('抽中第' + (num+1) + '格子');
		// console.log('-------------');
	});
	
});












var start = function(a,d,text){
	//alert(text);
	//var p = 90;//设置第二次开始角度的变量 
	var style = $('<style id = "mystyle"/> ');//新建样式标签
	var s = '@keyframes run{';//拼接样式的字符串
	s += '0%{transform:rotate(0 deg); }';
	s += '100%{transform:rotate('  + 360 + d  +'deg);}';
	s += '}';
	//console.log('中了第' + (a+1) + '个格子');
	//console.log('随机的旋转度数：' +  );
	console.log('随机的旋转范围：' + d );
	//console.log('第'+ (num+1)+'个格子的随机范围是' + b + '和' + p);
	
	style.html(s);//设置标签的html为拼好的字符串
	
	$('head').append(style);//在head标签内追加设置好的样式

	
	$('#bg').css({"animation":""});//设置css样式归零
	setTimeout(function(){//延迟执行
		$('#bg').css({"animation":"run 1s forwards" });//给目标设置css，添加动画	
		
		if(a==0||a==4){
			unend();
		}else{
			end();
		}
	},500);	
	// setTimeout(function(){//延迟执行
	// 	alert(text);
	// },2500);

	 function unend(){
	 	var show = $('#show');
	 	var a = $('#text');
	 	a.text('很遗憾，您没中奖');
	 	//show.append(show);
	 	setTimeout(function(){
		 	show.css({
		 		"transform": "scale(1.5)",
		 		//"background":"#666",
		 		"z-index":"20",
		 	});	
	 	},1000);	 	
	 }


	 function end(){
	 	var show = $('#show');
	 	var a = $('#text');
	 	a.text(text);
	 	//show.append(show);
	 	var newli = $('<li/>')
	 	$('.listBox').append(newli);
	 	setTimeout(function(){			
		 	show.css({
		 		"transform": "scale(1.5)",
		 		//"background":"#666",
		 		"z-index":"20",
		 	});
		 	newli.text('恭喜您' + text + '!');	
	 	},1000);	 	
	 }

	 $('#back').click(function(){
		back_btn();

	});

	  function back_btn(){
	 	//$('#show').hide();
	 	$('#show').css({
	 		"transform": "scale(0)",
	 		"z-index":"0",
	 	});
	 	$('#bg').css({"animation":""});//设置css样式归零
	 }

};


