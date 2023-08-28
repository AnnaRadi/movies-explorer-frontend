import { MoviesApi_URL } from './constants';

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else if (res.status === 404) {
      return Promise.reject('Страница не найдена');
    } else if (res.status === 500) {
      return Promise.reject('Ошибка');
    } else {
      return Promise.reject(res.status);
    }
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: MoviesApi_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});