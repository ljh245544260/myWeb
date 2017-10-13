$(document).ready(function($){

	/*变量定义区*/
	var ljh_menu_center_li = $('#ljh_menu_center li');
	var ljh_menu_center_a   = $('#ljh_menu_center a');
	var ljh_menu_center_div =  $('#ljh_menu_center div');
	var mouse_i;

	/*变量定义区*/



	/*主体函数区*/

	ljh_menu_center_li.hover( function(event){
	   	mouse_i = $(this).index();
		ljh_menu_center_li.removeClass('menu_on');
		
		ljh_menu_center_div.eq(mouse_i).addClass('menu_on');

		
		ljh_menu_center_a.eq(mouse_i).css({"color":"#F2A45B"});
		ljh_menu_center_li.removeClass('menu_on');
		console.log(mouse_i);
	}, function(event){
	   ljh_menu_center_div.removeClass('menu_on');
	   ljh_menu_center_a.css({"color":"#fff"});
	} );
	/*主体函数区*/



	/*函数定义区*/

	/*函数定义区*/
});

