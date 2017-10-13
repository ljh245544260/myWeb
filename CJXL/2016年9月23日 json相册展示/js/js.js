var s;
var picList = [
	{'url':'images/1.jpg','surl':'images/1.png','txt':'描述1'},
	{'url':'images/2.jpg','surl':'images/2.png','txt':'描述2'},
	{'url':'images/3.jpg','surl':'images/3.png','txt':'描述3'},
	{'url':'images/4.jpg','surl':'images/4.png','txt':'描述4'},
];

// alert(picList);
//1. 使用js创建html结构
//
//2.给小图列表绑定点击时间，点击的时候获得$(this)的索引值：n
//
//3 调用play(n) 函数，开始显示第2张
//
//function play(n){//负责显示第几张的函数
//
//	给对应的小图li 添加class on
//	获取piclist[n]数据，并且设置上面大图的路径为 picList[n].url
//	设置上面的文本.html
//}
//4 给左右按钮添加点击时间，点击的时候计数器 i+=1 或i-=1
//判断计数器i是否超标或者小于0
//然后调用play(i)函数，执行播放第 i 张
//

	$(document).ready(function(){
		var mid_top = $('#mid_top');
		
		var mid_bottom = $('#mid_bottom');	
		var i;
		var pic_Zindx = 0;//堆叠层数
		var time = 0;//执行次数
/*大图*/	
		/*大图的html结构搭建*/
		for(i=0;i<picList.length;i++)
		{
			var newLi_big = $('<li/>');
			mid_top.append( newLi_big );
			console.log('大图的li:'+(i+1));
			newLi_big.css({
				"width":"750px",
				"height":"550px",
				// "position":"absolute",
				"background-image":"url("+picList[i].url+")",
				"background-size":"100% 100%",
				"display":"none",
			});
		}
		var mid_top_li = $('#mid_top li');
		console.log('------------');
		/*大图的html结构搭建*/
		/*轮播主体函数*/
		mid_top_li.hide();	
		mid_top_li.eq(time).show();

		//alert('111111');
		//play('RIGHT');
		/*右键点击事件*/
		$('#left').unbind().click(function(){
			play('LEFT');

			console.log('left');
		});
		$('#right').unbind().click(function(){
			play('RIGHT');
			
		
			//console.log('right');
		});

			/*右键点击事件*/

		/*轮播主体函数*/
			
/*大图*/	
		
/*小图的html结构创建*/
		for(i=0;i<picList.length;i++)
		{
			var newLi = $('<li/>');
			var newA = $('<div/>');
			mid_bottom.append( newLi );
			newLi.append( newA );
			console.log('小图的li:'+(i+1));
			newLi.css({
				"width":"170px",
				"height":"130px",
				"float":"left",
				"margin-left":"7px",
				"margin-right":"5px",
				"margin-top":"10px",
				// "border":"1px solid #d34",
				"text-align ":"center",
				"cursor":"pointer",
			});
			newA.css({
				"width":"165px",
				"height":"125px",
				"background-color":"#000",
				"float":"left",
				"margin-left":"2.5px",
				// "margin-right":"5px",
				"margin-top":"2.5px",
				"background-image":"url("+picList[i].url+")",
				"background-size":"100% 100%",
			});
		}
/*小图的html结构创建*/
/*小图的hover添加边框*/
		var mid_bottom_li = $('#mid_bottom li');
		mid_bottom_li.eq(0).addClass('on');
		//var mid_bottom_div = $('#mid_bottom div');
		
		mid_bottom_li.hover(function(){
			mid_bottom_li.removeClass('on');
			var p = $(this).index();/*$(this).index()要放在函数内*/
			mid_bottom_li.eq(p).addClass('on');
			mid_top_li.hide().eq(p).fadeIn();
			console.log(p);
		},function(){
			// mid_bottom_li.removeClass('on');
		});
/*小图的hover添加边框*/
	
		// mid_bottom_li.unbind().click(function(){
		// 	var c = $(this).index();
			
		// 	console.log('我执行了点击小图大图变的函数');
		// 	mid_bottom_li.eq(c).addClass('on');
		// });
		// mid_bottom_li.removeClass('on');






		
		/*大图轮播函数定义*/			
		function play(type){
				if(type=='LEFT')
				{
					mid_bottom_li.removeClass('on');
					time-=1;
					mid_top_li.hide();
					mid_top_li.eq(time).fadeIn();
					mid_bottom_li.eq(time).addClass('on');
					if(time<0)
					{
						time = 3;
						//mid_top_li.eq(3).fadeIn();
						//mid_bottom_li.eq(3).addClass('on');
					}
					console.log('time的值:' + time);
				}
				if(type=='RIGHT')
				{
					mid_bottom_li.removeClass('on');
					time+=1;
					mid_top_li.hide();
					mid_top_li.eq(time).fadeIn();
					mid_bottom_li.eq(time).addClass('on');
					if(time>3)
					{
						time = 0;
						mid_top_li.eq(0).fadeIn();
						mid_bottom_li.eq(0).addClass('on');
					}

					console.log('time的值:' + time);
				}
				
				
			}

			/*大图轮播函数定义*/
		// function pic_play(){
		// 	mid_bottom_li.eq(time).addClass('on');
		// }


		





	});

