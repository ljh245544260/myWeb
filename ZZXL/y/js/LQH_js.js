$(document).ready(function() {
	//=======返回顶部========
	$('#lqh_fr').click(function(){
				$('body').animate({'scrollTop':0},500 );  //动画的方式滚动回到顶部
			});
});

//============表单验证========
	function lqh_check_form(){
	var user_input =$('.lqh_name');
	if( user_input.val()=='' ){
		alert('请输入用户名');
		return false;
	}

	var phone = /^1\d{10}$|^(0\d{2,3}-?|\(0\d{2,3}\))?[1-9]\d{4,7}(-\d{1,8})?$/;
	var phone_input =$('.lqh_tel');
	if( !phone.test( (phone_input).val() )){
		alert('请输入正确位数的电话号码，如6、8、11位');
		return false;
	}

	var lqh_sevice =$('.lqh_sevice');
	var lqh_xq =$('.lqh_xq');
	if( lqh_sevice.val()=='' || lqh_xq.val()=='' ){
		alert('请您填写完整信息');
		return false;
	}
}
