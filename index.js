$(document).ready(function(){
	var option = {
		speed : 10,
		duration : 2,
		// 何番目にストップするかを指定できる
		stopImageNumber : 0,
		// プレイ回数の上限指定
		maxPlayCount: 17
	}

	$('div.roulette').roulette(option);
	$('div.roulette2').roulette(option);
	var $shinsotsu = $('.roulette img');

	// START!
	$('.start').click(function(){
		$('div.roulette').roulette('start');
	});

	// STOP!
	$('.stop').click(function(){
		$('div.roulette').roulette('stop');
		$shinsotsu.slice()
	});


	// START!
	$('.start2').click(function(){
		$('div.roulette2').roulette('start');
	});

	// STOP!
	$('.stop2').click(function(){
		$('div.roulette2').roulette('stop');
	});

});
