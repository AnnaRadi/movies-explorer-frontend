import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component, loggedIn,...props }) => {
  return loggedIn ? <Component {...props} /> : <Navigate to='/' replace />;
};
const AuthElement = ({ element: Component, loggedIn, ...props }) => {
  return !loggedIn ? <Component {...props} /> : <Navigate to='/movies' replace />;
};

export { ProtectedRouteElement, AuthElement };
