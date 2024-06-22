import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      console.log('Please enter email and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/login', formData);
      console.log(response.data);

      // Save email to sessionStorage
      sessionStorage.setItem('email', response.data.user.email);

      navigate('/content');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('Incorrect email or password');
      } else {
        console.error('Login error:', error.response ? error.response.data : error.message);
      }
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div id="container">
      <div id="moveContainer">
        <div className="purple_container2">
          <h1 id="title">Login</h1>
          <form onSubmit={handleSubmit}>
            <div id="emailContainer">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div id="passwordContainer">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <button id="loginBtn" type="submit">Login</button>
            <button id="signUpBtn" onClick={handleSignUpClick}>SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;