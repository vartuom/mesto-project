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
const elСardsContainer = content.querySelector('.cards__list');
const elCardTemplate = content.querySelector('#card-template').content;

//text fields
const elUserName = content.querySelector('.profile__user-name');
const elUserJob = content.querySelector('.profile__user-job');

//popups
const elAddPopup = content.querySelector('.popup_type_add');
const elEditPopup = content.querySelector('.popup_type_edit');
const elPreviewPopup = content.querySelector('.popup_type_preview');

const elPreviewImage = elPreviewPopup.querySelector('.preview__image');
const elPreviewCaption = elPreviewPopup.querySelector('.preview__caption');

//buttons
const elEditButton = content.querySelector('.profile__edit-button');
const elAddButton = content.querySelector('.profile__add-button');
const elCloseEditFormButton = content.querySelector('.popup_type_edit .popup__close-button');
const elCloseAddFormButton = content.querySelector('.popup_type_add .popup__close-button');
const elClosePreviewButton = content.querySelector('.popup_type_preview .popup__close-button');

//forms
const elEditForm = content.querySelector('.popup_type_edit .form');
const elAddForm = content.querySelector('.popup_type_add .form');

//inputs
const elInputName = elEditForm.querySelector("input[name='input-user-name']");
const elInputJob = elEditForm.querySelector("input[name='input-user-job']");
const elCardName = elAddForm.querySelector("input[name='input-card-name']");
const elCardURL = elAddForm.querySelector("input[name='input-card-url']");

//------------------------------ functions ----------------------------//

//popup state manage functions
function openPopup(el) {
  el.classList.add('popup_opened');
}
function closePopup(el) {
  el.classList.remove('popup_opened');
}

//initial fill cards container by N random cards
function fillCardsContainer(numCards = 6) {
  for (let i = 0; i < numCards; i++) {
    const randomCardIndex = Math.floor(Math.random() * cardSamples.length);
    const name = cardSamples[randomCardIndex].header;
    const src = cardSamples[randomCardIndex].img;
    const desc = cardSamples[randomCardIndex].desc;
    elСardsContainer.prepend(generateCard(name, src, desc));
  }
}

//card gen function
function generateCard(name, src, alt) {
  const elCard = elCardTemplate.querySelector('.card').cloneNode(true);
  const elCardPhoto = elCard.querySelector('.card__photo');
  elCardPhoto.src = src;
  elCardPhoto.alt = alt;
  elCard.querySelector('.card__caption').textContent = name;

  elCard.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  elCard.querySelector('.card__bin-icon').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  elCard.querySelector('.card__photo').addEventListener('click', function () {
    handlePreview(name, src, alt);
  });
  return elCard
}

//preview handling function
function handlePreview (name, src, alt) {
  elPreviewImage.src = src;
  elPreviewCaption.textContent = name;
  elPreviewImage.alt = alt;
  openPopup(elPreviewPopup);
}

//edit form submit handling function
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  elUserName.textContent = elInputName.value;
  elUserJob.textContent = elInputJob.value;
  closePopup(elEditPopup);
};

//add form submit handling function
function addFormSubmitHandler(evt) {
  evt.preventDefault();
  elСardsContainer.prepend(generateCard(elCardName.value || 'Без имени', elCardURL.value || './images/card-placeholder.png', elCardName.value || 'Без описания'));
  closePopup(elAddPopup);
};

//------------------------------ listeners ----------------------------//
elCloseEditFormButton.addEventListener('click', function () {
  closePopup(elEditPopup);
});
elEditButton.addEventListener('click', function () {
  openPopup(elEditPopup);
  elInputName.value = elUserName.textContent;
  elInputJob.value = elUserJob.textContent;
});
elCloseAddFormButton.addEventListener('click', function () {
  closePopup(elAddPopup);
});
elAddButton.addEventListener('click', function () {
  openPopup(elAddPopup);
});
elClosePreviewButton.addEventListener('click', function () {
  closePopup(elPreviewPopup);
});
elEditForm.addEventListener('submit', editFormSubmitHandler);
elAddForm.addEventListener('submit', addFormSubmitHandler);


//------------------------------ execution ----------------------------//
//initial cards fill on page load
fillCardsContainer();
