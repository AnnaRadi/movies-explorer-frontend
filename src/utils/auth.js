import { MainApi_URL } from './constants';

const properties = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

function signup(name, email, password) {
  return fetch(`${MainApi_URL}/signup`, {
    method: 'POST',
    ...properties,
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 409) {
        return Promise.reject('Email уже зарегестрирован');
      }
      if (res.status === 500) {
        return Promise.reject('Ошибка на сервере');
      }
      return Promise.reject('Непридвиденная ошибка');
    });
};

function signin(email, password) {
  return fetch(`${MainApi_URL}/signin`, {
    method: 'POST',
    ...properties,
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 401) {
        return Promise.reject('Введены некорректные данные');
      }
      if (res.status === 500) {
        return Promise.reject('Ошибка на сервере');
      }
      return Promise.reject('Ошибка регистрации');
    });
};

function signout() {
  return fetch(`${MainApi_URL}/logout`, {
    method: 'POST',
    ...properties,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        res.json().then((data) => console.error(data.message));
        throw new Error();
      }
    })
    .catch((err) => {
      console.log(err)
      throw err
    });
};

function checkToken() {
  return fetch(`${MainApi_URL}/users/me`, {
    method: 'GET',
    ...properties,
  })
    .then((res) => res.json())
    .then((data) => data);
};

export { signup, signin, signout, checkToken }