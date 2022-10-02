const cards = document.querySelectorAll(".card");

// click for all cards

function flipCard(e) {
  console.log(e.target);
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
