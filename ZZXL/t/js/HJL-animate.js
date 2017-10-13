// JavaScript Document Design By HuangJingLi 
//一次性动画，延时执行的动画先隐藏

/*
CSS3全屏动画插件 ， 使用方法：
	HJL_load_animate 页面载入立刻执行，只执行一次，和滚轮切换板块无关： 可以加在任意位置。
	HJL_animate 鼠标滚轮切换板块时，进入的动画，以及板块划分标记： 只能加在大板块，一个大板块一个这种属性，不能嵌套。
	HJL_animate_out 鼠标滚轮切换板块之前，退出的动画，： 只能加在大板块，一个大板块一个属性，不能嵌套。
	
	1:一个DIV作为一屏内容，给需要切换的div添加自定义属性 HJL_animate 即可实现滚轮切换板块。例如： 
	<div HJL_animate style="background:#0C9"></div>
	
	2:给导航添加自定义属性 HJL_nav="0" ，里面的数字是告诉程序让导航第几个板块高亮起来，索引从 0 开始，例如：
	<div HJL_animate  HJL_nav="0"  style="background:#0C9"></div>
	
	3:开始开始动画-当板块进入的时候，里面的对象执行动画： 
	   格式：   选择器（你想让谁动起来） @ 动画名称（自己在style标签写入@keyframes）@ 动画时间 @ 延迟动画时间（非必填）
	HJL_animate=".info_ul li@main_in@500@0"
	
	4:设置退出动画：-当板块切换的之前，里面的对象执行动画 。  格式和 上面一样
	HJL_animate_out=".info_ul li@main_in@500@0"
	
	5:如果想页面一载入就做动画，使用属性 HJL_load_animate。例如
	HJL_load_animate=".info_ul li@main_in@500@0"
	
	6:当板块切换到的时候，执行自定义函数（代码）：
	 HJL_function="alert('执行了第二2屏的自定义函数~！！')"
	 
	7：多对象动画，只需要使用 | 分割开前后对象即可
	HJL_animate="选择器1@main_in@500@0|选择器2@main_in@500@0"
	
	8:支持Animate.css的动画，使用方法：先在html文件引用Animate.css ,然后在原先的动画名称前加上 ~ 即可：后面不需要跟时间
	HJL_animate=".info_ul li@~fadein" ，其中 ~fadein 表示使用Animate.css的fadein效果。
	
	9：新增点击导航跳转：无需设置，只需要在导航的li上点击，即可跳转到对应的板块
	
	10：新增图片点击放大-滚轮缩放功能： 给小图的img标签，添加属性 HJL_IMG_ZOOM = "大图路径"即可。
	<img src="images/小图.jpg" HJL_IMG_ZOOM="images/大图.jpg" width="30" height="30" />
	
	--------------------------------------------------------------------------------------------
	自带动画效果：
	--------------------------------------------------------------------------------------------
	进屏系列
	HJL_in_zoom  大到小直进屏幕		
	HJL_in_left  左进屏幕		
	HJL_in_top  上进屏幕		
	HJL_in_right  右进屏幕		
	HJL_in_bottom  下进屏幕		
	
	出屏系列：
	HJL_out_zoom  小到大直出屏幕	
	HJL_out_left  左出屏幕		
	HJL_out_top  上出屏幕		
	HJL_out_right  右出屏幕		
	HJL_out_bottom  下出屏幕		

	---------------------------
	特效系列
	---------------------------
	
	自定义函数-粒子发射器： 
	HJL.E.particle( //启动粒子发射器
		'.X_snow' ,//要复制的粒子对象，CSS选择器
		[ 2400 , 1500 ] , // 数组[0] = 粒子容器的运行速度（毫秒） ， 数组[1] = 速度随机加成 （毫秒）
		"-1", //容器的运行距离，为屏幕的宽度（百分比） , 0 = 不运动 ， -1 = 随机距离（最大不会超过屏幕宽度）
		80 , //容器和粒子生成速度（毫秒）
		90 , //容器发射的角度（正负数），超过正负360度后，会减去360，剩余的会进行随机角度。
			  //【参考角度：0=右，45=右下，90=直下，135左下，180=左，225左上，270直上，315右上。负数反之。】
		[ ' 0%{transform:rotate(80deg);}100%{transform:rotate(110deg);}' , ' 2s  infinite alternate linear ' ] , 
				//自定义单个容器CSS3动画效果（数组）， 例如 " 0%{transform:rotate(180deg);}100%{transform:rotate(310deg);} "  留空不开启 = ['','']
				// 数组[1]里面可以填写css3动画的附加属性，例如 '1s forwards infinite alternate linear' = 1s 定格 无限循环 逆转动画 线性速度 。
				//--注意：如果这个数组[0]生效，上面的 “粒子旋转角度” 会失效。
		1 ,  //1=开启容器随机透明度，0 = 不开启
		2 ,  //***粒子随机缩放的最大倍率 , 0 = 不开启
		[ 0 , 0 , 0 , 0 , '1s'  ] ,  
			//***粒子3D翻转参数，数组[0]是透视值 		 0 = 不开启粒子3D翻转，数组里面的其他的参数都无效 ； 
			//***数组[1]-[3] 是粒子 XYZ 的翻转度数，  数组[4]是翻转动画的附加属性
		0 ,  //粒子总数超过这个数量后停止 , 0 = 无限制
		[ '0%' , '100%' , '-0%' , '-0%'  ] ,  // 容器出生的范围left ，right ， top ， bottom ， 单位 % ，参考屏幕宽度高度（0-150%）
		'linear ', //容器的动画附加属性
		1 , //换版时是否清除动画 , 1=清除， , 0 = 不开启
		"" //自定义所有粒子动画名称（留空默认为下雨效果）,如果使用了自定义动画名称， 上面带有星号的属性***会失效。
	);
	

*/


