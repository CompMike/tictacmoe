//Create a javascript tic tac toe game
$( document ).ready(function() {
//find the current box checked
//compare it to the other boxes
//create a 9x9 board with a position selected to start the game.
//Watch for a position to be selected
//When it's selected add in the computers selection
//loop the above until somone wins or there's a tie
var board = ["###",
						 "###",
						 "###"];
	function renderBoard() {
		//set the first X on the board
		var startingPos = Math.floor(Math.random()*9);
		console.log(startingPos);
		//loop through 9 tiles until the board is complete
		for (var i = 0; i < 9; i++) {
			console.log(i);
			var box = "box" + i;
			//Add the startingPos in one of the squares
			if (startingPos === i) {
				var box = "box" + i;
				$("div.board").append("<label class='option' for='box" + i + "' id='box" + i + "'>X</label><input type='checkbox' id='box" + i + "'>");
			} else {
				$("div.board").append("<label class='option' for='box" + i + "' id='box" + i + "'></label><input type='checkbox' id='box" + i + "'>");
			}
			//when a box is clicked add a check in another random square unselected square
		};
	}

$("#newgame").on("click", function(){
	console.log("click");
});

	renderBoard();
});
