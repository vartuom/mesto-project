//------------------------------ imports ----------------------------//
import '../pages/index.css';

import {enableValidation, resetValidationErrors} from "./validate.js";
import {openPopup, closePopup} from "./modal.js";
import {generateCard, fillCardsContainer} from "./card.js";
import {content} from "./utils.js";
import {validationConfig} from "./utils.js";

//cards container
const cardsContainerElement = content.querySelector('.cards__list');

//text fields
const userNameElement = content.querySelector('.profile__user-name');
const userJobElement = content.querySelector('.profile__user-job');

//popups
const addPopupElement = content.querySelector('.popup_type_add');
const editPopupElement = content.querySelector('.popup_type_edit');

//buttons
const editButtonElement = content.querySelector('.profile__edit-button');
const addButtonElement = content.querySelector('.profile__add-button');

//forms
const editFormElement = content.querySelector('.popup_type_edit .form');
const addFormElement = content.querySelector('.popup_type_add .form');


editButtonElement.addEventListener('click', () => {
  const form = document.forms.editForm;
  form.elements.userName.value = userNameElement.textContent;
  form.elements.userInfo.value = userJobElement.textContent;
  openPopup(editPopupElement);
  resetValidationErrors(validationConfig, editPopupElement);
});

addButtonElement.addEventListener('click', function () {
  addFormElement.reset();
  openPopup(addPopupElement);
  resetValidationErrors(validationConfig, addPopupElement);
});

editFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userNameElement.textContent = evt.target.elements.userName.value;
  userJobElement.textContent = evt.target.elements.userInfo.value;
  closePopup(editPopupElement);
});

addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardName = evt.target.elements.cardName.value;
  const cardUrl = evt.target.elements.cardUrl.value;
  cardsContainerElement.prepend(generateCard(cardName, cardUrl, cardName));
  closePopup(addPopupElement);
});

//------------------------------ execution ----------------------------//
//initial cards fill on page load
fillCardsContainer(cardsContainerElement);
enableValidation(validationConfig);
