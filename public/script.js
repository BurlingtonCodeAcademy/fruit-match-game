const pictureArray = [
  "./assets/001-orange.svg",
  "./assets/001-orange.svg",
  "./assets/002-pear.svg",
  "./assets/002-pear.svg",
  "./assets/003-melon.svg",
  "./assets/003-melon.svg",
  "./assets/004-peanut.svg",
  "./assets/004-peanut.svg",
  "./assets/005-banana.svg",
  "./assets/005-banana.svg",
  "./assets/013-berry.svg",
  "./assets/013-berry.svg",
  "./assets/007-kiwi.svg",
  "./assets/007-kiwi.svg",
  "./assets/008-pineapple.svg",
  "./assets/008-pineapple.svg",
];

//target all elements with the class "cards"
//target the replay button
//target the modal dialog box
let clickedCards = [];
let winArray = [];

playAgain.addEventListener("click", hideModal);
startGame(pictureArray);

function startGame(pictures) {
  // start the game
  // shuffle the cards
  // setup click event listener
}

function shuffleArray(oldCards) {
  // accept a deck of cards
  // copy the deck of cards
  // shuffle the new deck
  // return the shuffled cards
}

function selectCard(event) {
  // accept a click event
  // append the 'clicked' class to the target
  // push the target to the 'clickedCards' winArray
  // when the 'clickedCards' length is 2 compare the cards
  // if the cards are same
  //   append the 'success' class to the cards
  //   otherwise apply the 'failure' class to the cards
  // hide the cards after 1.5 seconds by calling 'hideCards'
}

function hideCards() {
  // for all the clicked cards
  // make their classes be 'card' and 'card-hidden'
  // make their parent node class be 'container'
  // set the clickedCards array to empty
}

function checkWin() {
  // add 'match' to the winArray
  // check if the length of the winArray is 8
  // if the length is 8 then call showModal
  // set the clickedCards array to be empty
}

function clearBoard() {
  // set the clickedCards array to be empty
  // set the winArray to be empty
  // for every card
  //   make the cards class list be 'card' and 'card-hidden'
  //   make the card parent node class list be 'container
  // set the clickedCards array to be emtpy
  // call the startGame function with the array of pictures
}

function hideModal(event) {
  // set the modal visibility to 'hidden'
  // call the clearBoard function
}

function showModal(event) {
  // set the modal visibility to 'visible'
}
