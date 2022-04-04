(()=>{"use strict";var e={178:(e,t,n)=>{e.exports=n.p+"b968ef21ef1987fac8da.png"},463:(e,t,n)=>{e.exports=n.p+"0354d62f1d895f63284d.png"},563:(e,t,n)=>{e.exports=n.p+"4976d83c41bdda6b6dc2.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.p="",(()=>{var e=function(e,n,o){o.validity.valid?r(e,n,o):t(e,n,o,o.validationMessage)},t=function(e,t,n,r){var o=t.querySelector(".".concat(n.id,"-error"));n.classList.add(e.inputErrorClass),o.textContent=r,o.classList.add(e.errorClass)},r=function(e,t,n){var r=t.querySelector(".".concat(n.id,"-error"));n.classList.remove(e.inputErrorClass),r.classList.remove(e.errorClass),r.textContent=""},o=function(e,t,n){c(t)?(n.classList.add(e.inactiveButtonClass),n.disabled=!0):(n.classList.remove(e.inactiveButtonClass),n.disabled=!1)},c=function(e){return e.some((function(e){return!e.validity.valid}))},a=function(t,n){var r=Array.from(n.querySelectorAll(t.inputSelector)),c=n.querySelector(t.submitButtonSelector);o(t,r,c),r.forEach((function(r){e(t,n,r)}))},i=(n(563),n(463),n(178),document.querySelector(".page")),u={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},s=document.querySelectorAll(".popup"),l=i.querySelector(".popup_type_preview"),d=l.querySelector(".preview__image"),f=l.querySelector(".preview__caption");function p(e){document.addEventListener("keydown",_),e.classList.add("popup_opened")}function m(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",_)}function _(e){"Escape"===e.key&&m(document.querySelector(".popup_opened"))}function v(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}s.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&m(e),t.target.classList.contains("popup__close-button")&&m(e)}))}));var h=i.querySelector("#card-template").content;function y(e,t,n,r,o,c,a){var i=h.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__photo"),s=i.querySelector(".card__like-counter");return u.src=t,u.alt=n,s.innerText=r,i.querySelector(".card__caption").textContent=e,a&&i.querySelector(".card__like").classList.add("card__like_active"),i.querySelector(".card__like").addEventListener("click",(function(e){e.target.classList.contains("card__like_active")?function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-8/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762"}}).then((function(e){return v(e)}))}(c).then((function(t){s.innerText=t.likes.length,e.target.classList.remove("card__like_active")})).catch((function(e){return console.log(e)})):function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-8/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762"}}).then((function(e){return v(e)}))}(c).then((function(t){s.innerText=t.likes.length,e.target.classList.add("card__like_active")})).catch((function(e){return console.log(e)}))})),o?i.querySelector(".card__bin-icon").addEventListener("click",(function(e){(function(e){return fetch("https://nomoreparties.co/v1/plus-cohort-8/cards/".concat(e),{method:"DELETE",headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762"}}).then((function(e){return v(e)}))})(c).then((function(){e.target.closest(".card").remove()})).catch((function(e){return console.log(e)}))})):i.querySelector(".card__bin-icon").classList.add("card__bin-icon_disabled"),i.querySelector(".card__photo").addEventListener("click",(function(){!function(e,t,n){d.src=t,d.alt=n,f.textContent=e,p(l)}(e,t,n)})),i}var b=i.querySelector(".cards__list"),S=i.querySelector(".profile__user-name"),q=i.querySelector(".profile__user-job"),g=i.querySelector(".profile__avatar"),L=i.querySelector(".popup_type_add"),x=i.querySelector(".popup_type_edit"),k=i.querySelector(".popup_type_avatar"),E=i.querySelector(".profile__edit-button"),C=i.querySelector(".profile__add-button"),T=i.querySelector(".profile__avatar-overlay"),B=i.querySelector(".popup_type_edit .form"),A=i.querySelector(".popup_type_add .form"),z=i.querySelector(".popup_type_avatar .form");E.addEventListener("click",(function(){var e=document.forms.editForm;e.elements.submitButton.innerText="Сохранить",e.elements.userName.value=S.textContent,e.elements.userInfo.value=q.textContent,p(x),a(u,x)})),C.addEventListener("click",(function(){A.reset(),A.elements.submitButton.innerText="Сохранить",p(L),a(u,L)})),T.addEventListener("click",(function(){z.reset(),A.elements.submitButton.innerText="Сохранить",p(k),a(u,k)})),B.addEventListener("submit",(function(e){var t,n;e.preventDefault(),B.elements.submitButton.innerText="Сохранение...",(t=e.target.elements.userName.value,n=e.target.elements.userInfo.value,fetch("https://nomoreparties.co/v1/plus-cohort-8/users/me",{method:"PATCH",headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762","Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then((function(e){return v(e)}))).then((function(e){S.textContent=e.name,q.textContent=e.about})).catch((function(e){return console.log(e)})).finally((function(){B.elements.submitButton.innerText="Готово!",m(x)}))})),A.addEventListener("submit",(function(e){var t,n;e.preventDefault(),A.elements.submitButton.innerText="Сохранение...",(t=e.target.elements.cardName.value,n=e.target.elements.cardUrl.value,fetch("https://nomoreparties.co/v1/plus-cohort-8/cards",{method:"POST",headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762","Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then((function(e){return v(e)}))).then((function(e){b.prepend(y(e.name,e.link,e.name,e.likes.length,!0,e._id,!1))})).catch((function(e){return console.log(e)})).finally((function(){A.elements.submitButton.innerText="Готово!",m(L)}))})),z.addEventListener("submit",(function(e){var t;e.preventDefault(),z.elements.submitButton.innerText="Сохранение...",(t=e.target.elements.avatarUrl.value,fetch("https://nomoreparties.co/v1/plus-cohort-8/users/me/avatar",{method:"PATCH",headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return v(e)}))).then((function(e){g.src=e.avatar})).catch((function(e){return console.log(e)})).finally((function(){z.elements.submitButton.innerText="Готово!",m(k)}))})),fetch("https://nomoreparties.co/v1/plus-cohort-8/users/me",{headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762"}}).then((function(e){return v(e)})).then((function(e){var t,n;S.textContent=e.name,q.textContent=e.about,g.src=e.avatar,t=b,n=e._id,fetch("https://nomoreparties.co/v1/plus-cohort-8/cards",{headers:{authorization:"6556f7bd-6f48-4334-a44b-f6f6033ed762"}}).then((function(e){return v(e)})).then((function(e){for(var r=Object.keys(e).length-1;r>=0;r--){var o=e[r].name,c=e[r].link,a=e[r].name,i=e[r].likes.length,u=n==e[r].owner._id,s=!!e[r].likes.some((function(e){return e._id===n})),l=e[r]._id;t.prepend(y(o,c,a,i,u,l,s))}})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(n){n.addEventListener("submit",(function(e){e.preventDefault()})),function(t,n){var r=Array.from(t.querySelectorAll(n.inputSelector)),c=t.querySelector(n.submitButtonSelector);r.forEach((function(a){a.addEventListener("input",(function(){e(n,t,a),o(n,r,c)}))}))}(n,t)}))}(u)})()})();