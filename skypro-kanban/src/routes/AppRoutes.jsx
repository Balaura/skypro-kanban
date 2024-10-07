import { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import PopBrowse from '../pages/PopBrowse/PopBrowse';
import ExitPage from '../pages/ExitPage/ExitPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { useUser } from '../contexts/UserContext';
import ProtectedRoute from './ProtectedRoute';

const AppRoutesObj = {
  HOME: "/",
  LOGIN: "/login",
  CARDS: "/card/:id",
  REGISTER: "/register",
  EXIT: "/exit",
  NOT_FOUND: "*",
};

function AppRoutes({ toggleTheme, currentTheme }) {
  const { user, isLoading } = useUser();
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    if (!isLoading) {
      setIsAuth(!!user);
    }
  }, [user, isLoading]);

  if (isLoading) {
    return null;
  }


  return (
    <>
      <Routes location={background || location}>
        <Route path={AppRoutesObj.LOGIN} element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route path={AppRoutesObj.REGISTER} element={<RegisterPage />} />
        <Route
          path={AppRoutesObj.HOME}
          element={
            <ProtectedRoute>
              <MainPage
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                toggleTheme={toggleTheme}
                currentTheme={currentTheme}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutesObj.EXIT}
          element={
            <ProtectedRoute>
              <ExitPage setIsAuth={setIsAuth} />
            </ProtectedRoute>
          }
        />
        <Route path={AppRoutesObj.NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path={AppRoutesObj.CARDS}
          element={
            <ProtectedRoute>
              <PopBrowse />
            </ProtectedRoute>
          }
        />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={AppRoutesObj.CARDS}
            element={
              <ProtectedRoute>
                <PopBrowse />
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default AppRoutes;