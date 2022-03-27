//popup state manage functions
import {resetValidationErrors} from "./validate.js";
import {content} from "./utils.js";
import {validationConfig} from "./utils.js";
let activePopup;

const modalContainer = content.querySelector('.popup_type_preview');
const imageElement = modalContainer.querySelector('.preview__image');
const captionElement = modalContainer.querySelector('.preview__caption');

function openPopup(element) {
  activePopup = element;
  document.addEventListener('keydown', handleEscapeKeypress);
  element.classList.add('popup_opened');
  handleCloseButton(element);
  const innerFormElement = element.querySelector('.form');
  if (!element.classList.contains('popup_type_preview')) {
    resetValidationErrors(validationConfig, innerFormElement);
  }
}

function closePopup() {
    activePopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscapeKeypress);
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

function handleEscapeKeypress(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

export {openPopup, closePopup, handlePreview};
