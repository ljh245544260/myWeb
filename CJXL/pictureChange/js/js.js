$(document).ready(function($) {
	$('#pic_list li').hide();
	$('#pic_list li').eq(0).show();

	var num = 0;/*num是计数器，记录被执行了多少次*/
	var i = 0;
	var T;//

	start_interval();


	function start_interval(){//定义一个计时器的函数
		T = setInterval(function(){
		play('RIGHT');
		console.log('执行了'+num);
		},
		1500
		);


		$('#btn li').unbind().click(function(){
			clearInterval(T);
			var eq = $(this).index();
			num = eq-1;
			play('RIGHT');
			start_interval();
			console.log(eq);
		});

		$('#btn_left').unbind().click(function() {
			clearInterval(T);//清除T计时器
			play('LEFT');
			start_interval();
			/* Act on the event */
		});
		$('#btn_right').unbind().click(function() {
			clearInterval(T);//清除T计时器
			play('RIGHT');
			start_interval();
			
			/* Act on the event */
		});
	}



	function play(type){

		console.log(type);
		i=i+1;//i使得图片重复堆叠，无线往上叠加，并覆盖上另外一张图片【很重要】
		if (type == 'LEFT') 
		{
			num = num - 1;
			if (num<0) 
				{
					num=3;
				}
		}
		if (type == 'RIGHT')
		{
			num +=1;		
			if(num>3)
			{
				num=0;		
			}
		} 


		
		//num+=1;//控制照片跳转次数【很重要！！！】

		/*--------图片选择器将图片显示出来-------------*/
		var li = $('#pic_list li').eq(num);//将图片的选择器赋给li
		li.css({"z-index":i});//设置li的css样式中z-index为i【i随着执行次数增加】
		li.hide().fadeIn();
		/*--------图片选择器将图片显示出来-------------*/

		/*--------下边小圆点高亮-------------*/
		$('#btn li').removeClass('btn_on');
		$('#btn li').eq(num).addClass('btn_on');
		/*--------下边小圆点高亮-------------*/

		
	}










});


