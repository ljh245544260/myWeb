$(document).ready(function(){
	

	setInterval(function(){
		var S = new Date().getSeconds();//获得当前的秒
		var M = new Date().getMinutes();//获得当前的秒
		var H = new Date().getHours();//获得当前的秒

		// var S = 0
		// var M = 8
		// var H = 0;

		var sec = $('#sec');
		var min = $('#min');
		var hour = $('#hour');
		
		var hourCout = (H*30 + M*6/12);//时针的算法
/*-------------------------时钟算法一------------------------*/
		sec.css({
			// "transform":"rotate("+ (360/60)*S +"deg )",
			"transform":"rotate("+ S*6 +"deg )",

		});
		min.css({
			// "transform":"rotate("+ (360/60)*M +"deg )",
			"transform":"rotate("+ M*6 +"deg )",
		});
		hour.css({
			// "transform":"rotate("+ (360/12)*(H-12) +"deg )",
			"transform":"rotate("+ hourCout +"deg )"
		});
/*-------------------------时钟算法一------------------------*/
/*-------------------------时钟算法二------------------------*/
		// sec.css({
		// 	"transform":"rotate("+ (360/60)*S +"deg )",
		// 	// "transform":"rotate("+ S*6 +"deg )",

		// });
		// min.css({
		// 	"transform":"rotate("+ (360/60)*M +"deg )",
		// 	// "transform":"rotate("+ M*6 +"deg )",
		// });
		// hour.css({
		// 	"transform":"rotate("+ (360/12)*(H-12) +"deg )",
		// 	// "transform":"rotate("+ hourCout +"deg )"
		// });
/*-------------------------时钟算法二------------------------*/
		console.log('S:' + (S*6) + '°' );
		console.log('M:' + (M*6) + '°');
		console.log('H:' + hourCout + '°');
		console.log('现在的时间是'+ H +'点' + M + '分'+ S + '秒');


	},1000);
});