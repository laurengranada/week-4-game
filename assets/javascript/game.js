$(document).ready(function() {

//setting variables
var score = 0;
var wins = 0 ;
var losses = 0;

//allow html to show variables
$("#score").html(score);

//randomizes the target number player needs to get
var random = Math.floor(Math.random()* ((120-19)+1) + 19);
	$("#matchNumber").html(random);

// starts new game
function newGame(){
	var random = Math.floor(Math.random()* ((120-19)+1) + 19);
	$("#matchNumber").html(random);
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
	compare();

});

$("#blue").on("click", function(){
	 score = score + blue;
	console.log("score" + blue);
	$("#score").html(score);
	compare();

});

$("#pink").on("click", function(){
	 score = score + pink;
	console.log("score" + pink);
	$("#score").html(score);
	compare();

});

$("#sky").on("click", function(){
	 score = score + sky;
	console.log("score" + sky);
	$("#score").html(score);
	compare();

});

function compare(){
	if (random === score){
		wins++;
		$("#wins").html(wins);
		$("#comment").html("You win");
		newGame();
	}else if(score > random){
		losses++;
		$("#losses").html(losses);
		$("#comment").html("You lost");
		newGame();
}

};



});



