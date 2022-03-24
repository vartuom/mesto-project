//popup state manage functions
import {resetValidationErrors} from "./validate.js";

function openPopup(element) {
  element.classList.add('popup_opened');
  handleCloseButton(element);
  const innerFormElement = element.querySelector('.form');
  if (!element.classList.contains('popup_type_preview')) {
    resetValidationErrors(innerFormElement);
  }
}
function closePopup() {
  const currentPopup = document.querySelector('.popup_opened');
  if (currentPopup) {
    currentPopup.classList.remove('popup_opened');
  }
}

function handleCloseButton (currentPopup) {
  const closeButtonElement = currentPopup.querySelector('.popup__close-button');
  closeButtonElement.addEventListener('click', closePopup)
}

export {openPopup, closePopup};

/*
function closePopup(element) {
  element.classList.remove('popup_opened');
}*/
