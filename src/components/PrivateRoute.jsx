import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = document.cookie.includes('access_token');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