var HJL  = {

	bl:{
		//自定义参数，可以按照提示修改
		Nav_ul:".nav_ul",  //导航选择器
		Nav_li:"li",  //导航里面做列表的标签名字
		Nav_on:"nav_on", //导航高亮样式
		
		ani_div_speed:500, //板块切换的速度，单位毫秒
		ani_li_speed_random: 400 , //板块里面对象的动画是否加上随机速度，  如果是 0  表示不使用； 如果使用，建议设置在1-1000之间。 
		
		           
		//系统参数，不能修改=================================================================================
		save_wheel:0,//记录当前滚动了多少次
		save_this_nav:0,//记录当前处于哪个导航板块索引
		save_div_Array:Object,//所有要处理的对象
		save_last_DIV:0,//上次处理的对象
		ani_queue_time:0, //进入-板块-退出动画的队列排队时间
		wheel_IO:1, //滚轮滚动开关，如果是1表示可以滚动
	},
	
	init:function(){//初始化================================
		$("body").css({"overflow":"hidden"});
		var TAG = $("[HJL_animate]");//获得所有要处理的对象
		HJL.bl.save_div_Array = TAG; //把所有要处理的对象存储起来
		TAG.css({"overflow":"hidden","position":"absolute","left":"0","top":"0"}).width($(window).width()).height(0);//所有对象溢出隐藏
		TAG.eq(HJL.bl.save_wheel).height($(window).height()); //显示第一个
		HJL.bl.save_last_DIV = HJL.bl.save_last_DIV == 0 ? TAG.eq(0) : HJL.bl.save_last_DIV ; //记录上次对象（第一次记录第一个板块） 
		
		
		HJL.bl.ani_queue_time = 0 ; //排队重设
		
		//添加全局动画样式 -moz-; -webkit-; -o-; -ms-
		var animate_style = $("<style HJL_animate_style/>");
		if($("[HJL_animate_style]").size()==0){
			$("head").append(animate_style);// 样式加到head里面去
		}			
		var s =HJL.css3_hack( "@keyframes HJL_S_move_up{0%{transform:translate(0,"+$(window).height()+"px);}100%{transform:translate(0,0);}}" ); //自用，从底部出现到顶部
		s +=HJL.css3_hack( "@keyframes HJL_S_move_down{0%{transform:translate(0,"+$(window).height()*-1+"px);}100%{transform:translate(0,0);}}" ); //自用，从顶部出现到底部
		//-------
		
		s +=HJL.css3_hack( "@keyframes HJL_in_zoom{0%{transform:scale(4); opacity:0; }100%{transform:scale(1);opacity:1;}}");  //大到小进屏幕
		s +=HJL.css3_hack( "@keyframes HJL_out_zoom{0%{ transform:scale(1);opacity:1;}100%{ transform:scale(4);opacity:0;}}");  //小到大出屏幕
		
		s +=HJL.css3_hack( "@keyframes HJL_in_left{0%{ transform:translate("+$(window).width()*-1+"px,0);}100%{transform:translate(0,0);}}"); //左进屏幕
		s +=HJL.css3_hack( "@keyframes HJL_out_left{0%{ transform:translate(0,0);}100%{transform:translate("+$(window).width()*-1+"px,0);}}"); //左出屏幕
		
		s +=HJL.css3_hack( "@keyframes HJL_in_right{0%{ transform:translate("+$(window).width()+"px,0);}100%{transform:translate(0,0);}}"); //右进屏幕
		s +=HJL.css3_hack( "@keyframes HJL_out_right{0%{ transform:translate(0,0);}100%{transform:translate("+$(window).width()+"px,0);}}"); //右出屏幕
		
		s +=HJL.css3_hack( "@keyframes HJL_in_top{0%{ transform:translate(0,"+$(window).height()*-1+"px);}100%{transform:translate(0,0);}}"); //上进屏幕
		s +=HJL.css3_hack(  "@keyframes HJL_out_top{0%{transform:translate(0,0);opacity:1;}100%{transform:translate(0,"+$(window).width()*-0.5+"px);opacity:0;}}"); //上出屏幕
		
		s +=HJL.css3_hack(  "@keyframes HJL_in_bottom{0%{ transform:translate(0,"+$(window).height()+"px);}100%{transform:translate(0,0);}}"); //下进屏幕
		s +=HJL.css3_hack(  "@keyframes HJL_out_bottom{0%{ transform:translate(0,0); opacity:1;}100%{transform:translate(0,"+$(window).width()*0.5+"px);opacity:0;}}"); //下出屏幕

		s +=HJL.css3_hack(  "@keyframes HJL_in_hide{0%{  opacity:0;}100%{opacity:1;}}"); //下出屏幕
		s +=HJL.css3_hack(  "@keyframes HJL_out_hide{0%{  opacity:1;}100%{opacity:0;}}"); //下出屏幕
		//-------------	
		$("[HJL_animate_style]").html(s);	
		// style end
		
		//设置载入动画
		var Load_animate = $("[HJL_load_animate]");
		Load_animate.each(function(i, e) {
			HJL.go_animate(	$(this) , "HJL_load_animate"	);
        });
 		
		
		//设置运行第一个自定义函数
		/*
		
		var HJL_function = $("[HJL_function]");
		if(		HJL.bl.save_this_nav == 0){
			HJL.go_run_fun(HJL_function.eq(0).attr("HJL_function")); 		
		}
		*/
		
		
		//设置导航点击跳转到板块
		$(HJL.bl.Nav_ul).find(HJL.bl.Nav_li).unbind("click").click(function(e) {
            HJL.gotoNAV(	$(this).index()		);
        });
		
		 
	},
	gotoNAV:function(	  IND		){ //执行点击导航跳到板块
		//alert(	index )
			HJL.bl.wheel_IO = 0; //关闭滚动
			
			var index = IND;
			if(index < 0){ index = 0} //防止索引超标
			if(index > HJL.bl.save_div_Array.size()-1 	){ index = HJL.bl.save_div_Array.size()-1  }
			
			var end_tag = $("[HJL_nav='"+index+"']").eq(0); //获得和导航索引对应的div的第一个
			var end_tag_index = $("[HJL_nav]").index(end_tag); //获得这个div在某个范围内的索引。
			if( end_tag_index == HJL.bl.save_wheel){ return false;} //防止重复执行
			//alert(	IND + "\n\n" + end_tag_index	) 
			var n = end_tag_index < HJL.bl.save_wheel ? 1 : -1 ; //判断是往上点击还是往下点击
			
			HJL.bl.save_wheel = end_tag_index ; //鼠标滚动记录滚动次数
			HJL.go_wheel(n);//执行滚动动作 ,传递鼠标滚动方向过去
	
	},
	wheel:function(e, n, x, y){//滚轮滚动
		if( HJL.bl.wheel_IO == 0){ return false; } //如果开关为0，滚动不会产生任何事情。
		
		
		$("#debug").html( "没执行" );
		if(  n == 1    ){ //上
			HJL.bl.save_wheel -= 1; //鼠标滚动记录滚动次数
			if(HJL.bl.save_wheel<0){
				HJL.bl.save_wheel=0
			}else{
				HJL.bl.wheel_IO = 0; //关闭滚动
				HJL.go_wheel(n);//执行滚动动作 ,传递鼠标滚动方向过去
			}
			
			
		}else{//否则（往下滚动）
			HJL.bl.save_wheel += 1;
			if( HJL.bl.save_wheel > HJL.bl.save_div_Array.size()-1 ){ 
				HJL.bl.save_wheel = HJL.bl.save_div_Array.size() - 1 
			}else{
				HJL.bl.wheel_IO = 0; //关闭滚动
				HJL.go_wheel(n);//执行滚动动作 ,传递鼠标滚动方向过去
			}
		}
		
		
		
		
	},//wheel
	go_wheel:function(n){
		var TAG_div = HJL.bl.save_div_Array.eq( HJL.bl.save_wheel  );//滚轮滚到的对象
			HJL.bl.ani_queue_time = 0; //初始化动画排队
			
			
			HJL.bl.save_div_Array.css({"z-index":"1" });//把所有板块都设置为最底层
			
			var This_div ; //要动的对象
			
			if(n==1){//上
				This_div = TAG_div ; 
				This_div_move = "HJL_S_move_down";
			}else{ //下
				This_div = TAG_div ; 
				This_div_move = "HJL_S_move_up";
			}
			
			
			This_div.css({"z-index":  HJL.bl.save_div_Array.size()   });//把当前板块设置为最顶层

			//1:在切换板块之前检查上一个板块有没有退出动画----------------------
			$("#debug").html( "退出中" );
			HJL.go_animate( HJL.bl.save_last_DIV , "HJL_animate_out"  , "out" ); //这里会设置第一次排队时间
			
			//2:退出动画完成，设置板块切换--------------------------------
			setTimeout(function(){
				if(	HJL.E.b.Change_io == 1 ){  HJL.E.b.Change_io_go = 0 ;} //关闭粒子发射器
				
				
				$("#debug").html( "切换中" );
				This_div.css({"height":$(window).height()+"px"});
				//This_div.show().css({"animation": This_div_move +" "+HJL.bl.ani_div_speed*0.001+"s forwards ease-out"}); //给当DIV做动画
				HJL.css3_set( This_div , "animation"  ,  This_div_move +" "+HJL.bl.ani_div_speed*0.001+"s forwards ease-out" ); //css3兼容处理
				
				 
				setTimeout(function(){ //处理上一个DIV
					HJL.bl.save_last_DIV.height(0).css({"animation":""}); //先：处理上次div
					HJL.bl.save_last_DIV = This_div; //再：当前板块动画完成后，自己虽然显示在当前，可是已经变成了旧对象了。
					
				} , HJL.bl.ani_div_speed);
				
			}, HJL.bl.ani_queue_time ); //使用第一次排队时间
			HJL.bl.ani_queue_time += HJL.bl.ani_div_speed ;  //第二次设置排队时间，预防里面的对象跟板块一起动画。（上面已经增加过一次了）
		
		
			//3:板块切换完成后，设置当前DIV里面的li动画--------------------------
 			var o_Array = This_div.attr("HJL_animate").split("|"); //分割多组动画
			 $(o_Array).each(function(i, e) {
				  $( this.split("@")[0] ).hide(); //先隐藏
			 });
			setTimeout(function(){
				
				//板块切换完毕执行
				$("#debug").html( "进入中" );
				HJL.go_animate( This_div , "HJL_animate" , "in"  );  
				
				 HJL.E.b.Change_io_go = 1 ; //重启粒子发射器
				HJL.go_run_fun(	This_div.attr("HJL_function")	); //执行自定义函数 
				
			}, HJL.bl.ani_queue_time ); //使用第二次排队时间
				
			HJL.up_IO_NAV(This_div); //重启滚动开关、更新导航，使用三次排队时间
	},
	
	go_animate:function(This_div , attr  , ty ){ // ty = in 进入动画， out=退出动画 
	//开始给div里面的对象设置动画, This_div 当前要操作的div， attr自定义属性 HJL_load_animate=".list0 li@main_in@400@0|.list1 li@main_in@900@0"
		
		
		var save_top_time = 0 ; //冒泡最大进入随机时间
		
		var Txt =  This_div.attr( attr ) ;
		
		if(  typeof(Txt)!="undefined" && Txt !=""){
			 var o_Array = Txt.split("|"); //分割多组动画
			 
			 $(o_Array).each(function(i, e) {
				 var tag = this.split("@")[0]; //对象组
				 var ani =  this.split("@")[1] ; //动画名
				 var speed =  parseInt(  this.split("@")[2] ) ; //速度
				 var pause = parseInt(  this.split("@")[3] ?   this.split("@")[3] : 0 )  ; //暂停时间
                 set(	tag , ani , speed , pause 	); //执行动画
				 if( speed +pause  > save_top_time ){ save_top_time = speed  + pause ;}//冒泡最大随机时间
            });

		}else{return false;}
		
		function set(  tag , ani , speed ,pause  ){ //执行动画
			
			if(tag==""){return false}
			if( pause > 0 ){ //如果设置了暂停 
				setTimeout(function(){$(tag).show();}  ,  pause );
			}else{
				$(tag).show();//先显示			
			}
			
			$(tag).each(function(i, e) { //逐个给对象添加动画
			
				var end_speed = HJL.bl.ani_li_speed_random ; //是否随机速度
				var rans = 	HJL.sjs(1,3)==1 ?  -1 :  1; //随机正负数
				end_speed == 0 ? end_speed = parseInt(speed)*0.001 : end_speed = ( parseInt(speed) +  HJL.sjs(1,end_speed) * rans )* 0.001    ;//随机执行速度
				var TAG = $(this);
				
				//要先清除原先的样式才可以添加Animate的类
				TAG.css({"animation":""});TAG.css({"-webkit-animation":""});TAG.css({"-moz-animation":""});
				TAG.css({"-ms-animation":""});TAG.css({"-o-animation":""});
				
				if(ani.indexOf("~")>-1){ //如果使用的是Amation的动画库
						var reg=new RegExp("~","g");  
						var anicss=ani.replace(reg,"");
						//alert( $(this).css("animation")  )
						TAG.addClass(anicss + " animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend' , function(){
								TAG.removeClass(anicss).removeClass("animated");
							}   
						);// one
					
				}else{
					
						
						if(ty=="in"){
							HJL.css3_set(	TAG , "animation" , ani + "  "+ end_speed  +"s   " ); //CSS3兼容处理
							setTimeout( function(){ 
									 //动画完毕后清除动画
									//TAG.css({"animation":""});TAG.css({"-webkit-animation":""});TAG.css({"-moz-animation":""});
									//TAG.css({"-ms-animation":""});TAG.css({"-o-animation":""});
							} ,  end_speed*1000 + pause*0.001 ) ; 
							
						}else{
							//$(this).css({"animation":ani + " forwards "+ end_speed  +"s   "+ pause*0.001  +"s" }); 
 							HJL.css3_set(	TAG, "animation" , ani + " forwards "+ end_speed  +"s  "); //CSS3兼容处理
						}
					//	//处理一次性动画
					/*
						var reg=new RegExp("#one","g");  
						var newani = ani.replace(reg,"");
							
						var one_attr_in = $(this).attr("HJL_aniIn_once");
						var one_attr_out = $(this).attr("HJL_aniOut_once");
						
						if( typeof(one_attr_in)=="undefined" || one_attr_in !="true"  ){
							$(this).css({"animation":newani + "  "+ end_speed  +"s forwards  "+ pause*0.001  +"s" }); 
						}else if(	 typeof(one_attr_out)=="undefined" || one_attr_out !="true"  ){
								$(this).css({"animation":newani + "  "+ end_speed  +"s forwards  "+ pause*0.001  +"s" }); 
						
						}
						
							//$(this).css({"animation":newani + "  "+ end_speed  +"s forwards  "+ pause*0.001  +"s" }); 
						if(	ani.indexOf("#one") > -1 ){
							if(ty == "in"){	$(this).attr("HJL_aniIn_once","true");	}
							if(ty == "out"){	$(this).attr("HJL_aniOut_once","true");	}
						}
						*/
						
						//动画完成后删除掉动画属性 方便下次重复动画
				}
			});
			
			
		}
		//alert( save_top_time *1000 )
		HJL.bl.ani_queue_time +=  save_top_time    ; //做完动画后，更新排队时间，加上暂停时间

		//alert(  "冒泡时间：" + HJL.bl.ani_queue_time    )
	},
	up_IO_NAV:function(This_div){//设定导航部分，重新开启滚动-----------------------------
	//alert(HJL.bl.ani_queue_time)
			setTimeout(function(){	
				var nav_on_index = parseInt(This_div.attr("HJL_nav")); //更新导航高亮索引
				var nav = $(HJL.bl.Nav_ul); //UL
				nav.find(HJL.bl.Nav_li).removeClass(HJL.bl.Nav_on); //去掉所有ON样式
				nav.find(HJL.bl.Nav_li).eq(	nav_on_index ).addClass( HJL.bl.Nav_on );//单独给当前导航添加高亮
				
				HJL.bl.save_this_nav = nav_on_index ; //记录当前板块索引
				HJL.bl.wheel_IO = 1 ; // 所有动画完成后，重新允许滚轮滚动 
				
				$("#debug").html( HJL.bl.save_this_nav  + "|" + HJL.bl.save_wheel );

				
			}, HJL.bl.ani_queue_time ); //使用第三次排队时间
			
	},go_run_fun:function(txt){ //执行自定义函数
		if(  typeof(txt)!="undefined" && txt !=""){ eval(txt);}
	},
	sjs:function(a,b){ //返回a-b之间随机数
			return parseInt(Math.random()*(b-a)+a);
	},
	E:{ //特效系列
		b:{ //所有特效自用变量集
			Intval_rain:0, //要来存储定时器-下雨效果的
			Change_io:1 , //板块切换是否要清除动画， 1 表示清除， 0表示不清除
			Change_io_go:1 , //板块切换的时候这个数值会发生改变， //要来关闭粒子发射器
			
			set_blur_TAG:Object , //存储模糊对象
		},
		particle:function(_Tag,_Speed,_WeiY,_Num,_Rotate,_BdivAniTxt,_sjOpacity,_sjScale,_sj3DRotate,_Life,_StarEndXY,_AniSX,_ChangeIO,_MyAnimate){ 
		//17个参数
			HJL.E.b.Change_io = _ChangeIO  ;//换版是否清除动画  
			
			var WinW = $(window).width() , WinH = $(window).height(); //屏幕宽度高度
			var sX = ( parseInt( _StarEndXY[0] )*0.01 ) * WinW;  // 开始百分比转像素
			var endX = ( parseInt( _StarEndXY[1] )*0.01 ) * WinW;  // 结束百分比转像素
			var sY = ( parseInt( _StarEndXY[2] )*0.01 ) * WinH;
			var endY = ( parseInt( _StarEndXY[3] )*0.01 ) * WinH;
			
			//装载所有样式的最大容器
			var Tag_0_style = $("[HJL_LIZI_RQ_0_STYLES]");
			Tag_0_style.remove(); //每次启动要先清除上次生成的最大样式对象
			Tag_0_style = $("<div HJL_LIZI_RQ_0_STYLES />");
			$("body").append(	Tag_0_style 	);
			
			//装载所有动画div的容器
			var Tag_0_div = $("[HJL_LIZI_RQ_0_DIVS]");
			Tag_0_div.remove(); //每次启动要先清除上次生成的最大容器对象
			Tag_0_div = $("<div HJL_LIZI_RQ_0_DIVS />");
			$("body").append(	Tag_0_div 	);
			
			clearInterval( HJL.E.b.Intval_rain ); //先清除定时器
			$(_Tag).hide();
			
			var life_num = 0;//生命计数器			
			var YS_tag = $(_Tag).clone(); //原始对象 
			
			HJL.E.b.Intval_rain = setInterval( function(){
					var Tag_div_1 = $("<div Tag_div_1/>"); //装载样式和粒子-旋转的div
					var Tag_div_2 = $("<div Tag_div_2/>"); //装载粒子的运行器
					var LIZI_tag = YS_tag.clone(); //克隆的粒子
					Tag_div_2.append(	LIZI_tag );						
					LIZI_tag.show() ; //显示粒子对象
							
							//小容器随机运行距离，以及小容器宽度
							var WeiY_WH = WinW > WinH ? WinW : WinH ; //如果屏幕宽度比高度高，就采取宽度
							//运行速度速度仍然进行随机调整
							var ran_speed =  _Speed[0] +  HJL.sjs( 0,  _Speed[1] )  ; 
							//粒子随机大小 
							var endScale = _sjScale == 0 ?  1 : HJL.sjs(1,_sjScale*10)*0.1  ; 
							
							
							//设置粒子的动画样式（自己旋转、自变形）
							var Lizi_Anitxt; //动画附加属性
							var Rotates_1 = "" , Rotates_2 = ""; 
							if( _sj3DRotate[0] == 0 ){ //如果没有3D变形，那么粒子动画使用的是小容器的时间
									Lizi_Anitxt =  ran_speed*0.001+"s "+ _AniSX  ; //动画附加属性
							}else{		//粒子随机3D翻转							
									Lizi_Anitxt = _sj3DRotate[4];  //动画附加属性
							 		Rotates_1 =  'perspective('+_sj3DRotate[0]+'px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)'  ;
									Rotates_2 =  'perspective('+_sj3DRotate[0]+'px) rotateX('+_sj3DRotate[1]+'deg) rotateY('+_sj3DRotate[2]+'deg) rotateZ('+_sj3DRotate[3]+'deg)'  ;
							}
							
							var LIZI_style = $("<style HJL_LIZI_lizi_3D_style/>");
							var ss = '@keyframes HJL_LIZI_lizi_3D_style'+life_num+'{';
								var end_R1 = Rotates_1 , end_R2 = Rotates_2;
								if(	HJL.sjs(0,2)==1	){	end_R1 = Rotates_2 , end_R2 = Rotates_1;	} //随机调换翻转 0%和 100%的数值
								 
								ss += '0%{transform:scale('+endScale+') '+end_R1+';}';//缩放和3D变形
								ss += '100%{transform:scale(1) '+end_R2+';}';
								ss += '}';								
								ss = HJL.css3_hack( ss ) ; //兼容处理
							
							LIZI_style.html( ss );
							Tag_div_1.append( LIZI_style );// 样式加到容器里面去
							
							if(_MyAnimate==""){ //没有设定自定义动画才执行
								HJL.css3_set(LIZI_tag ,"animation",'HJL_LIZI_lizi_3D_style'+life_num+' '+ Lizi_Anitxt ); //给粒子本身做翻转动画
							}else{
								HJL.css3_set(LIZI_tag ,"animation", _MyAnimate  ); //给粒子本身做翻转动画
							}
							
							
							
						var WeiY = parseInt(_WeiY); //运行距离
						if( WeiY == 0){ 
							WeiY = 0;
						}else if(WeiY == -1){
							WeiY = HJL.sjs(1,WeiY_WH);
						}else{
							WeiY = WeiY*0.01*WeiY_WH;
						}
						
						//添加小容器对象的动画样式（负责位移和透明度）
						//小容器随机透明度
						var endOpacity =  _sjOpacity==0 ? 1 : HJL.sjs(1,10)*0.1   ; 
						var Tag_div_2_style = $("<style Tag_div_2_style  />");
						var s = '@keyframes HJL_LIZI_div_2_style'+life_num+'{';
							if( _MyAnimate=="" ){ //如果设定了自定义动画，透明度会失效
								s += '0%{ opacity:0; }';
								s += '20%{ opacity:'+endOpacity+';  }';
								s += '80%{ opacity:'+endOpacity+';  }';
								s += '100%{ opacity:0; transform: translate( '+ WeiY +'px, 0)  ; }';
							}else{
								s += '0%{  }';
								s += '100%{  transform: translate( '+ WeiY +'px, 0)  ; }';
							}
								s += '}';
								s = HJL.css3_hack( s ) ; //兼容处理
						
							Tag_div_2_style.html(s);
							Tag_div_1.append( Tag_div_2_style );// 加到容器里面去										
							
							HJL.css3_set(	Tag_div_2 , "animation" , "HJL_LIZI_div_2_style"+life_num+" "+ran_speed*0.001+"s "+ _AniSX  	);  //给粒子的小容器本身做位移动画
								
					
					//处理完毕后把小容器加到大容器里面去，处理大容器的出现位置
					Tag_div_1.append( Tag_div_2 );
					Tag_div_1.width( (WeiY==0? $(window).height():WeiY) ).height( 1 );
					Tag_div_1.css({"overflow":"visible","position":"absolute","display":"block","z-index":99999 });
						 //Tag_div_1.css({"background":"rgba(255,0,0,.5)"}); //====================================================
					
					var end_startX = HJL.sjs( sX , endX	) , end_startY = HJL.sjs( sY , endY	); 
					Tag_div_1.css({"left":  end_startX + "px","top": end_startY + "px" }); 
					
					//大容器随机旋转角度，如果有自定义动画，就会被下面的替换掉				
					var end_Rrotate = _Rotate ;
					if( Math.abs(_Rotate)>360 ){  //370,-380
						 end_Rrotate = HJL.sjs(0,Math.abs(_Rotate) - 360)  ;
						 end_Rrotate = _Rotate > 0 ? end_Rrotate : end_Rrotate * -1;//还原正负数  
					}
					
					HJL.css3_set(	Tag_div_1 , "transform" , "rotate("+end_Rrotate+"deg)"  	);
					HJL.css3_set(	Tag_div_1 , "transform-origin" , "0"  	);//重设旋转原点
						
							//大容器随机旋转角度，如果有自定义动画				
							var JD_TXT = _BdivAniTxt[0];
							JD_TXT = JD_TXT.replace(/(^\s*)/g,"");
							
								var Tag_styles = $("<style/>");
								var s2 = '@keyframes Tag_div_1_s'+life_num+'{';
									s2 +=  JD_TXT ; // 容器div使用自定义动画属性
									s2 += '}';
									s2 = HJL.css3_hack( s2 ) ; //兼容处理
									Tag_styles.html(s2);
								
							if( JD_TXT.length > 0 ){
								Tag_0_style.append(Tag_styles);// 样式加到容器里面去
								HJL.css3_set(	Tag_div_1 , "animation" , 'Tag_div_1_s'+life_num+' ' + _BdivAniTxt[1]  	);  //给粒子的大容器本身做位移动画
							}
						
					//所有处理完毕后加到 最大容器
					Tag_0_div.append(	Tag_div_1 	);
					setTimeout(function(){  Tag_div_1.remove() ; Tag_styles.remove()  } , ran_speed ); //完成后删除对象，动画对象和它的样式 
					life_num += 1; //生命计数器
					if(	   ( life_num>parseInt(_Life)&&parseInt(_Life)!=0  ) || HJL.E.b.Change_io_go == 0    ){ //如果设定了生命值，或者切换了板块
						  clearInterval( HJL.E.b.Intval_rain );   
						  setTimeout(function(){ //强制删除动画样式和对象
								//$("[hjl_lizi_rq_0_styles]").remove();
								//$("[hjl_lizi_rq_0_divs]").remove();
						  } ,  _Speed[0] + _Speed[1]);
					}
					
			}, parseInt( _Num ) ); //按照生成速度来生成
			
						
			
		
		}, // Particle end
		
		
		zoom:{ //图片点击放大插件 ------------------------
			B:{
				Z_wheel:0 , //记录滚动了多少次
				simg_X:0 , //小图位置
				simg_y:0,
				simg_W:0 , //小图宽高
				simg_H:0,
				bimg_ysw:0,//大图原始宽度高度
				bimg_ysh:0,
				bimg_endw:0,//大图出来的宽度高度
				bimg_endh:0,
				bimg_endX:0,//大图出来的XY
				bimg_endY:0,
				bimg_scale:1, //大图定格后的缩放值
			},
			init:function(){ //初始化
				var simgs = $("[HJL_IMG_ZOOM]");
				//imgs.click(function(){});
				simgs.unbind('click').css({"cursor":"pointer"}).click(function(){	HJL.E.zoom.op($(this))    }   ); //给图片绑定点击事件
				HJL.E.zoom.show_bg(2); //整理背景
			},
			op:function(simg){ //打开图片
				//alert( IMG.attr("HJL_IMG_ZOOM"))
				HJL.bl.wheel_IO = 0 ; //关闭板块切换鼠标滚动
				HJL.E.zoom.show_bg(1); //显示背景
				
				//生成图片部分-----------------------------------------
				var IMG  = $("<img  />");
				IMG.hide().attr("HJL_ZOOM_BIMG","").attr("src" , simg.attr("HJL_IMG_ZOOM"));
				$("body").prepend( IMG ); //先把隐藏的img放进去

				IMG.load(function(e) {
					
					
					
					var img_YSW = IMG.width() , img_YSH = IMG.height(); //原始高度
					var end_img_w = get_WH(img_YSW,img_YSH , "w")  , end_img_h = get_WH(img_YSW ,img_YSH, "h") ;
						IMG.width(	end_img_w	).height(	end_img_h	); //获得计算过后的宽度高度，用宽高适应屏幕，而不是缩放
					
					var start_X = simg.offset().left , start_Y = simg.offset().top  ; //出现的位置
					var start_W = simg.width() , start_H = simg.height()  ; //出的大小
					
					HJL.E.zoom.B.simg_X = start_X ;		HJL.E.zoom.B.simg_Y = start_Y ; //标记小图出坐标
					HJL.E.zoom.B.simg_W =  start_W ;		HJL.E.zoom.B.simg_H = start_H ; //标记小图大小
					HJL.E.zoom.B.bimg_ysw = img_YSW ;	HJL.E.zoom.B.bimg_ysh = img_YSH ;//标记原始宽高
					HJL.E.zoom.B.bimg_endw = end_img_w ; 	HJL.E.zoom.B.bimg_endh = end_img_h ; //标定格的宽高
					
					var end_L = $(window).width()/2 - end_img_w/2 , end_T = $(window).height()/2 - end_img_h/2    ; //定格位置
					
					HJL.E.zoom.B.bimg_endX = end_L ; 	HJL.E.zoom.B.bimg_endY = end_T ; //标定格的宽XY，给手指移动使用
						
								//出来的样式
								var img_style = $("<style  HJL_ZOOM_IMG_STYLE_in/>"); 
								var img_s = '@keyframes HJL_IMG_zoom_in{';
								img_s += '0%{width:'+start_W+'px;height:'+start_H+'px;opacity:0.2; left:'+start_X+'px; top:'+start_Y+'px; }';
								img_s += '100%{width:'+end_img_w+'px;height:'+end_img_h+'px;left:'+end_L+'px;top:'+end_T+'px;opacity:1;}';
								img_s += '}';
								
									img_s = HJL.css3_hack( img_s ); //CSS3兼容处理
								
								img_s += '.HJL_ZOOM_X{'+ HJL.css3_hack("transition:all 0.3s;") +'}';
								img_s += '.HJL_ZOOM_X:hover{'+ HJL.css3_hack("transform:rotate(180deg) scale(1.3);") +'}';
								
																
								img_style.html(	 img_s	);
								$("head").append(	img_style	);
						
						IMG.css({ //整理图片
							"cursor":"pointer",
							"position":"absolute" ,"left": end_L + "px" , "top": end_T + "px","z-index":2147483642 ,
							//"animation":"HJL_IMG_zoom_in 0.7s ",
						}).show();
						HJL.css3_set(	IMG , "animation" , "HJL_IMG_zoom_in 0.7s"	);//CSS3兼容处理
						
						
						$("[HJL_ZOOM_IMG_BG]").css({"background-image":"none"}); //去掉背景gif
						
						HJL.E.zoom.setMove(	IMG	);//设定拖动
						HJL.E.zoom.setWheel(	IMG		);//设定滚轮滚动放大缩小
						
						HJL.E.zoom.setMove_touch(	IMG	);//设定手指拖动、缩放
						
						
                });
				
				function get_WH(ysw,ysh,ty){ //计算宽高的函数
					
					var ww = $(window).width() - 30;  
					var wh = $(window).height() - 30;
					
					var img_ysw =  ysw , img_ysh = ysh ;
					var bi = img_ysw / img_ysh; 
										
					var endw,endh;					
					endw = img_ysw > ww ? ww : img_ysw ;  //以宽度为准，算出高度
					endh = bi > 0 ?  endw / bi : endw * bi;
					if(	endh > wh	){ //如果算出的高度还是大于屏幕，继续减去宽度（减之前，宽度肯定是小于屏幕的）
						endh = wh;
						endw = bi > 0 ?  endh * bi : endw / bi;
					} 
					 
					if(ty=="w"){ return endw;}
					if(ty=="h"){ return endh;}
				}
				//生成图片部分 END -----------------------------------------
				
				
 			},
			
			show_bg:function(ty){ // ty==1 显示背景和整理背景，2=仅仅整理背景 , 0 =关闭背景
				
				var Img_bg = $("[HJL_ZOOM_IMG_BG]"),Img_X = $("[HJL_ZOOM_IMG_X]"),Img_SRC = $("[HJL_ZOOM_BIMG]"),Img_style_in = $("[HJL_ZOOM_IMG_STYLE_in]");
				
				if(ty==0){	
					HJL.bl.wheel_IO = 1 ; //打开板块切换鼠标滚动

					Img_bg.remove() ; Img_X.remove() ;
					
					
					//处理图片退出=================================
					var new_style_out = $("<style  HJL_ZOOM_IMG_STYLE_out/>"); 
					var img_s =  '@keyframes HJL_IMG_zoom_out{';
					
					var close_X = HJL.E.zoom.B.simg_X , close_Y = HJL.E.zoom.B.simg_Y; 		//退出到位置					
					var close_W = HJL.E.zoom.B.simg_W , close_H = HJL.E.zoom.B.simg_H ;		// 退出到大小	

					img_s += '0%{width:'+Img_SRC.width()+';height:'+Img_SRC.height()+'px;	opacity:1;}';
					img_s += '100%{	width:'+close_W+'px;height:'+close_H+'px; opacity:0.1; left:'+close_X+'px; top:'+close_Y+'px; }';
					img_s += '}';
					
									img_s = HJL.css3_hack( img_s ); //CSS3兼容处理
					
					new_style_out.html(	img_s );
					$("head").append( new_style_out );
		
					//Img_SRC.css({"animation":"HJL_IMG_zoom_out 0.4s forwards"});
					HJL.css3_set(	Img_SRC , "animation" , "HJL_IMG_zoom_out 0.4s forwards"	);//CSS3兼容处理
								
					setTimeout(function(){
						new_style_out.remove();
						Img_style_in.remove() ; 
						Img_SRC.remove() ;
					}, 400);
					
					return false;	
				} //全部删除 
								
				if( Img_bg.size() == 0 && ty==1){
					var new_img_bg =  $("<div HJL_ZOOM_IMG_BG />");	
					$("body").prepend( new_img_bg ); 
					Img_bg = new_img_bg	;
									
					if( Img_X.size() == 0 ){ var new_Img_X = $("<div HJL_ZOOM_IMG_X />");	$("body").prepend( new_Img_X );  Img_X=new_Img_X; 	} //新建关闭按钮
					Img_X.css({ //整理关闭按钮
					"background":"url(data:image/gif;base64,R0lGODlhKAAoAJEAAN0AAIgAAFUAAP///yH5BAEHAAMALAAAAAAoACgAAAKKnI+py+0Po5y0SmEVhgGEfHSf0wEeWJ6MYLYjlZrbEqtS/TL43Zp5s3sEI0Naz8br/ULHJbGpKFaKUkuwmsFhUUcoSNf1fUld55jpPUfDSPWgllZr498r3RrfPpVrPt7f5zJ1h6AXKCZEeNgGpIgmOKHHAhh5NBNoxgHZmPnUeXAJEupGWmp6WloAADs=)","cursor":"pointer",
					"position":"absolute" ,"right":"20px" , "top":"20px","background-size":"100%",
					"z-index":2147483643 ,
					"width": "65px" , "background-repeat":"no-repeat","background-position":"center",
					"height": "65px"  , 
				}).addClass("HJL_ZOOM_X");
				
				Img_X.unbind('click').click(  function(){		HJL.E.zoom.show_bg(0);   }    );
				Img_bg.unbind('click').click(  function(){		HJL.E.zoom.show_bg(0);   }    );

				} //新建背景
				
				Img_bg.css({ //整理背景 ty==2
					"background-color":"rgba(0,0,0,0.8)",
					"background-image":"url(data:image/gif;base64,R0lGODlhSgALAIAAAP////8AACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBwAAACwAAAEACAAIAAACB4yPqcvtXQAAIfkECQcAAAAsCgABAAgACAAAAgeMj6nL7V0AACH5BAkHAAAALBMAAQAIAAgAAAIHjI+py+1dAAAh+QQJBwAAACwcAAEACAAIAAACB4yPqcvtXQAAIfkECQcAAAAsJQABAAgACAAAAgeMj6nL7V0AACH5BAkHAAAALC4AAQAIAAgAAAIHjI+py+1dAAAh+QQJBwAAACw3AAEACAAIAAACB4yPqcvtXQAAIfkECQcAAAAsQAABAAgACAAAAgeMj6nL7V0AACH5BAkHAAAALDcAAQAIAAgAAAIHjI+py+1dAAAh+QQJBwAAACwuAAEACAAIAAACB4yPqcvtXQAAIfkECQcAAAAsJQABAAgACAAAAgeMj6nL7V0AACH5BAkHAAAALBwAAQAIAAgAAAIHjI+py+1dAAAh+QQJBwAAACwTAAEACAAIAAACB4yPqcvtXQAAIfkECQcAAAAsCgABAAgACAAAAgeMj6nL7V0AADs=)",
					"position":"absolute" ,"left":"0" , "top":"0","display":"none","background-repeat":"no-repeat","background-position":"center",
					"z-index":2147483641 ,
					"width": $(window).width() , 
					"height":$(window).height() , 
				});
				Img_bg.show();
 				 
				

			},
			setWheel:function(IMG){ //滚动缩放事件
						
						var oImg = IMG[0];
			
						addWheelEvent(oImg, function(delta) {
							var ratioL = (this.clientX - oImg.offsetLeft) / oImg.offsetWidth,
							ratioT = (this.clientY - oImg.offsetTop) / oImg.offsetHeight,
							ratioDelta = !delta ? 1 + 0.1 : 1 - 0.1,
							w = parseInt(oImg.offsetWidth * ratioDelta),
							h = parseInt(oImg.offsetHeight * ratioDelta),
							l = Math.round(this.clientX - (w * ratioL)),
							t = Math.round(this.clientY - (h * ratioT));
							
							if( w > HJL.E.zoom.B.bimg_endw * 0.5  ){ //最小不能小于一半
									with(oImg.style) {
										width = w +'px';
										height = h +'px';
										left = l +'px';
										top = t +'px';
									}
							}
							
							HJL.E.zoom.setBFB( ratioDelta  ,  w   , h ); //设定显示缩放百分比
							
						});
						function addWheelEvent(obj, callback) {
							if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
								addEvent(obj, 'DOMMouseScroll', wheel);
							} else {
								addEvent(obj, 'mousewheel', wheel);
							}
							function wheel(ev) {
								var oEvent = prEvent(ev),
								delta = oEvent.detail ? oEvent.detail > 0 : oEvent.wheelDelta < 0;
								callback && callback.call(oEvent, delta);
								return false;
							}
						};
						
						function addEvent(obj, sType, fn) {
							if (obj.addEventListener) {
								obj.addEventListener(sType, fn, false);
							} else {
								obj.attachEvent('on' + sType, fn);
							}
						};
						function removeEvent(obj, sType, fn) {
							if (obj.removeEventListener) {
								obj.removeEventListener(sType, fn, false);
							} else {
								obj.detachEvent('on' + sType, fn);
							}
						};
						function prEvent(ev) {
							var oEvent = ev || window.event;
							if (oEvent.preventDefault) {
								oEvent.preventDefault();
							}
							return oEvent;
						}
						
																		
						
							
			},
			setBFB:function(n,W,H){ // 显示百分比 n > 1 上滚动
							
							var tip = $("[HJL_ZOOM_TIPS]");
							if(tip.size()>0){	tip.remove() }		 //每次执行都先删除					
							
							var new_tip = $("<div HJL_ZOOM_TIPS/>");  //百分比提示
							$("body").prepend(new_tip);	
							new_tip.css({
								"width":"100px","height":"30px","background":"rgba(0,0,0,0.7)","text-align":"center","color":"#fff","padding-top":"10px",
								"position":"absolute","z-index":2147483644,"left":"50%","top":"70%","border-radius":"7px","margin":"0 0 0 -50px",
							});
							
							if( n!=-999 ){
								new_tip.html(  ( W / HJL.E.zoom.B.bimg_ysw * 100 ).toFixed(0) +"%"  );
							}else{
								new_tip.html(  W  );
							}
							new_tip.fadeOut(500);
						 
			},
			
			setMove:function(IMG){ //拖动事件
			
						var save_Mx =0 ,  save_My =0  ; //存储鼠标按下时鼠标的位置 
						var save_tagX =0 ,  save_tagY =0  ; //存储鼠标按下时图片的位置 
						
						IMG.mousedown(function(e){
							save_Mx = e.pageX;
							save_My = e.pageY;
							save_tagX =  parseInt(IMG.offset().left);
							save_tagY =  parseInt(IMG.offset().top);
							//alert(save_Mx)
						   $(document).bind('mousemove',Move_tag);
						   
						   $("#debug").html("save:" + save_Mx +" save_imgx:" +save_tagX );
						});
		 
						function Move_tag(e){
							var new_Mx = e.pageX ,  new_My = e.pageY   ;
							$("#debug").html("save:" + save_Mx +" new:" +new_Mx +" imgx:" );
							IMG.css({
							   'left':(save_tagX + (new_Mx-save_Mx)) + 'px','top' : (save_tagY + new_My-save_My) + 'px','position' : 'absolute'
							});
							return false;
						}
						$(document).mouseup(function(e){
							$(document).unbind('mousemove');
							
					   });			
					
			},
			setMove_touch:function(IMG){ //手指拖动、缩放事件
				var oImg = IMG[0];
				
				var ys_x = HJL.E.zoom.B.bimg_endX , ys_y = HJL.E.zoom.B.bimg_endY;
				
				var EML = new Hammer( oImg );
				//手指拖动-----
				var pan_IO = 1;
				EML.on('pan', function(ev) {
						if(pan_IO!=1 || ev.pointerType == "mouse" ){return false;} //防止缩放的时候也拖动 ， 禁止鼠标执行代码
						if(	Math.abs(ev.deltaX) < 30){return false}
						var end_x = ys_x + ev.deltaX   , end_y = ys_y + ev.deltaY   ;
						$(IMG).css({"left":	end_x + "px","top":	end_y +"px"});
						if( ev.isFinal ){	ys_x = 	end_x ; ys_y = 	end_y ; } //更新定格后的位置
						
				});

				// 手指轻触----		
				EML.on('tap', function(ev) {
					//if(ev.pointerType == "mouse" ){return false;} //  禁止鼠标执行代码
					console.log(	ev    );
				});
				
				
				//手指缩放-----
				EML.get('pinch').set({ enable: true }); //打开缩放
				var ys_scale = HJL.E.zoom.B.bimg_scale ;	 //原始缩放值，在缩放后这个变量会被更新	
				var ys_W =  HJL.E.zoom.B.bimg_endw , ys_H =  HJL.E.zoom.B.bimg_endh ; 
				var Timmer;			
				
				//EML.get('rotate').set({ enable: true }); //打开旋转
				 
				EML.on('pinch', function(ev) {	
						if(ev.pointerType == "mouse" ){return false;} //  禁止鼠标执行代码
						
						pan_IO = 0 ; //关闭拖动				
						var end_scale = ys_scale + (ev.scale -1)   ; // 1 + ( 1.4 - 1 ) 
						if(	ev.scale<1	){//如果是缩小，则加倍缩小
							end_scale =  ys_scale + (ev.scale -1)*ys_scale*1.2   ; // 1 + ( 0.7 - 1 = -0.3) 
						}
						
						if(end_scale < 0.5){	end_scale = 0.5 ;}
						HJL.css3_set( IMG , "transform" , "scale("+end_scale+","+end_scale+")" );
						
						//更新缩放值
						clearTimeout(Timmer);
						Timmer = setTimeout(function(){	
							ys_scale = end_scale;
							pan_IO = 1;	//重新打开拖动
							
						} , 100);
						
						var end_bfb = HJL.E.zoom.B.bimg_endw*end_scale;
						HJL.E.zoom.setBFB( 0   ,   end_bfb  , 0 ); //设定显示缩放百分比
						//$("#debug").html(	end_scale 	)
 				});				
					
				/*	
				EML.on('pinch', function(ev) {	
						if(ev.pointerType == "mouse" ){return false;} //  禁止鼠标执行代码
						pan_IO = 0 ; //关闭拖动				
						var end_scale = ys_scale + (ev.scale -1)   ; // 1 + ( 1.4 - 1 ) 
						if(	ev.scale<1	){//如果是缩小，则加倍缩小
							end_scale =  ys_scale + (ev.scale -1)*ys_scale*1.2   ; // 1 + ( 0.7 - 1 = -0.3) 
						}
						if(end_scale < 0.5){	end_scale = 0.5 ;}
						//-----------
							var ClientX = ev.pointers[0].clientX , ClientY = ev.pointers[0].clientY;
							
							var ratioL = ( ClientX - oImg.offsetLeft) / oImg.offsetWidth,
							ratioT = (ClientY - oImg.offsetTop) / oImg.offsetHeight,
							w = parseInt( ys_W * end_scale),
							h = parseInt( ys_H* end_scale),
							l = Math.round( ClientX - (w * ratioL)),
							t = Math.round( ClientY - (h * ratioT));
							t = Math.round(this.clientY - (h * ratioT));
							
							if( w > HJL.E.zoom.B.bimg_endw * 0.5  ){ //最小不能小于一半
									with(oImg.style) {
										width = w +'px';
										height = h +'px';
										left = l +'px';
										top = t +'px';
									}
							}
						ys_x = l ;
						ys_y = t ;
						
						//----------------------
						//更新缩放值
						clearTimeout(Timmer);
						Timmer = setTimeout(function(){	
							ys_scale = end_scale;
							pan_IO = 1;	//重新打开拖动
						} , 100);
						
						var end_bfb = HJL.E.zoom.B.bimg_endw*end_scale;
						HJL.E.zoom.setBFB( 0   ,   end_bfb  , 0 ); //设定显示缩放百分比
				});
				*/
				
			}, // setMove_touch end
			
			
		
		} ,// ZOOM end
		set_Animate:function( jq_tag , css , txt ){ //让对象动画起来
			
			var temp_style = $("[HJL_TEMP_ANIMATE_STYLE]");
			temp_style.remove();
			if( temp_style.size()<1 ){
				temp_style =   $("<style HJL_TEMP_ANIMATE_STYLE/>");
				$("body").prepend( temp_style ) ;
			}
			
			var s = '@keyframes HJL_TEMP_ANIMATE_STYLE{';
			s += css;
			s += '}';
			s = HJL.css3_hack( s ); //兼容处理
			temp_style.html( s ); //兼容处理			
			HJL.css3_set( jq_tag , "animation" , "HJL_TEMP_ANIMATE_STYLE" + " "+txt );
			
		},
		set_blur:function( JQTAG  ,  className, Num  ){ 
		//模糊特效 , JQTAG要设置模糊的对象， Num模糊值 ( Num = 大于0是开启特效   Num = 0 是关闭模糊特效) , className(开启和关闭的ClassName要保持一致)
			
			if(Num==0){  HJL.E.b.set_blur_TAG.removeClass(className);  return false; }
			
			HJL.E.b.set_blur_TAG = JQTAG; 
			
			var blur_stye = $("[HJL_blur_style]");
			if(	blur_stye.size() < 1 ){
				blur_stye = $("<style HJL_blur_style />");
				$("head").append(	blur_stye	);
			}
			var s = '.' + className + '{';
			s+= 'filter: url(blur.svg#blur); /* Chrome, Opera */ ';
			s+= '-webkit-filter: blur('+Num+'px); ';
			s+= '-moz-filter: blur('+Num+'px); ';
			s+= '-ms-filter: blur('+Num+'px);  ';
			s+= 'filter: blur('+Num+'px); ';
			s+= 'filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='+Num+', MakeShadow=false);  /* IE6~IE9 */	';
			s+= '} ';
			
			blur_stye.html(  s	);
			JQTAG.addClass(className);
	
		}, //blur
	

	}, //Effects end
	
	
	css3_hack:function(	CSS	){ //自动添加兼容浏览器的CSS3前缀 ， 
		//用例：	aa.css3_hack(	"@keyframes www{0%{right:33px;top:55px; transform:rotate(360deg) scale(2);left:0%;}100%{left:80% ;transform:rotate(360deg) scale(4);top:66px;right:33px;}}"	)	
		//用例：	aa.css3_hack(	"animation:www 1s;"	)	
		//用例：	aa.css3_hack(	"transition:all 1s;"	)	
		
		var k1 = "animation" , k2 = "keyframes" , k3 = "transform" , k4 = "transition"; 
		var reCSS = "";
		if(	CSS.indexOf(k1)==0||CSS.indexOf(k4)==0||CSS.indexOf(k3)==0){reCSS = CSS + "-webkit-"+CSS +   "-moz-"+CSS +  "-ms-"+CSS +  "-o-"+CSS }
		if(	CSS.indexOf(k2)==1	){
			//先处理大括号里面的 transform
			var Tmparr_1 = CSS.split("{"); //一维
			for(i in Tmparr_1){
				var Tmparr_2 = Tmparr_1[i].split(";") // 二维
				for(ii in Tmparr_2){
					if(	Tmparr_2[ii].indexOf(k3) > -1	){	// 大于-1预防两边有空格
						var new_c = Tmparr_2[ii] +";";
						new_c += Tmparr_2[ii].replace(k3,"-webkit-"+k3) +";";
						new_c += Tmparr_2[ii].replace(k3,"-moz-"+k3) +";";
						new_c += Tmparr_2[ii].replace(k3,"-ms-"+k3) +";";
						new_c += Tmparr_2[ii].replace(k3,"-o-"+k3) +";";
						Tmparr_2[ii] = new_c;						
					}
				}
				Tmparr_1[i] = Tmparr_2.join(";") ; //把拼合后的结果更新到一维数组
			}
			//再拼合@keyframes
			var First_c = CSS;
			First_c = Tmparr_1.join("{"); //分解一维数组
			reCSS = First_c +"";
			reCSS += First_c.replace(k2,"-webkit-"+k2) +"";
			reCSS += First_c.replace(k2,"-moz-"+k2) +"";
			reCSS += First_c.replace(k2,"-ms-"+k2) +"";
			reCSS += First_c.replace(k2,"-o-"+k2) +"";
		}
		return reCSS;
	} , //css3_hack end
	css3_set:function(	JQobj , key , css	){ //任何属性丢过来都会自动加上浏览器前缀
		//用例： css3_set(	obj , "animation" , "HJL_IMG_zoom_out 0.4s forwards"	)
		//用例： css3_set(	obj , "transition" , "all 0.4s"	)
		//用例： css3_set(	obj , "transform" , "rotate(360deg) scale(4)"	)
		var json = '{ "'+key+'":"'+css+'","-webkit-'+key+'":"'+css+'","-moz-'+key+'":"'+css+'","-ms-'+key+'":"'+css+'","-o-'+key+'":"'+css+'" }'
		//alert(	json )
		JQobj.css( eval('(' + json + ')')   );
		
	},
	

};

///


/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});




//   jQuery Mousewheel 3.1.13  END==========================


$(document).ready(function(e) {
    HJL.init();//初始化滚动插件
	HJL.E.zoom.init(); //初始化图片滚动放大插件
	
	//绑定手机滑动事件
	delete Hammer.defaults.cssProps.userSelect; //恢复框选
	var DOC = document.body;
	var EML = new Hammer(DOC);
	EML.get('pan').set({ direction: Hammer.DIRECTION_ALL }); //监听全部垂直拖放
	EML.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });	 //监听全部垂直滑动
	EML.on('swipe', function(ev) {
		if( ev.deltaY < -125 && ev.pointerType != "mouse"){	HJL.wheel(ev, -1, 0, 0);	}
		if( ev.deltaY > 125 && ev.pointerType != "mouse"){	HJL.wheel(ev, 1, 0, 0);	}
		console.log(	ev	);
	});
		
});

$(window).resize(function(){
	HJL.init();//窗口重设时初始化
	HJL.E.zoom.init(); //初始化图片滚动放大插件
});

$(window).mousewheel(function(e, n, x, y) { //检测鼠标滚轮滚动
	HJL.wheel(e, n, x, y);
	
	
});


//HJL_ANIMATE END==========================================
 




