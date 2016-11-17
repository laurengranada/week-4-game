$(document).ready(function() {


var score = 0;
var wins = 0 ;
var losses = 0;

$("#score").html(score);

var random = Math.floor(Math.random()* ((120-19)+1) + 19);
	$("#random").html(random);

function newGame(){
	var random = Math.floor(Math.random()* ((120-19)+1) + 19);
	$("#random").html(random);
	score = 0;
	$("#score").html(score);
	var red = Math.ceil(Math.random()* 12);
	var blue = Math.ceil(Math.random()* 12);
	var pink = Math.ceil(Math.random()* 12);
	var sky = Math.ceil(Math.random()* 12);

}

var red = Math.ceil(Math.random()* 12);
var blue = Math.ceil(Math.random()* 12);
var pink = Math.ceil(Math.random()* 12);
var sky = Math.ceil(Math.random()* 12);

$("#red").on("click", function(){
	 score = score + red;
	console.log("score" + red);
	$("#score").html(score);
	if (random === score){
		wins++;
		$("#win").html(wins);
		$("#comment").html("You win");
		newGame();
	}else if(score > random){
		losses++;
		$("#loss").html(losses);
		$("#comment").html("You lost");
		newGame();
	}
	
})

$("#blue").on("click", function(){
	 score = score + blue;
	console.log("score" + blue);
	$("#score").html(score);
	if (random === score){
		wins++;
		$("#win").html(wins);
		$("#comment").html("You win");
		newGame();
	}else if(score > random){
		losses++;
		$("#loss").html(losses);
		$("#comment").html("You lost");
		newGame();
	}
})

$("#pink").on("click", function(){
	 score = score + pink;
	console.log("score" + pink);
	$("#score").html(score);
	if (random === score){
		wins++;
		$("#win").html(wins);
		$("#comment").html("You win");
		newGame();
	}else if(score > random){
		losses++;
		$("#loss").html(losses);
		$("#comment").html("You lost");
		newGame();
	}
})

$("#sky").on("click", function(){
	 score = score + sky;
	console.log("score" + sky);
	$("#score").html(score);
	if (random === score){
		wins++;
		$("#win").html(wins);
		$("#comment").html("You win");
		newGame();
	}else if(score > random){
		losses++;
		$("#loss").html(losses);
		$("#comment").html("You lost");
		newGame();
	}
})




});