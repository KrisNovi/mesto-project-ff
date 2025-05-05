const cardList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

const removeCard = (cardElement) => {
  cardElement.remove();
};

const createCard = (cardName, cardImage, removeCard) => {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  cardElement.querySelector(".card__image").src = cardImage;
  cardElement.querySelector(".card__title").textContent = cardName;
  cardElement.querySelector(
    ".card__image"
  ).alt = `Фотография места: ${cardName}`;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    removeCard(cardElement);
  });
  return cardElement;
};

function showCards() {
  initialCards.forEach((item) => {
    cardList.append(createCard(item.name, item.link, removeCard));
  });
}

showCards();
