import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn, setupAxiosInterceptors } from '../auth/AuthenticationService';

const AuthenticatedRoute = props => {
  // componentDidMount() {
  //   // setupAxiosInterceptors()
  // }

  if (isLoggedIn()) {
    return <Route {...props} />
  } else {
    return <Redirect to="/login" />
  }
}

export default AuthenticatedRoute;