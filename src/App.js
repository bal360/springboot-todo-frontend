import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './header/NavBar';
import RegistrationForm from './registration/RegistrationForm';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <RegistrationForm />
      </Router>
    </>
  )
}

export default App;