import { Routes, Route, useNavigate } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { AuthElement, ProtectedRouteElement } from '../ProtectedRoute/ProtectedRoute';

import mainApi from '../../utils/MainApi';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import * as auth from '../../utils/auth';
import { useMessage } from '../../utils/useMessage';
import { useError } from '../../utils/useError';
import PopupInfo from '../PopupInfo/PopupInfo';
import ErrPopup from '../ErrorPopup/ErrorPopup';

import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegistring, setIsRegistring] = useState(false);
  const [errAuthMessage, setErrAuthMessage] = useState('');
  const [infMessage, showMessage] = useMessage();
  const [errMessage, showError] = useError();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      auth.checkToken()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    auth.checkToken()
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err)
          setLoggedIn(false);
        });
  },[])

  const handleAuth = (user, resetForm) => {
    setErrAuthMessage('');
    resetForm();
    setLoggedIn(true);
    setCurrentUser(user);
    navigate('/movies', { replace: true });
  };

  function handleSignUp(name, email, password, resetForm) {
    setIsRegistring(true);
    auth.signup(name, email, password)
      .then((user) => {
        handleAuth(user, resetForm);
      })
      .catch((err) => {
        if (err === 'Ошибка: 401') {
          setErrAuthMessage('Некорректные данные');
        } else {
          setErrAuthMessage('Некорректные данные');
        }
      })
      .finally(() => setIsRegistring(false));
  }

  function handleSignIn(email, password, resetForm) {
    setIsRegistring(true);
    auth.signin(email, password)
      .then((res) => {
        handleAuth(res, resetForm);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setErrAuthMessage('Email уже зарегистрирован!');
        } else {
          setErrAuthMessage('Email уже зарегистрирован!');
        }
      })
      .finally(() => setIsRegistring(false));
  }

  function handleSignOut() {
    setIsRegistring(true);
    auth.signout()
      .catch((error) => showError(error))
      .finally(() => setIsRegistring(false));
    localStorage.clear();
    setLoggedIn(false);
  }

  function handleChangeUser(newUser) {
    setIsRegistring(true);
    mainApi.updateUser(newUser)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        showMessage('Редактирование завершено')
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setErrAuthMessage('Email уже зарегистрирован!');
        } else {
          setErrAuthMessage('Email уже зарегистрирован!');
        }
      })
      .finally(() => setIsRegistring(false));
  }
  const handleDeleteButtonClick = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then(() => { })
      .catch((error) => {
        showError(error);
      });
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, loggedIn, isRegistring, setIsRegistring }}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<AuthElement element={Register}
            onSignUp={handleSignUp} errorMessage={errAuthMessage}
            setErrAuthMessage={setErrAuthMessage} />} />
          <Route path="/signin" element={<AuthElement element={Login}
            loggedIn={loggedIn} onSignIn={handleSignIn}
            errorMessage={errAuthMessage} setErrAuthMessage={setErrAuthMessage} />} />
          <Route path="/profile" element={<ProtectedRouteElement element={Profile} loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onChangeUserInfo={handleChangeUser}
            errMessage={errAuthMessage}
            setErrAuthMessage={setErrAuthMessage} />} />

          <Route path='/movies' element={<ProtectedRouteElement element={Movies} loggedIn={loggedIn}
            showError={showError}
            onDelete={handleDeleteButtonClick} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement element={SavedMovies}
            loggedIn={loggedIn} showError={showError}
            onDelete={handleDeleteButtonClick} />} />
        </Routes>
        <ErrPopup errMessage={errMessage} />
        <PopupInfo infMessage={infMessage} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
