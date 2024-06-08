This is a memory matching game built 
using 

HTML , 
CSS and Javascript.

To play the game , simply click on a card to flip it over.
 Then , click on another card to try and find a matching pair
 if the cards match , they will remain flipped over . if they do not
 match , they will flip back over , and you will need to try again :)
 there score and timer counting down.

 ----
This start will be developed in the near future.


#steps made the java script :

The code selects all the cards on the game board, the front elements of the cards, the main container element of the game, and the score and timer elements using querySelector and querySelectorAll.

The shuffleImages function shuffles the order of the cards using the order CSS property and a random number generated using Math.random().

The clicking function adds click event listeners to all the cards on the game board. It also adds a show class to all the front elements of the cards and removes it after 2 seconds using setInterval.

The match function checks if two flipped cards match by comparing their dataset.index values. If they match, it updates the score, removes the flip class from the cards, and adds a match class to them. If all the pairs of cards have been matched, the function stops the timer and displays a win or game over message depending on the score.

The startTimer function starts the timer using setInterval, which updates the timer element every second until the time runs out or the player matches all the pairs of cards.

The reset function resets the game board by shuffling the cards, starting the timer, and resetting the score to 0. It also removes the flip and match classes from all the cards.

The code calls the shuffleImages, clicking, and startTimer functions to start the game.

The code adds event listeners to the reset button to call the reset function when clicked.

