const content = document.querySelector('.page');
const cardsContainer = content.querySelector('.cards__list');
const cardTemplate = content.querySelector('#card-template').content;

//initial card generation
// function handleLike (evt) {
//   evt.target.classList.toggle('card__like_active');
// };

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

function generateCard() {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
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
  cardsContainer.append(cardElement);
}

function fillCardsContainer(numCards = 6) {
  for (let i = 0; i < numCards; i++) {
    generateCard()
  }
}

fillCardsContainer();
//initial card generation block END


//popup state manage functions
const elAddPopup = content.querySelector('.popup_type_add');
const elEditPopup = content.querySelector('.popup_type_edit');
function openPopup(el) {
  el.classList.add('popup_opened');
}
function closePopup(el) {
  el.classList.remove('popup_opened');
}

//buttons
const elEditButton = content.querySelector('.profile__edit-button');
const elAddButton = content.querySelector('.profile__add-button');
const elCloseEditFormButton = content.querySelector('.popup_type_edit .popup__close-button');
const elCloseAddFormButton = content.querySelector('.popup_type_add .popup__close-button');


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


//text fields
const elUserName = content.querySelector('.profile__user-name');
const elUserJob = content.querySelector('.profile__user-job');
const elInputName = content.querySelector("form[name='input-form'] input[name='input-user-name']");
const elInputJob = content.querySelector("form[name='input-form'] input[name='input-user-job']");

//edit form submit code block
const elInputForm = content.querySelector('.popup_type_edit .form');
function editFormSubmitHandler(evt) {
  evt.preventDefault();
  elUserName.textContent = elInputName.value;
  elUserJob.textContent = elInputJob.value;
  closePopup(elEditPopup);
};
elInputForm.addEventListener('submit', editFormSubmitHandler);
//edit form submit code block END

//add form submit code block
function addCard (name, url) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = name;
  cardElement.querySelector('.card__photo').src = url;
  cardElement.querySelector('.card__photo').alt = name;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardsContainer.prepend(cardElement);
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


