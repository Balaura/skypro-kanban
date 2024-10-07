import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) {
    // Возвращаем null или компонент загрузки
    return null;
  }

  if (!user) {
    // Перенаправляем на страницу входа, сохраняя текущий путь
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;