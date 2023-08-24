import { MainApi_URL } from './constants';

class MainApi {
  constructor(option) {
    this._baseUrl = option.baseUrl;
    this._headers = option.headers;
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка:№ ${res.status}`)
    })
  };

  updateUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка:№ ${res.status}`)
    })
  };

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 409) {
        return Promise.reject('Email уже зарегестрирован');
      }
      if (res.status === 500) {
        return Promise.reject('Ошибка на сервере');
      }
      return Promise.reject('Ошибка обновления');
    })
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        duration: data.duration,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        year: data.year,
        country: data.country,
        director: data.director,
        description: data.description,
        thumbnail: `${MainApi_URL}${data.image.url}`,
        image: `${MainApi_URL}${data.image.url}`,
        movieId: data.id,
        trailerLink: data.trailerLink,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка:№ ${res.status}`)
    })
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка:№ ${res.status}`)
    })
  }
}

const mainApi = new MainApi({
  baseUrl: MainApi_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;