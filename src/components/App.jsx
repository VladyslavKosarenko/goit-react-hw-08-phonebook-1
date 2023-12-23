import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import ContactList from './ContactList';
import Phonebook from './Phonebook';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Phonebook />}>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/contacts" element={<ContactList />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
