import { Navigate, Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { selectAuth } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;