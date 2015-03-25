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
					console.log("in the array");
					count++;
				};
			};
			if(count > 2) {
				$(".outcomeBlock").prepend(message).addClass("show");
				console.log('count == ' + count);
				return true;
			}
		};
	}
	//new move function
var newmove = function(player) {
		var $this = $(this);
	if(player === "user") {
		console.log("$this = " + $this);
		//if already selected don't add selection and run computer move
		if (!$this.hasClass("selected") || !$this.hasClass("x")) {
			//add current selection to board
			var current = $this.get(0).id;
			console.log("this is current"+ current);
			if($.inArray(current,completeBoard) != -1) {
				alert("can't move");
			} else {
				$this.addClass("o").addClass("selected");
				playerBoard.push(current);
				completeBoard.push(current);
				var gameover = checkBoards(playerBoard,winningBoards,"You Win!");
				if(!gameover) {
					newmove("comp");
				}
			}
			console.log("computer board == " + compBoard);
			console.log("player board == " + playerBoard);
		};
	}
	if(player === "comp") {
		var availableSpaces = [];
		var wholeBoard = ["box0","box1","box2","box3","box4","box5","box6","box7","box8"];
		for (var i = 0; i < wholeBoard.length; i++) {
			if ($.inArray(wholeBoard[i],completeBoard) === -1){
				availableSpaces.push(wholeBoard[i]);
			}
		};
		console.log('availableSpaces == ' + availableSpaces);
		var nextMove = availableSpaces[Math.floor(Math.random()*availableSpaces.length)];
		$("#"+nextMove).addClass("x");
		console.log('computers move ==' + nextMove);
		//add computers move to board
		if(completeBoard.length === 8) {
			if(availableSpaces.length === 1) {
				$(".outcomeBlock").prepend("It's a Tie.").addClass("show");
			}
		}
	}
}

	//when a box is clicked begin move function
	$(".option").on("click", function () {
		newmove("user");
	});
}//end of renderBoard function

//function to restart game when someone wins
var restartGame = function() {
	$("div.board").empty();
	$(".outcomeBlock").removeClass("show").empty();
	var playerBoard = [];
	var compBoard = [];
	var completeBoard = [];
	renderBoard();
}
$(".outcomeBlock").on("click",function(){
	location.reload();
});
renderBoard();
});
