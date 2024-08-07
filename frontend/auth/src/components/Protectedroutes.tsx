import { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children : ReactNode
}

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const { isUserAuthenticated } = useAuth();
  if (!isUserAuthenticated) {
    return <Navigate to='/Login' />;
  }

  return children;
};

export default ProtectedRoute;
