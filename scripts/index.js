const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const deleteButton = cardList.querySelector(".card__delete-button");

function removeCard() {
  cardItem = cardList.querySelector(".card");
  cardItem.remove();
}

function addCard(cardName, cardImage) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  cardElement.querySelector(".card__image").src = cardImage;
  cardElement.querySelector(".card__title").textContent = cardName;
  cardList.append(cardElement);
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", removeCard);
}

function showCards() {
  initialCards.forEach((item) => {
    addCard(item.name, item.link);
  });
}

showCards();
