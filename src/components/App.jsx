// import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserRoutes  from '../router';
import css from './App.module.scss';
import { current } from 'redux/auth/authOperations';

import React from 'react';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    // <BrowserRouter>
    <div className={css.container}>
    <UserRoutes />
    </div>
    
    // </BrowserRouter>
  );
};