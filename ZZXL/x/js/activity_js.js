function sjs(a,b){  //随机函数
	return parseInt(Math.random()*(b+1-a)+a)
}
//奖品数组
var choujiang=[
	'二等奖',
	'三等奖',
	'二等奖',
	'一等奖',
	'三等奖',
	'一等奖'
]
var t;
var i;
	//=======关闭============
	$('#lqh_close').click(function(){

		$('#lqh_content').hide();

	});
	$('#zj_close').click(function(){

		$('#lqh_zj').hide();

	});
	//=====点击抽奖===========
	$('#lqh_img').click(function(){
		$('#lqh_content').show();
	});

	$('#lqh_button').click(function(){
		
		var lqh_user_input =$('#lqh_username');
		var lqh_phone_input =$('#lqh_phone');
		
		if( !lqh_user_input.val()=='' && !lqh_phone_input.val()=='')
		{
			if(lqh_user_input.val().length<3){return false; }
			if(!lqh_phone_input.val().lenght==11){ return false; }
			lqh_start();
			$('#lqh_content').hide();
			setTimeout(function(){
				$('#lqh_zj').show();
			},2000);
			
		}
		
		
	});
	//=======关闭中奖信息============
	$('#lqh_btn').click(function(){
		$('#lqh_zj').hide();
	});

 //---抽奖的函数------
	function lqh_start(){
		var n=sjs(0,360);
		var ge=6;
		var du=360/6;	
		t=Math.ceil((n)/360*ge);//哪一格1-12
		var s=t*du;
		$('#style1').remove();
		var sty=$('<style id="style1"/>');
		sty.html("@keyframes ggg{0%{transform:rotate(0deg);}100%{transform: rotate("+(s+720)+"deg);}}");
		$('head').append(sty);
		$('#lqh_img').css({"animation":""});		
		 setTimeout(function(){	
			$('#lqh_img').css({'animation':'ggg 2s ease-out forwards'});
		 	setTimeout(function(){
				$('#dj').html(choujiang[t]);
				console.log(t)
			},500);
		 },20)

	}
//======表单验证================
function lqh_check_form(){

   //--------用户名-------------
	var lqh_user_input =$('#lqh_username');
	if( lqh_user_input.val()=='' ){
		alert('请输入用户名');
		lqh_user_input.focus();
		return false;
	}
	if( lqh_user_input.val().length<3 ){
		alert('用户名至少输入3个字符');
		return false;
	}
	var lqh_phone = /^1\d{10}$|^(0\d{2,3}-?|\(0\d{2,3}\))?[1-9]\d{4,7}(-\d{1,8})?$/;
	var lqh_phone_input =$('#lqh_phone');
	if( !lqh_phone.test( (lqh_phone_input).val() )){
		alert('请输入正确的手机号码');
		return false;
	}
	return false;  //阻止表单提交
}










