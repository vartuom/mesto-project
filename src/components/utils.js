//page
export const content = document.querySelector('.page');

import karachaevskImage from '../images/card-karachaevsk.png';
import elbrusImage from '../images/card-elbrus.png';
import dombaiImage from '../images/card-dombai.png';

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

/*export const cardSamples = [
  {
    header: 'Карачаевск',
    img: karachaevskImage,
    desc: 'Фото старого здания на фоне гор'
  },
  {
    header: 'Гора Эльбрус',
    img: elbrusImage,
    desc: 'Фото горной вершины за линией горизонта'
  },
  {
    header: 'Домбай',
    img: dombaiImage,
    desc: 'Фото горной вершины в облаках'
  },
  {
    header: 'Карачаево-Черкессия',
    img: karachaevskImage,
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
];*/

