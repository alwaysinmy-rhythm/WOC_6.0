import React from 'react';
import {Navigate, Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = () => {
  const isAuthenticated = !!Cookies.get('email'); // Replace 'token' with the name of your authentication token
  console.log(isAuthenticated);
  const navigate = useNavigate() ;
  if( !isAuthenticated  )return  <Navigate to ={"/"}/>; 
  else return <Outlet />
};

export default PrivateRoute;