//Create a javascript tic tac toe game
$( document ).ready(function() {
//find the current box checked
//compare it to the other boxes
//create a 9x9 board with a position selected to start the game.
//Watch for a position to be selected
//When it's selected add in the computers selection
//loop the above until somone wins or there's a tie

	function render() {
		var startingBlock = Math.floor(Math.random()*8);
		console.log(startingBlock);
		for (var i = 0; i < 9; i++) {
			$("div.board").append("<div class='option' id='box" + i + "'></div>");
			console.log(i);
		};
	}



$("#newgame").on("click", function(){
	console.log("click");
});

	render();
});
