//page
const content = document.querySelector('.page');

//cards
export const cardsContainerElement = content.querySelector('.cards__list');
export const cardTemplateElement = content.querySelector('#card-template').content;

//text fields
export const userNameElement = content.querySelector('.profile__user-name');
export const userJobElement = content.querySelector('.profile__user-job');

//popups
export const addPopupElement = content.querySelector('.popup_type_add');
export const editPopupElement = content.querySelector('.popup_type_edit');
export const previewPopupElement = content.querySelector('.popup_type_preview');

export const previewImageElement = previewPopupElement.querySelector('.preview__image');
export const previewCaptionElement = previewPopupElement.querySelector('.preview__caption');

//buttons
export const editButtonElement = content.querySelector('.profile__edit-button');
export const addButtonElement = content.querySelector('.profile__add-button');
export const closeEditFormButtonElement = content.querySelector('.popup_type_edit .popup__close-button');
export const closeAddFormButtonElement = content.querySelector('.popup_type_add .popup__close-button');
export const closePreviewButtonElement = content.querySelector('.popup_type_preview .popup__close-button');

//forms
export const editFormElement = content.querySelector('.popup_type_edit .form');
export const addFormElement = content.querySelector('.popup_type_add .form');

//inputs
export const inputNameElement = editFormElement.querySelector("input[name='input-user-name']");
export const inputJobElement = editFormElement.querySelector("input[name='input-user-job']");
export const cardNameElement = addFormElement.querySelector("input[name='input-card-name']");
export const cardURLElement = addFormElement.querySelector("input[name='input-card-url']");

