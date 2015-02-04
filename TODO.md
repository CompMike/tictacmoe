TODO:

1.) Need to stop game once one player wins.
2.) Need to display tie when no one wins.
3.) Need to prevent multiple clicks on a block, this causes the comp to add x even when a player hasn't selected blank box.




Current Issue:
What's the issue: Need to check if the computer and the player has won. Show the dialog when one of them wins. Right now, it only checks the player.
Why?: Because I"m only checking the playerboard against the winning boards.
How can we fix it?:
1.) Check both the player board and comp board.
2.) Maybe pass both into the function. Each time it runs, it will check both.
3.) Run it once when on the move is pressed, then run it again when the comp picks it's random spot.
