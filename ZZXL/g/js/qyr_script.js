$(document).ready(function(){
   
	//文档准备完毕的时候，会执行这里的代码
    //var a = $("#QYR_footer_right_ul");
     
    $("#QYR_footer_right_ul li").hover(//添加绑定：鼠标经过


        function(){  //经过时执行这个函数

             //设置高亮
        	$("#QYR_footer_right_ul li").removeClass('on')//先把所有高亮样式删除，再添加
        	$(this).addClass('on');//执行函数时会执行这行代码
        	//这行代码会给this（被鼠标经过的对象）添加一个class 名字是on

            //隐藏和显示对应的板块（UL标签）
            //1：先获得鼠标经过了第几个li标签
            var i=$(this).index();//声明一个变量i,给它赋值

            //变量的作用：放到内存里面，可以重复使用
            console.log(i);//在控制台输出这个索引看看是多少 

          
           $('.QYR_middle_ul').hide();
            $('.QYR_middle_ul').eq(i).show();//show=display:block,hide()=display:none;
            //选中了所有的class='bottom'的标签，筛选(eq方法)出第i个
            //i就是上面获得的索引，并且让它显示出来(show方法)

        }

    	);


     
});