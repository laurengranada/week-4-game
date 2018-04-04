//GLOBAL VARIABLES// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//setting variables
//crystal values	
var crystal = {
	red:{
		name: "red",
		value: 0
	},
	blue:{
		name: "blue",
		value: 0
	},
	pink:{
		name: "pink",
		value: 0
 	},
	sky:{
		name: "sky",
		value: 0
	},
};

//scores
var score = 0;
var random = 0;

//win/loss count
var wins = 0;
var losses = 0;

//allow html to show variables



//FUNCTIONS// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//function to call on for randomizing selected values
var randomize = function(min, max){
	return Math.floor(Math.random() * (max - min)+1) + min;
}

// starts new game
function newGame(){
	//reset score
	 score = 0;
	//set new random number
	 random = randomize(19, 120);

	//set values for crystals
	crystal.red.value   = randomize(1, 12);
	crystal.blue.value   = randomize(1, 12);
	crystal.pink.value   = randomize(1, 12);
	crystal.sky.value   = randomize(1, 12);

	//changes HTML
	$("#matchNumber").html(random);
	$("#score").html(score);
};

//compare and update HTML
function compare(){
	if (score > random){
		losses++;
		$("#losses").html(losses);
		$("#comment").html("You lost");
		//restarts game
		newGame();
	}else if(score == random){
		wins++;
		$("#wins").html(wins);
		$("#comment").html("You won");
		//restarts game
		newGame();
		};
};

var addValues = function(crystal){
	score = score + crystal.value;

	//changes HTML
	$("#score").html(score);

	//compare score to random number
	compare();
};
//MAIN PROCESS// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//starts game
newGame();

$("#red").click(function(){
	addValues(crystal.red);
});

$("#blue").click(function(){
	addValues(crystal.blue);
});

$("#pink").click(function(){
	addValues(crystal.pink);
});

$("#sky").click(function(){
	addValues(crystal.sky);
});




