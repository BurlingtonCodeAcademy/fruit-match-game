# Fruit Match Memory Game

This project designed to be a fun introduction to building browser games using HTML, CSS, and JavaScript.

It uses native DOM queries, event listeners, functions and CSS classes to construct a game similar to the classic board game Memory. In this game your task as a player is to click on squares in a grid and match the pictures on each square with the partner picture.

## Getting Started

### Installing Required Tools

#### Git and NodeJS

You will need a web browser, Git, and Node.js to run this application. If you are reading this README on Github then you already have a working web browser, see below for the installation instructions for Git and Node.js

* Install Git - https://git-scm.com/downloads
* Install Node.js - https://nodejs.org/

#### Microsoft Visual Studio Code

In order to edit the files you will need a programmer's text editor, we recommend installing Microsoft Visual Studio Code for starting out. It is a full featured, open source, beginner friendly editor that you can use for many years.

* Install Microsoft Visual Studio Code - https://code.visualstudio.com/Download

### Clone the Project Code

> While within a directory where you store code for various projects.

```
git clone https://github.com/BurlingtonCodeAcademy/fruit-match-game.git
```

### Install the Project Dependencies

> While within a directory where you clones this project's code.

```
cd fruit-match-game
npm install
```

### Start the Project Web Server

```
npm start
```


## Walkthrough Steps

Follow the following steps, written in plain english, to complete the functions within the `./public/script.js` file. 

1. Create an Array of all the pictures in the `./public/assets/` directory.

2. Setup variables to reference elements within the DOM
  - The element with class of `.card`
  - The `button` element
  - The element with an ID of `#modal`

3. Edit the `startGame` function to:
  * start the game
  * shuffle the cards
  * setup click event listener

4. Edit the `shuffleArray` function to:
  * accept a deck of cards
  * copy the deck of cards
  * shuffle the new deck
  * return the shuffled cards

5. Edit the `selectCard` function to:
  * accept a click event
  * append the 'clicked' class to the target
  * push the target to the 'clickedCards' winArray
  * when the 'clickedCards' length is 2 compare the cards
  * if the cards are same
  *   append the 'success' class to the cards
  *   otherwise apply the 'failure' class to the cards
  * hide the cards after 1.5 seconds by calling 'hideCards'

6. Edit the `hideCards` function to:
  * for all the clicked cards
  * make their classes be 'card' and 'card-hidden'
  * make their parent node class be 'container'
  * set the clickedCards array to empty

7. Edit the `checkWin` function to:
  * add 'match' to the winArray
  * check if the length of the winArray is 8
  * if the length is 8 then call showModal
  * set the clickedCards array to be empty

8. Edit the `clearBoard` function to:
  * set the clickedCards array to be empty
  * set the winArray to be empty
  * for every card
  *   make the cards class list be 'card' and 'card-hidden'
  *   make the card parent node class list be 'container
  * set the clickedCards array to be empty
  * call the startGame function with the array of pictures

9. Edit the `hideModal` function to:
  * set the modal visibility to 'hidden'
  * call the clearBoard function

10. Edit the `showModal` function to:
  * set the modal visibility to 'visible'


## Going Further

Take this project further by attempting to add the following features:

1. Keep score by tracking the amount of correct and incorrect guesses.
  - Fewer incorrect guesses and more correct guesses should equal a higher score.
2. Assign a time bonus by keeping track of the total amount of time spent solving the game
  - A shorter winning game should equal a higher score bonus.
3. Allow for the player to input their name or initials before or after the game.
  - Present a message to the user at the start or end of the game that includes their name.
4. Keep track of the previous high scores and tell the player where their score sits relative to the other scores.
