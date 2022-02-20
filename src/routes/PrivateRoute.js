import { Navigate, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export default function PrivateRoute() {
  const { isAuthenticate } = useAuth();

  return isAuthenticate ? <Outlet /> : <Navigate to="/auth" />;
}
