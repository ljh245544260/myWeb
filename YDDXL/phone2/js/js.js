


$('#DB').tap(function(){
	console.log('DB');
	$('#DB').css({'border-top':'2px','border-right':'1px','border-bottom':'0px','border-left':'2px','border-color':'#000','border-style':'solid'});
	$('#SB').css({'border-top':'0px','border-right':'0px','border-bottom':'2px','border-left':'0px','border-color':'#000','border-style':'solid'});
	$('.Dvidio').css({'display':'block'});
	$('.Svidio').css({'display':'none'});

});
$('#SB').tap(function(){
	console.log('SB');
	$('#SB').css({'border-top':'2px','border-right':'1px','border-bottom':'0px','border-left':'2px','border-color':'#000','border-style':'solid'});
	$('#DB').css({'border-top':'0px','border-right':'0px','border-bottom':'2px','border-left':'0px','border-color':'#000','border-style':'solid'});
	$('.Dvidio').css({'display':'none'});
	$('.Svidio').css({'display':'block'});
});
$('#DB_vidio').tap(function(){
	console.log('DB_vidio');
	$('#DB_vidio').css({'border-top':'2px','border-right':'1px','border-bottom':'0px','border-left':'2px','border-color':'#000','border-style':'solid'});
	$('#SB_vidio').css({'border-top':'0px','border-right':'0px','border-bottom':'2px','border-left':'0px','border-color':'#000','border-style':'solid'});
	$('.Ddvidio').css({'display':'block'});
	$('.Ssvidio').css({'display':'none'});
});
$('#SB_vidio').tap(function(){
	console.log('SB_vidio');
	$('#SB_vidio').css({'border-top':'2px','border-right':'1px','border-bottom':'0px','border-left':'2px','border-color':'#000','border-style':'solid'});
	$('#DB_vidio').css({'border-top':'0px','border-right':'0px','border-bottom':'2px','border-left':'0px','border-color':'#000','border-style':'solid'});
	$('.Ddvidio').css({'display':'none'});
	$('.Ssvidio').css({'display':'block'});
});


































