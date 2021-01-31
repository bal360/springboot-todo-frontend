import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/header/NavBar';
import RegistrationForm from './components/registration/RegistrationForm';
import LoginForm from './components/login/LoginForm';
import Footer from './components/Footer';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Container>
          <Switch>
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path={["/", "/login"]} component={LoginForm} />
            <AuthenticatedRoute exact path="/welcome/:name" component={Welcome} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </>
  )
}

export default App;