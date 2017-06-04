$(document).ready(function(){
	var option = {
		speed : 10,
		duration : 5,
		stopImageNumber : 0,
	}

	$('div.roulette').roulette(option);	

	// START!
	$('.start').click(function(){
		$('div.roulette').roulette('start');
	});
 
	// STOP!
	$('.stop').click(function(){
		$('div.roulette').roulette('stop');
	});

	$('div.roulette2').roulette(option);	

	// START!
	$('.start2').click(function(){
		$('div.roulette2').roulette('start');
	});
 
	// STOP!
	$('.stop2').click(function(){
		$('div.roulette2').roulette('stop');
	});

});