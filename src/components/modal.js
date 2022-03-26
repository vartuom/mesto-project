//popup state manage functions
import {resetValidationErrors} from "./validate.js";
import {content} from "./utils.js";
let activePopup;

const modalContainer = content.querySelector('.popup_type_preview');
const imageElement = modalContainer.querySelector('.preview__image');
const captionElement = modalContainer.querySelector('.preview__caption');

function openPopup(element) {
  activePopup = element;
  element.classList.add('popup_opened');
  handleCloseButton(element);
  const innerFormElement = element.querySelector('.form');
  if (!element.classList.contains('popup_type_preview')) {
    resetValidationErrors(innerFormElement);
  }
}

function closePopup() {
    activePopup.classList.remove('popup_opened');
}

function handleCloseButton (element) {
  const closeButtonElement = element.querySelector('.popup__close-button');
  closeButtonElement.addEventListener('click', closePopup)
}

//preview handling function
function handlePreview (name, src, alt) {
  imageElement.src = src;
  imageElement.alt = alt;
  captionElement.textContent = name;
  openPopup(modalContainer);
}

export {openPopup, closePopup, handlePreview};