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

let cards = document.querySelectorAll(".card");
let playAgain = document.querySelector("button");
let modal = document.querySelector("#modal");
let clickedCards = [];
let winArray = [];

playAgain.addEventListener("click", hideModal);
startGame(pictureArray);

function startGame(pictures) {
  let shuffled = shuffleArray(pictures);
  cards.forEach((card) => {
    card.addEventListener("click", selectCard);
    card.src = shuffled.shift();
  });
}

function shuffleArray(oldCards) {
  let newCards = Array.from(oldCards);
  for (var i = newCards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newCards[i];
    newCards[i] = newCards[j];
    newCards[j] = temp;
  }
  return newCards;
}

function selectCard(event) {
  event.target.classList += " clicked";
  clickedCards.push(event.target);
  if (
    clickedCards.length === 2 &&
    clickedCards[0].src === clickedCards[1].src
  ) {
    clickedCards.forEach((card) => {
      card.removeEventListener("click", selectCard);
      card.parentNode.classList += " success";
    });
    setTimeout(checkWin, 200);
  } else if (clickedCards.length === 2) {
    clickedCards.forEach((card) => {
      card.parentNode.classList += " failure";
    });
    setTimeout(hideCards, 1500);
  }
}

function hideCards() {
  clickedCards.forEach((card) => {
    card.classList = "card card-hidden";
    card.parentNode.classList = " container";
    clickedCards = [];
  });
}

function checkWin() {
  winArray.push("match");
  if (winArray.length === 8) {
    showModal();
  }
  clickedCards = [];
}

function clearBoard() {
  clickedCards = [];
  winArray = [];
  cards.forEach((card) => {
    card.classList = "card card-hidden";
    card.parentNode.classList = " container";
    clickedCards = [];
  });
  startGame(pictureArray);
}

// Modal visibility toggle
function hideModal(event) {
  modal.style.visibility = "hidden";
  clearBoard();
}

function showModal(event) {
  modal.style.visibility = "visible";
}
