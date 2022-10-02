const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

// click for all cards

function flipCard(e) {
  let clickedCard = e.target; // get user click on card
  clickedCard.classList.add("flip");
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
