
function handleResponce(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject(res);
  }
}

export function getAllCards() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-8/cards', {
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762'
    }
  })
    .then(res => handleResponce(res))
}

export function getUserInfo() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me', {
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762'
    }
  })
    .then(res => handleResponce(res))
}

export function setUserInfo(name, about) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
    .then(res => handleResponce(res))
}

export function addCard(name, link) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-8/cards', {
    method: 'POST',
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
    .then(res => handleResponce(res))
}

export function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-8/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762',
    }
  })
    .then(res => handleResponce(res))
}

export function addLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-8/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762',
    }
  })
    .then(res => handleResponce(res))
}

export function removeLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-8/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762',
    }
  })
    .then(res => handleResponce(res))
}

export function setAvatar(link) {
  return fetch('https://nomoreparties.co/v1/plus-cohort-8/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '6556f7bd-6f48-4334-a44b-f6f6033ed762',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: link
    })
  })
    .then(res => handleResponce(res))
}
