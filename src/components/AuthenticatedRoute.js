import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../auth/AuthenticationService';

const AuthenticatedRoute = props => {
  return (
    isLoggedIn() ? 
      <Route {...props} />
    :
      <Redirect to="/login" />
  )
}

export default AuthenticatedRoute;