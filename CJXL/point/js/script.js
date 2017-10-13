/*
var a = []; //数组
a.length;//数组长度
a[索引]  数组取值

//读取属性值
<div aa='123' ></div>
var a = $选择器.attr('aa');  那么a=123

//设置属性值
$选择器.attr('aa','456');
结果: <div aa='456' ></div>

设置class
$选择器.addClass('')
移除class
$选择器.removeClass('')

绑定点击
$选择器.click(  function(){   $(this)是被点击的对象;  }  );

延时执行
setTimeout( function(){ 要执行的代码}  ,  1000  );
定期执行
setInterval(  function(){ 要执行的代码}  ,  100  );

查找对象
$选择器.find('选择器');
*/


var t ; //要来存储定时器id的变量
var score = 500; //一开始拥有的分数,每次抽奖都会更新
var xh_score = 100; //每次抽奖消耗的分数
var IO = true;//当IO=true,可以点击

$(document).ready(function(){

	$("#btn").click(function(){//绑定按钮点击		
		if( score <  xh_score  ){//如果总分小于每次消耗就不能抽奖了
			alert('积分不足，请充值');//
		}else{ //否则才可以抽奖
			start();
		}//
	});

	function start(){ //点击按钮的时候执行这个函数
		//return;
		if( IO !=true ){ //1第一次IO=true所以会执行里面的代码
			return;//让函数立即返回,不会执行下面的代码
			//return的用法,如果IO不是true才会阻止代码运行
		}

		t = setInterval( function(){  
			jump(); //定时调用随机抽取的函数 
		}  ,  100  );

		setTimeout(function(){ //一定时间后执行清除计时器
			 end(); //抽奖结束后做的事情
			 IO = true; //3:抽奖结束后,重新把IO设置为true
			 			//这样1那里的条件才会生效,里面的代码才会
			 			//再次被执行
			 $('#btn').val('开始抽奖');
		},1000);

		IO = false; //2:执行完上面的代码后,IO会被设置为false
					//于是下次点击,上面的代码不会被执行
					//除非有人把IO再次设置为true
		$('#btn').val('抽奖中请勿打扰...');
	}

	function jump(){ //负责随机挑选li的函数
		
		
		var list = $('#list');//抽奖的容器
		var li = list.find('li');//里面的列表
		var n = sjs(0,  li.length-1 );//获得范围随机数,范围是0到li总数-1

		li.removeClass('on');//先全部删除on
		li.eq(n).addClass('on');//在给随机选中的li添加class

		//var fen = li.eq(n).attr('fen');//获得选中的li的属性fen的值
		//console.log( '最后一次选择的li的fen=' + fen );
	}

	function end(){ //负责抽奖结束后的函数
		clearInterval( t ); //清除定时器

		//暗箱操作代码
		var li = $('#list li');		
		var nn = sjs(0,100);
		//0,1,2,3,4,5,6,7,8,9
		console.log('暗箱概率:' +nn )
		if(  nn>30  ){ //概率调节,nn大于3就会强制到"再来一次"	
			//这段是不中奖的		
			li.removeClass('on');//先全部删除on
			$('#z').addClass('on');//再强制给某个添加on
		}else{//这段是中奖的
			//nn = 0-29
			//如果是中奖,在写条件
			if(nn<20){				//
				li.removeClass('on');//先全部删除on
				li.eq(  sjs(0,5)   ).addClass('on');			
			}
			if(nn>19 && nn < 28){				//
				li.removeClass('on');//先全部删除on
				li.eq(  sjs(6,9)   ).addClass('on');			
			}
			if(nn>27){				//
				li.removeClass('on');//先全部删除on
				li.eq(  sjs(10,li.length-1)   ).addClass('on');			
			}

		}

		



		//开始获取分数
		var list = $('#list');
		//var li = list.find('li');
		var onli = list.find('.on');//找到被抽到的li
		var fen = onli.attr('fen');//读取这个li的属性fen
		fen = parseInt( fen );//需要转换成数字,方便计算

		//console.log('end函数读取到的li的fen=' + fen );

		//计算积分
		score = score + fen - xh_score; //总分 = 总分+抽到的分-每次消耗
		$('#title').html( score + '分' );
		//
		//
	}




});//ready end


function sjs(a,b){ //随机数 包括a和b
	return parseInt(Math.random()*(b+1-a)+a);
}











