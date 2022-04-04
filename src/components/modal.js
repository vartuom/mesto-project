//popup state manage functions
import {content} from "./constants.js";

const popups = document.querySelectorAll('.popup')
const modalContainer = content.querySelector('.popup_type_preview');
const imageElement = modalContainer.querySelector('.preview__image');
const captionElement = modalContainer.querySelector('.preview__caption');

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})

function openPopup(element) {
  document.addEventListener('keydown', handleEscapeKeypress);
  element.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscapeKeypress);
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
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export {openPopup, closePopup, handlePreview};
