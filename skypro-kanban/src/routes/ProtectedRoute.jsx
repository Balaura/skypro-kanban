import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { AppRoutesObj } from './routes';

function ProtectedRoute() {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to={AppRoutesObj.LOGIN} /> 
}

export default ProtectedRoute;