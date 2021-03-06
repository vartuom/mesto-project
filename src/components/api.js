
function handleResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(`Ошибка: ${res.status}`);
  }
}

const config ={
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-8',
  headers: {
    authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762',
    'Content-Type': 'application/json'
  }
}

export function getAllCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(handleResponse)
}

export function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(handleResponse)
}

export function setUserInfo(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(handleResponse)
}

export function addCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(handleResponse)
}

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
}

export function addLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(handleResponse)
}

export function removeLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
}

export function setAvatar(link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(handleResponse)
}

