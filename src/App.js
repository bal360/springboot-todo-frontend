import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from './components/header/NavBar';
import RegistrationForm from './components/registration/RegistrationForm';
import LoginForm from './components/login/LoginForm';
import Footer from './components/Footer';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Welcome from './components/Welcome';
import TodoList from './components/todos/TodoList';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
`

const App = () => {
  return (
    <Wrapper>
      <Router>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path={["/", "/login"]} component={LoginForm} />
            <AuthenticatedRoute exact path="/welcome/:name" component={Welcome} />
            <AuthenticatedRoute exact path="/todos" component={TodoList} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </Wrapper>
  )
}

export default App;