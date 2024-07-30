import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import CardPage from '../pages/CardPage/CardPage';
import ExitPage from '../pages/ExitPage/ExitPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

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
               <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
               <Route path="/register" element={<RegisterPage />} />
               <Route
                    path="/"
                    element={
                         isAuth ? (
                              <MainPage isAuth={isAuth} setIsAuth={setIsAuth} toggleTheme={toggleTheme} />
                         ) : (
                              <Navigate to="/login" />
                         )
                    }
               />
               <Route
                    path="/card/:id"
                    element={
                         isAuth ? <CardPage /> : <Navigate to="/login" />
                    }
               />
               <Route
                    path="/exit"
                    element={
                         isAuth ? <ExitPage setIsAuth={setIsAuth} /> : <Navigate to="/login" />
                    }
               />
               <Route path="*" element={<NotFoundPage />} />
          </Routes>
     );
}

export default AppRoutes;