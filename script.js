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
const closeEditFormButtonElement = content.querySelector('.popup_type_edit .popup__close-button');
const closeAddFormButtonElement = content.querySelector('.popup_type_add .popup__close-button');
const closePreviewButtonElement = content.querySelector('.popup_type_preview .popup__close-button');

//forms
const editFormElement = content.querySelector('.popup_type_edit .form');
const addFormElement = content.querySelector('.popup_type_add .form');

//inputs
const inputNameElement = editFormElement.querySelector("input[name='input-user-name']");
const inputJobElement = editFormElement.querySelector("input[name='input-user-job']");
const cardNameElement = addFormElement.querySelector("input[name='input-card-name']");
const cardURLElement = addFormElement.querySelector("input[name='input-card-url']");

//------------------------------ functions ----------------------------//

//popup state manage functions
function openPopup(element) {
  element.classList.add('popup_opened');
  const innerFormElement = element.querySelector('.form');
  if (!element.classList.contains('popup_type_preview')) {
    resetValidationErrors(innerFormElement);
  }
}
function closePopup(element) {
  element.classList.remove('popup_opened');
}

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
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  userNameElement.textContent = inputNameElement.value;
  userJobElement.textContent = inputJobElement.value;
  closePopup(editPopupElement);
};

//add form submit handling function
function addFormSubmitHandler(evt) {
  evt.preventDefault();
  cardsContainerElement.prepend(generateCard(cardNameElement.value || 'Без имени', cardURLElement.value || './images/card-placeholder.png', cardNameElement.value || 'Без описания'));
  closePopup(addPopupElement);
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit-button_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('form__submit-button_inactive');
    buttonElement.disabled = false;
  }
}

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
};

const resetValidationErrors = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    checkInputValidity(formElement, inputElement);
  });
}

//------------------------------ listeners ----------------------------//
closeEditFormButtonElement.addEventListener('click', function () {
  closePopup(editPopupElement);
});
editButtonElement.addEventListener('click', function () {
  inputNameElement.value = userNameElement.textContent;
  inputJobElement.value = userJobElement.textContent;
  openPopup(editPopupElement);
});
closeAddFormButtonElement.addEventListener('click', function () {
  closePopup(addPopupElement);
});
addButtonElement.addEventListener('click', function () {
  addFormElement.reset();
  openPopup(addPopupElement);
});
closePreviewButtonElement.addEventListener('click', function () {
  closePopup(previewPopupElement);
});
editFormElement.addEventListener('submit', editFormSubmitHandler);
addFormElement.addEventListener('submit', addFormSubmitHandler);

document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
})

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    if (currentPopup) {
      closePopup(currentPopup);
    }
  }
});
//------------------------------ execution ----------------------------//
//initial cards fill on page load
fillCardsContainer();
enableValidation();
