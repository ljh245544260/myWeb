$(document).ready(function($){


/*============变量定义区============*/
	var ljh_picChangeMain = $('#ljh_picChangeMain li') ;
	/*图片部分的li*/
	var ljh_btn = $('#ljh_btn li');
	/*下横线部分的li*/
	
	var picZindex = 0;//堆叠层数
	var RunTime = 0;//执行次数
	var pic;
	var pointer;//鼠标点击到下部分时候的变量

/*============变量定义区============*/



/*-------------主体函数代码区-------------*/
	
	ljh_picChangeMain.hide();
	ljh_picChangeMain.eq(0).show();
	PicChange_interval();
	
	ljh_btn.unbind().click(function(){
		clearInterval(pic);
		pointer = $(this).index();
		RunTime = pointer - 1;
		picChange('RIGHT');
		PicChange_interval();
	});

/*-------------主体函数代码区-------------*/



/*============函数定义区============*/
	function PicChange_interval(){
			pic = setInterval(function(){
			picChange('RIGHT');
			console.log(RunTime);
		},1000
		);
	}








	/*图片正常向右运行函数*/

	function picChange(type){
		//console.log(type);
		picZindex += 1;
		if(type == 'RIGHT')
		{
			RunTime +=1;
			if(RunTime>3)
			{
				RunTime=0;
			}
		}

		var Picruntime = ljh_picChangeMain.eq(RunTime);
		Picruntime.css({"z-index":picZindex});
		Picruntime.hide().fadeIn();

		ljh_btn.removeClass('ljh_btnOn');
		ljh_btn.eq(RunTime).addClass('ljh_btnOn');
	}






	/*图片正常向右运行函数（计时器）*/
	

/*============函数定义区============*/







});