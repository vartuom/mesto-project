import {content} from "./constants.js";
import {handlePreview} from "./modal.js";
import {getAllCards, deleteCard, addLike, removeLike} from "./api";

const cardTemplateElement = content.querySelector('#card-template').content;

//initial fill cards container by N random cards
function fillCardsContainer(containerElement, userId) {
  getAllCards()
    .then((cardSamples) => {
      for (let i = Object.keys(cardSamples).length-1; i >= 0; i--) {
        const name = cardSamples[i].name;
        const src = cardSamples[i].link;
        const desc = cardSamples[i].name;
        const likesCount = cardSamples[i].likes.length;
        const isOwner = (userId == cardSamples[i].owner._id) ? true : false;
        const isLiked = (cardSamples[i].likes.some((el) => el._id === userId)) ? true : false;
        const cardId = cardSamples[i]._id;
        containerElement.prepend(generateCard(name, src, desc, likesCount, isOwner, cardId, isLiked));
      }
    })
    .catch((err) => console.log(err))
}

//card gen function
function generateCard(name, src, alt, likesCount, isOwner, cardId, isLiked) {
  const cardElement = cardTemplateElement.querySelector('.card').cloneNode(true);
  const cardPhotoElement = cardElement.querySelector('.card__photo');
  const cardLikesCounterElement = cardElement.querySelector('.card__like-counter');
  cardPhotoElement.src = src;
  cardPhotoElement.alt = alt;
  cardLikesCounterElement.innerText = likesCount;
  cardElement.querySelector('.card__caption').textContent = name;
  const cardLikeButton = cardElement.querySelector('.card__like');
  if (isLiked) {
    cardLikeButton.classList.add('card__like_active');
  }
  cardLikeButton.addEventListener('click', function (evt) {
    if (!evt.target.classList.contains('card__like_active')) {
      addLike(cardId)
        .then((res) => {
          cardLikesCounterElement.innerText = res.likes.length;
          evt.target.classList.add('card__like_active');
        })
        .catch((err) => console.log(err));
    } else {
      removeLike(cardId)
        .then((res) => {
          cardLikesCounterElement.innerText = res.likes.length;
          evt.target.classList.remove('card__like_active');
        })
        .catch((err) => console.log(err));
    }
  });
  const cardBinIconElement = cardElement.querySelector('.card__bin-icon');
  if (isOwner) {
    cardBinIconElement.addEventListener('click', function (evt) {
      deleteCard(cardId)
        .then(() => {
          evt.target.closest('.card').remove();
        })
        .catch((err) => console.log(err));
    });
  } else {
    cardBinIconElement.classList.add('card__bin-icon_disabled');
  }
  cardPhotoElement.addEventListener('click', function () {
    handlePreview(name, src, alt);
  });
  return cardElement
}

export {generateCard, fillCardsContainer};
