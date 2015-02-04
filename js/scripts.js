//Create a javascript tic tac toe game
$( document ).ready(function() {
	//set up player, computer and complete boards
	var playerBoard = [];
	var compBoard = [];
	var completeBoard = [];
	//to win the board must contain the combinations below
	var winningBoards = [["box0","box1","box2"],
											["box3","box4","box5"],
											["box6","box7","box8"],
											["box0","box4","box8"],
											["box2","box4","box6"],
											["box0","box3","box6"],
											["box1","box4","box7"],
											["box2","box5","box8"]];
	var renderBoard = function() {
		//set the first X on the board
		var startingPos = Math.floor(Math.random()*9);
		//add startingPos to boards
		compBoard.push("box"+startingPos);
		completeBoard.push("box"+startingPos);
		//loop through 9 tiles until the board is complete
		for (var i = 0; i < 9; i++) {
			var box = "box" + i;
			if (startingPos === i) {
				//Add the startingPos in one of the squares
				$("div.board").append("<label class='option x selected' for='" + box + "' id='" + box +"'></label><input type='radio' id='" + box + "'>");
			} else {
				$("div.board").append("<label class='option' for='" + box + "' id='" + box +"'></label><input type='radio' id='" + box + "'>");
			}
		};
	//functions to check state of boards
	var checkBoards = function(playerBoardState,winCondition,message) {
		// console.log(playerBoardState);
		for (var i = 0; i < winCondition.length; i++) {
			// console.log(winCondition[i]);
			var count = 0;
			for (var j = 0; j < winCondition[i].length; j++) {
				// console.log("playerboard == " + playerBoardState[j] + " and wincondition == " + winCondition[i][j]);
				if ($.inArray(winCondition[i][j],playerBoardState) != -1) {
					// console.log("in the array");
					count++;
				} ;
			};
			if(count > 2) {
				console.log(message);
				$(".outcomeBlock").append(message).addClass("show");
				return true;
			}
		};
	}

	var compMove = function() {
		var availableSpaces = [];

		var wholeBoard = ["box0","box1","box2","box3","box4","box5","box6","box7","box8"];

		console.log(wholeBoard);
		console.log(completeBoard);
		for (var i = 0; i < wholeBoard.length; i++) {
			// when i = 0, wholeBoard[i] = "box0", completeBoard[i] = "box1"
			if ($.inArray(wholeBoard[i],completeBoard) === -1){
				availableSpaces.push(wholeBoard[i]);
			}
		};
		var nextMove = availableSpaces[Math.floor(Math.random()*availableSpaces.length)];
		// console.log("nextMove == " + nextMove);
		$("#"+nextMove).addClass("x");
		// console.log("box == #box"+nextMove);
		//add computers move to board
		completeBoard.push(nextMove);
		compBoard.push(nextMove);
		//check status of computer board and show winnder
		checkBoards(compBoard,winningBoards,"Computer Wins :(");
		//log complete board
		// console.log("completeBoard == " + completeBoard);
		// console.log("availableSpaces == " + availableSpaces);

	// console.log("movesleft equals: " + availableSpaces);
	}

	//function for each move
	var move = function() {
		var $this = $(this);
			//if already selected don't add selection
		if (!$this.hasClass("selected")) {
			$this.addClass("o").addClass("selected");
		};
		//add current selection to board
		var current = $this.get(0).id;
		playerBoard.push(current);
		completeBoard.push(current);
		// console.log("playerboard [" + playerBoard + "]");
		// console.log("computerboard [" + compBoard + "]");
		// console.log("completeboard [" + completeBoard + "]");
		checkBoards(playerBoard,winningBoards,"You Win!");
		compMove();
	}
	//when a box is clicked begin move function
	$(".option").on("click", move);
}//end of renderBoard function
renderBoard();
});
