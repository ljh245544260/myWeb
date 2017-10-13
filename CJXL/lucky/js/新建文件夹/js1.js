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

	$('#btn').click(function(){
			if (score<xh_score) {
				alert('积分不足');
			}else{
				start();
			}
	});
	jump();
	end();



});






function sjs(a,b){ //随机数 包括a和b
	return parseInt(Math.random()*(b+1-a)+a);
}
/*输入a和b，函数将会从a、b之间随机选择一个数使用*/

function jump(){//负责随即挑选li的函数
	
	var list = $('#list');//抽奖的容器
	var li = list.find('li');//遍历里面的li列表
	var n = sjs(0,li.length-1);//获得范围随机数，范围是0到li总数-1

	li.removeClass('on');//全部移除css样式‘on’
	li.eq(n).addClass('on');//给随机选中的li添加class
}

function end(){//负责抽奖结束后的函数
	clearInterval(t);//清除定时器

	//暗箱操作代码
	var li = $('#list li');
	var nn = sjs(0,100);
	console.log('暗箱概率：' + nn);
	if( nn>30 ){//调节概率，nn大于30就会强制到“再来一次”【不中奖率为70%】
		li.removeClass('on');//全部移除css样式‘on’
		$('#again').addClass('on');//给指定的li添加css样式on
	}else{
		//这段是中奖的【中奖率为30%】
		//nn = 0-29
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


}

function start(){//点击按钮的时候执行这个函数
	if(IO != true){//1.第一次IO=true所以会执行里面的代码
		return;//让函数立即返回，不会执行下面的代码
	}   //return的用法，如果IO不是true才会阻止代码的运行，
	    //故：IO=false  或  IO!=true;

	t = setTimeout(function(){  
		jump(); //定时调用随抽取的函数
	} , 100 );

	setTimeout(function(){//一定时间后执行清除计时器
		end();//抽奖结束后做的事情
	
		IO = true;//3:抽奖结束后,重新把IO设置为true
			 	  //这样1那里的条件才会生效,里面的代码才会
			 	  //再次被执行
		$('#btn').val('开始抽奖');
	},2000);

	IO = false; //2:执行完上面的代码后,IO会被设置为false
				//于是下次点击,上面的代码不会被执行
				//除非有人把IO再次设置为true
	$('#btn').val('抽奖中请勿打扰...');
}



		//开始获取分数
	var list = $('#list');
	var li = list.find('li');
	var onli = list.find('.on');//找到被抽到的li
	var point = onli.attr('point');//读取这个li的属性point
	point = parseInt(point);//需要转换成数字，方便计算

	//计算积分
	score = score + point -xh_score;
	$('#title').html(score + '分')


