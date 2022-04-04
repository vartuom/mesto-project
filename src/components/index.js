//------------------------------ imports ----------------------------//
import '../pages/index.css';

import {enableValidation, resetValidationErrors} from "./validate.js";
import {openPopup, closePopup} from "./modal.js";
import {generateCard, fillCardsContainer} from "./card.js";
import {content} from "./utils.js";
import {validationConfig} from "./utils.js";
import {getUserInfo, setUserInfo, addCard, setAvatar} from "./api";

//------------------------------ var\const ----------------------------//

//cards container
const cardsContainerElement = content.querySelector('.cards__list');

//text fields
const userNameElement = content.querySelector('.profile__user-name');
const userJobElement = content.querySelector('.profile__user-job');
const userAvatarElement = content.querySelector('.profile__avatar');

//popups
const addPopupElement = content.querySelector('.popup_type_add');
const editPopupElement = content.querySelector('.popup_type_edit');
const editAvatarPopupElement = content.querySelector('.popup_type_avatar');

//buttons
const editButtonElement = content.querySelector('.profile__edit-button');
const addButtonElement = content.querySelector('.profile__add-button');
const editAvatarButtonElement = content.querySelector('.profile__avatar-overlay');

//forms
const editFormElement = content.querySelector('.popup_type_edit .form');
const addFormElement = content.querySelector('.popup_type_add .form');
const editAvatarFormElement = content.querySelector('.popup_type_avatar .form');

//------------------------------ listeners ----------------------------//

editButtonElement.addEventListener('click', () => {
  const form = document.forms.editForm;
  form.elements.submitButton.innerText = 'Сохранить';
  form.elements.userName.value = userNameElement.textContent;
  form.elements.userInfo.value = userJobElement.textContent;
  openPopup(editPopupElement);
  resetValidationErrors(validationConfig, editPopupElement);
});

addButtonElement.addEventListener('click', function () {
  addFormElement.reset();
  addFormElement.elements.submitButton.innerText = 'Сохранить';
  openPopup(addPopupElement);
  resetValidationErrors(validationConfig, addPopupElement);
});

editAvatarButtonElement.addEventListener('click', function () {
  editAvatarFormElement.reset();
  addFormElement.elements.submitButton.innerText = 'Сохранить';
  openPopup(editAvatarPopupElement);
  resetValidationErrors(validationConfig, editAvatarPopupElement);
});

editFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  editFormElement.elements.submitButton.innerText = 'Сохранение...';
  setUserInfo(evt.target.elements.userName.value, evt.target.elements.userInfo.value)
    .then((res) => {
      userNameElement.textContent = res.name;
      userJobElement.textContent = res.about;
    })
    .catch((err) => console.log(err))
    .finally(() => {
      editFormElement.elements.submitButton.innerText = 'Готово!';
      closePopup(editPopupElement);
  });
});

addFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addFormElement.elements.submitButton.innerText = 'Сохранение...';
  addCard(evt.target.elements.cardName.value, evt.target.elements.cardUrl.value)
    .then((res) => {
      cardsContainerElement.prepend(generateCard(res.name, res.link, res.name, res.likes.length, true, res._id, false));
    })
    .catch((err) => console.log(err))
    .finally(() => {
      addFormElement.elements.submitButton.innerText = 'Готово!';
      closePopup(addPopupElement);
    });
});

editAvatarFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  editAvatarFormElement.elements.submitButton.innerText = 'Сохранение...';
  setAvatar(evt.target.elements.avatarUrl.value)
    .then((res) => {
      userAvatarElement.src = res.avatar;
    })
    .catch((err) => console.log(err))
    .finally(() => {
      editAvatarFormElement.elements.submitButton.innerText = 'Готово!';
      closePopup(editAvatarPopupElement);
    });
});

//------------------------------ onLoad ----------------------------//
getUserInfo()
  .then((res) => {
    userNameElement.textContent = res.name;
    userJobElement.textContent = res.about;
    userAvatarElement.src = res.avatar;
    fillCardsContainer(cardsContainerElement, res._id);
  })
  .catch((err) => console.log(err));

enableValidation(validationConfig);
