TODO:

1.) DONE: Need to prevent multiple clicks on a block, this causes the comp to add x even when a player hasn't selected a blank box.
2.) Need to stop game once one player wins and refresh board.
3.) Need to display tie when no one wins.
4.) Can click on an x and it will change it to an o. Allowing the player to win.


Current Issue(2):
What's the issue: Need to stop game once one player wins and refresh board.
Why is this happening?: Because the game still accepts clicks once someone wins.
How do you want it to work?: When someone wins, it shows the message, then on another click the game restarts.
How can we fix it?:
1.) In the checkBoards function if someone wins, listen for a click and re-run renderBoards once that happens.
