import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PopBrowse from "../pages/PopBrowse/PopBrowse";
import ExitPage from "../pages/ExitPage/ExitPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { useUser } from "../contexts/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import { AppRoutesObj } from "../routes/routes";

function AppRoutes() {
  const { isLoading } = useUser();
  const location = useLocation();
  const background = location.state?.background;

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Routes location={background || location}>
        <Route path={AppRoutesObj.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutesObj.REGISTER} element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path={AppRoutesObj.HOME}
            element={
              <MainPage />
            }
          />
          <Route path={AppRoutesObj.EXIT} element={<ExitPage />} />
          <Route path={AppRoutesObj.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
      {background && <Routes><Route path={AppRoutesObj.CARDS} element={<PopBrowse />} /></Routes>}
    </>
  );
}

export default AppRoutes;
