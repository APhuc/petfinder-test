import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


function PrivateRoutes(props) {
  const {access_token} = useSelector(state => state.user)
  return (
   !!access_token? <Outlet/> : <Navigate to="/login"/>
  );
}

export default PrivateRoutes;