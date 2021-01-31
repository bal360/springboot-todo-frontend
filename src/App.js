import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/header/NavBar';
import RegistrationForm from './components/registration/RegistrationForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Container>
          <Switch>
            <Route exact path="/register" component={RegistrationForm} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </>
  )
}

export default App;