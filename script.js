const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

// click for all cards

function flipCard(e) {
  let clickedCard = e.target; // get user click on card

  if (clickedCard !== cardOne && !disableDeck) {
    clickedCard.classList.add("flip");

    if (!cardOne) {
      // return cardOne value to clickedCard
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src,
      cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    // two cards matched
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = ""; //setting both card value to blank
    return (disableDeck = false);
  }

  // if two card not matched
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = ""; //setting both card value to blank
    disableDeck = false;
  }, 1200);
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
