import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import CardPage from '../pages/CardPage/CardPage';
import ExitPage from '../pages/ExitPage/ExitPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRoutesObj = {
     HOME: "/",
     LOGIN: "/about",
     CARDS: "/card/:id",
     REGISTER: "/register",
     EXIT: "/exit",
     NOT_FOUND: "*",
};

function AppRoutes({ toggleTheme }) {
     const [isAuth, setIsAuth] = useState(false);

     useEffect(() => {
          const token = localStorage.getItem('token');
          if (token) {
               setIsAuth(true);
          }
     }, []);

     return (
          <Routes>
               <Route path={AppRoutesObj.LOGIN} element={<LoginPage setIsAuth={setIsAuth} />} />
               <Route path={AppRoutesObj.REGISTER} element={<RegisterPage />} />
               <Route
                    path={AppRoutesObj.HOME}
                    element={
                         isAuth ? (
                              <MainPage isAuth={isAuth} setIsAuth={setIsAuth} toggleTheme={toggleTheme} />
                         ) : (
                              <Navigate to={AppRoutesObj.LOGIN} />
                         )
                    }
               />
               <Route
                    path={AppRoutesObj.CARDS}
                    element={
                         isAuth ? <CardPage /> : <Navigate to={AppRoutesObj.LOGIN} />
                    }
               />
               <Route
                    path={AppRoutesObj.EXIT}
                    element={
                         isAuth ? <ExitPage setIsAuth={setIsAuth} /> : <Navigate to={AppRoutesObj.LOGIN} />
                    }
               />
               <Route path={AppRoutesObj.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
     );
}

export default AppRoutes;