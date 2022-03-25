import {content, cardSamples} from "./utils.js";
import {handlePreview} from "./modal.js";

const cardTemplateElement = content.querySelector('#card-template').content;

//initial fill cards container by N random cards
function fillCardsContainer(containerElement, numCards = 6) {
  for (let i = 0; i < numCards; i++) {
    const randomCardIndex = Math.floor(Math.random() * cardSamples.length);
    const name = cardSamples[randomCardIndex].header;
    const src = cardSamples[randomCardIndex].img;
    const desc = cardSamples[randomCardIndex].desc;
    containerElement.prepend(generateCard(name, src, desc));
  }
}

//card gen function
function generateCard(name, src, alt) {
  const cardElement = cardTemplateElement.querySelector('.card').cloneNode(true);
  const cardPhotoElement = cardElement.querySelector('.card__photo');
  cardPhotoElement.src = src;
  cardPhotoElement.alt = alt;
  cardElement.querySelector('.card__caption').textContent = name;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardElement.querySelector('.card__bin-icon').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__photo').addEventListener('click', function () {
    handlePreview(name, src, alt);
  });
  return cardElement
}

export {generateCard, fillCardsContainer};
