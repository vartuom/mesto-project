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

//buttons
const elEditButton = content.querySelector('.profile__edit-button');
const elAddButton = content.querySelector('.profile__add-button');
const elCloseEditFormButton = content.querySelector('.popup_type_edit .popup__close-button');
const elCloseAddFormButton = content.querySelector('.popup_type_add .popup__close-button');
const elClosePreviewButton = content.querySelector('.popup_type_preview .popup__close-button');

//forms
const elEditForm = content.querySelector('.popup_type_edit .form');

//inputs
const elInputName = elEditForm.querySelector("input[name='input-user-name']");
const elInputJob = elEditForm.querySelector("input[name='input-user-job']");

//------------------------------ functions ----------------------------//

//popup state manage functions
function openPopup(el) {
  el.classList.add('popup_opened');
}
function closePopup(el) {
  el.classList.remove('popup_opened');
}


function fillCardsContainer(numCards = 6) {

}








//initial card generation
// function handleLike (evt) {
//   evt.target.classList.toggle('card__like_active');
// };

// function handleImagePopup (src, name) {

// }

function generateCard() {
  const cardElement = elCardTemplate.querySelector('.card').cloneNode(true);
  const randomCardIndex = Math.floor(Math.random() * cardSamples.length);

  cardElement.querySelector('.card__caption').textContent = cardSamples[randomCardIndex].header;
  cardElement.querySelector('.card__photo').src = cardSamples[randomCardIndex].img;
  cardElement.querySelector('.card__photo').alt = cardSamples[randomCardIndex].desc;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardElement.querySelector('.card__bin-icon').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

  cardElement.querySelector('.card__photo').addEventListener('click', function () {
    const elImage = elPreviewPopup.querySelector('.preview__image');
    const elCaption = elPreviewPopup.querySelector('.preview__caption');
    elImage.src = cardSamples[randomCardIndex].img;
    elCaption.textContent = cardSamples[randomCardIndex].header;
    openPopup(elPreviewPopup);
  });

  elСardsContainer.append(cardElement);
}

function fillelСardsContainer(numCards = 6) {
  for (let i = 0; i < numCards; i++) {
    generateCard()
  }
}

fillelСardsContainer();
//initial card generation block END




//buttons



//button listeners
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




//edit form submit code block

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  elUserName.textContent = elInputName.value;
  elUserJob.textContent = elInputJob.value;
  closePopup(elEditPopup);
};
elEditForm.addEventListener('submit', editFormSubmitHandler);
//edit form submit code block END

//add form submit code block
function addCard (name, url) {
  const cardElement = elCardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = name;
  cardElement.querySelector('.card__photo').src = url;
  cardElement.querySelector('.card__photo').alt = name;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  elСardsContainer.prepend(cardElement);
}
const elAddForm = content.querySelector('.popup_type_add .form');
function addFormSubmitHandler(evt) {
  evt.preventDefault();
  debugger
  const cardName = content.querySelector("form[name='add-form'] input[name='input-card-name']").value;
  const cardURL = content.querySelector("form[name='add-form'] input[name='input-card-url']").value;
  addCard (cardName || 'Без имени', cardURL || './images/card-placeholder.png')
  closePopup(elAddPopup);
};
elAddForm.addEventListener('submit', addFormSubmitHandler);
//add form submit code block END


