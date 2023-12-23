import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/reducers/userSlice';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registerUser(userData));

    setUserData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
