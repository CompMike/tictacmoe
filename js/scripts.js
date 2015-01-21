//Create a javascript tic tac toe game
$( document ).ready(function() {
//find the current box checked
//compare it to the other boxes
//create a 9x9 board with a position selected to start the game.
//Watch for a position to be selected
//When it's selected add in the computers selection
//loop the above until somone wins or there's a tie

	function renderBoard() {
		//set the first X on the board
		var startingPos = Math.floor(Math.random()*9);
		console.log(startingPos);
		//loop through 9 tiles until the board is complete
		for (var i = 0; i < 9; i++) {
			console.log(i);
			//Add the startingPos in one of the squares
			if (startingPos === i) {
				$("div.board").append("<div class='option' id='box" + i + "'>X</div>");
			} else {
				$("div.board").append("<div class='option' id='box" + i + "'></div>");
			}
			//when a box is clicked add a check in another random square unselected square
		};
	}



$("#newgame").on("click", function(){
	console.log("click");
});

	renderBoard();
});
