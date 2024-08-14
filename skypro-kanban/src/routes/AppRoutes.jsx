import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import PopBrowse from '../pages/PopBrowse/PopBrowse';
import ExitPage from '../pages/ExitPage/ExitPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRoutesObj = {
  HOME: "/",
  LOGIN: "/login",
  CARDS: "/card/:id",
  REGISTER: "/register",
  EXIT: "/exit",
  NOT_FOUND: "*",
};

function AppRoutes({ toggleTheme, currentTheme }) {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <Routes location={background || location}>
        <Route path={AppRoutesObj.LOGIN} element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path={AppRoutesObj.REGISTER} element={<RegisterPage />} />
        <Route
          path={AppRoutesObj.HOME}
          element={
            isAuth ? (
              <MainPage
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                toggleTheme={toggleTheme}
                currentTheme={currentTheme}
              />
            ) : (
              <Navigate to={AppRoutesObj.LOGIN} />
            )
          }
        />
        <Route path={AppRoutesObj.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
        <Route path={AppRoutesObj.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={AppRoutesObj.CARDS} element={<PopBrowse />} />
        </Routes>
      )}
    </>
  );
}

export default AppRoutes;