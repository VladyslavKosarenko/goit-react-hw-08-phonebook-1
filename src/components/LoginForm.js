import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/reducers/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser(credentials));

    setCredentials({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
