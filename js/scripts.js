//Create a javascript tic tac toe game
$( document ).ready(function() {
	var playerBoard = [];
	var compBoard = [];
	var completeBoard = [];
	//To win the board must contain the combinations below
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
			//Add the startingPos in one of the squares
			if (startingPos === i) {
				$("div.board").append("<label class='option x selected' for='" + box + "' id='" + box +"'></label><input type='radio' id='" + box + "'>");
			} else {
				$("div.board").append("<label class='option' for='" + box + "' id='" + box +"'></label><input type='radio' id='" + box + "'>");
			}
		};
	//functions to check state of boards
	var checkBoards = function(playerBoardState,winCondition) {
		// console.log(playerBoardState);
		for (var i = 0; i < winCondition.length; i++) {
			console.log(winCondition[i]);
			var count = 0;
			for (var j = 0; j < winCondition[i].length; j++) {
				console.log(playerBoard[j] + "===" + winCondition[i][j]);
				if ($.inArray(playerBoard[j],winCondition[i]) != -1) {
					console.log("in the array");
					count++;
				} ;
				// if (winCondition[i][j] === playerBoard[j]) {
				// 	count++;
				// 	console.log(count);
				// };
			};
			if(count > 2) {
				console.log("win");
			}
		};

	}
	//function to check the status of the board and break if someone wins
	var checkStatus = function() {
		// for (var i = winningBoards.length - 1; i >= 0; i--) {
		// 	if (_.contains(winningBoards[i],playerBoard)) {
		// 		console.log("yes");
		// 	};
		// };
		checkBoards(compBoard,winningBoards);
	};
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
		console.log("playerboard [" + playerBoard + "]");
		console.log("computerboard [" + compBoard + "]");
		console.log("completeboard [" + completeBoard + "]");
		checkStatus();
	}
	//when a box is clicked begin move function
	$(".option").on("click", move);

}

$("#newgame").on("click", function(){

});

renderBoard();
});
