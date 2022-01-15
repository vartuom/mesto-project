const content = document.querySelector('.page');
const cardsContainer = content.querySelector('.cards__list');

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
  const cardTemplate = content.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const randomCardIndex = Math.floor(Math.random()*cardSamples.length);

  cardElement.querySelector('.card__caption').textContent = cardSamples[randomCardIndex].header;
  cardElement.querySelector('.card__photo').src = cardSamples[randomCardIndex].img;
  cardElement.querySelector('.card__photo').alt = cardSamples[randomCardIndex].desc;

  cardsContainer.append(cardElement);
}

function fillCardsContainer(numCards = 6) {
  for (let i = 0; i < numCards; i++) {
    generateCard()
  }
}

fillCardsContainer();

//popup state manage
const elPopup = content.querySelector('.popup');
function openPopup(el) {
  el.classList.add('popup_opened');
}

const elCloseButton = content.querySelector('.popup__close-button');
function closePopup(el) {
  el.classList.remove('popup_opened');
}

elCloseButton.addEventListener('click', function (){
  closePopup(elPopup);
});


const elEditButton = content.querySelector('.profile__edit-button');
const elUserName = content.querySelector('.profile__user-name');
const elUserJob = content.querySelector('.profile__user-job');
const elInputName = content.querySelector("form[name='input-form'] input[name='input-user-name']");
const elInputJob = content.querySelector("form[name='input-form'] input[name='input-user-job']");

elEditButton.addEventListener('click', function (){
  openPopup(elPopup);
  elInputName.value = elUserName.textContent;
  elInputJob.value = elUserJob.textContent;
});

