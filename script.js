const content = document.querySelector('.content');
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
  const cardTemplate = document.querySelector('#card-template').content;
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

//popup state manage code block
const elEditButton = document.querySelector('.profile__edit-button');
const elPopup = document.querySelector('.popup');


function openPopup(el) {
  el.classList.add('popup_opened');
}

elEditButton.addEventListener('click', function (){
  openPopup(elPopup);
});
