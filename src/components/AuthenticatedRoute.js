import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn, setupAxiosInterceptors } from '../auth/AuthenticationService';

class AuthenticatedRoute extends React.Component {
  componentDidMount() {
    setupAxiosInterceptors()
  }
  render() {
    if (isLoggedIn()) {
      return <Route {...this.props} />
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default AuthenticatedRoute;