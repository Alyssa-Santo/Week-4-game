$(document).ready(function() {

var randomscore = Math.floor((Math.random() * 101) + 19);
$("#score").text(randomscore);

var valuesb = Math.floor((Math.random() * 11) + 1);
var valuesr = Math.floor((Math.random() * 11) + 1);
var valuesg = Math.floor((Math.random() * 11) + 1);
var valuesd = Math.floor((Math.random() * 11) + 1);



$("#bluecrystal").click(function(){
	scorestart = scorestart + valuesb;
	$("#adding").text(scorestart);
	setTimeout(winlose,2000);
});

$("#redcrystal").click(function(){
	scorestart = scorestart + valuesr;
	$("#adding").text(scorestart);
	setTimeout(winlose,2000);
});

$("#greencrystal").click(function(){
	scorestart = scorestart + valuesg;
	$("#adding").text(scorestart);
	setTimeout(winlose,2000);
});

$("#diamondcrystal").click(function(){
	scorestart = scorestart + valuesd;
	$("#adding").text(scorestart);
	setTimeout(winlose,2000);
});


var addwin = 0
$("#win").text(addwin);

var addlose = 0
$("#lose").text(addlose);

var scorestart = 0;
$("#adding").text(scorestart);

function winlose(){
	if (scorestart === randomscore) {
		addwin = addwin + 1;
		$("#win").text(addwin);
		alert("You Win!");
		reset();

	}

	else if (scorestart > randomscore) {
		addlose = addlose + 1;
		$("#lose").text(addlose);
		alert("You Lose!");
		reset();
	} 
	
}

function reset(){

	valuesb = Math.floor((Math.random() * 11) + 1);
	valuesr = Math.floor((Math.random() * 11) + 1);
	valuesg = Math.floor((Math.random() * 11) + 1);
	valuesd = Math.floor((Math.random() * 11) + 1);

	randomscore = Math.floor((Math.random() * 101) + 19);
	$("#score").text(randomscore);
	
	scorestart = 0;
	$("#adding").text(scorestart);

}

});//end document function