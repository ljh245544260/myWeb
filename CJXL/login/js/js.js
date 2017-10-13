

$(document).ready(function(){

	
	



  $('#form1').submit(function(e){
  	var a = $('#password').val();
	var b = $('#passwordTwo').val();

  	console.log( a );
  	console.log( b );
  	
   	if(a!=b){
		alert('两次输入的密码不相同');
		return false;
	}
		


  });




});

















