const cardSamples = [
  {
    header: 'Карачаевск',
    img: './images/card-karachaevsk.png',
    desc: 'Фото старого здания на фоне гор'
  },
  {
    header: 'Гора Эльбрус',
    img: './images/card-elbrus.png',
    desc: 'Фото горной вершины за линией горизонта'
  },
  {
    header: 'Домбай',
    img: './images/card-dombai.png',
    desc: 'Фото горной вершины в облаках'
  },
  {
    header: 'Карачаево-Черкессия',
    img: './images/card-karachaevsk.png',
    desc: 'Фото старого здания на фоне гор'
  },
  {
    header: 'Архыз',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    desc: 'Горная гряда'
  },
  {
    header: 'Челябинская область',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    desc: 'Русло реки между заснеженых крутых берегов'
  },
  {
    header: 'Иваново',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    desc: 'Панельные многоэтажки'
  },
  {
    header: 'Камчатка',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    desc: 'Горная вершина на фоне тундры'
  },
  {
    header: 'Холмогорский район',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    desc: 'Железная дорога между деревьев'
  },
  {
    header: 'Байкал',
    img: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    desc: 'Скалистый берег замерзшего озера'
  }
];

//------------------------------ var\const ----------------------------//

//page
const content = document.querySelector('.page');

//cards
const cardsContainerElement = content.querySelector('.cards__list');
const cardTemplateElement = content.querySelector('#card-template').content;

//text fields
const userNameElement = content.querySelector('.profile__user-name');
const userJobElement = content.querySelector('.profile__user-job');

//popups
const addPopupElement = content.querySelector('.popup_type_add');
const editPopupElement = content.querySelector('.popup_type_edit');
const previewPopupElement = content.querySelector('.popup_type_preview');

const previewImageElement = previewPopupElement.querySelector('.preview__image');
const previewCaptionElement = previewPopupElement.querySelector('.preview__caption');

//buttons
const editButtonElement = content.querySelector('.profile__edit-button');
const addButtonElement = content.querySelector('.profile__add-button');

//forms
const editFormElement = content.querySelector('.popup_type_edit .form');
const addFormElement = content.querySelector('.popup_type_add .form');


//------------------------------ functions ----------------------------//

//initial fill cards container by N random cards
function fillCardsContainer(numCards = 6) {
  for (let i = 0; i < numCards; i++) {
    const randomCardIndex = Math.floor(Math.random() * cardSamples.length);
    const name = cardSamples[randomCardIndex].header;
    const src = cardSamples[randomCardIndex].img;
    const desc = cardSamples[randomCardIndex].desc;
    cardsContainerElement.prepend(generateCard(name, src, desc));
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

//preview handling function
function handlePreview (name, src, alt) {
  previewImageElement.src = src;
  previewCaptionElement.textContent = name;
  previewImageElement.alt = alt;
  openPopup(previewPopupElement);
}



//edit form submit handling function
/*function editFormSubmitHandler(evt) {
  evt.preventDefault();
  userNameElement.textContent = inputNameElement.value;
  userJobElement.textContent = inputJobElement.value;
  closePopup();
};*/

//add form submit handling function
/*function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const cardName = evt.target.elements.cardName.value;
  const cardUrl = evt.target.elements.cardUrl.value;
  cardsContainerElement.prepend(generateCard(cardName, cardUrl, cardName));
  closePopup();
};*/



//------------------------------ listeners ----------------------------//
/*closeEditFormButtonElement.addEventListener('click', function () {
  closePopup();
});
closePreviewButtonElement.addEventListener('click', function () {
  closePopup();
});
closeAddFormButtonElement.addEventListener('click', function () {
  closePopup();
});*/

editButtonElement.addEventListener('click', () => {
  const form = document.forms.editForm;
  form.elements.userName.value = userNameElement.textContent;
  form.elements.userInfo.value = userJobElement.textContent;
  openPopup(editPopupElement);
});

addButtonElement.addEventListener('click', function () {
  addFormElement.reset();
  openPopup(addPopupElement);
});


editFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userNameElement.textContent = evt.target.elements.userName.value;
  userJobElement.textContent = evt.target.elements.userInfo.value;
  closePopup();
});

addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardName = evt.target.elements.cardName.value;
  const cardUrl = evt.target.elements.cardUrl.value;
  cardsContainerElement.prepend(generateCard(cardName, cardUrl, cardName));
  closePopup();
});

document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
  }
})

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    if (currentPopup) {
      closePopup();
    }
  }
});

//------------------------------ imports ----------------------------//
import {enableValidation, resetValidationErrors} from "./validate.js";
import {openPopup, closePopup} from "./modal.js";

//------------------------------ execution ----------------------------//
//initial cards fill on page load
fillCardsContainer();
enableValidation();
