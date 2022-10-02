const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

// click for all cards

function flipCard(e) {
  let clickedCard = e.target; // get user click on card

  if (clickedCard !== cardOne) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      // return cardOne value to clickedCard
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector("img").src,
      cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    // two cards matched
    return console.log("Card matched");
  }

  // if two card not matched
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
