import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', formData);
      console.log(response.data); // Log the response from the server
      navigate('/content'); // Redirect to '/content' after successful login

    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        
        if (error.response.status === 400) {
          console.log('Incorrect credentials'); // Handle incorrect credentials error
        } else {
          console.error('Server Error:', error.response.data); // Handle other server errors
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Request error:', error.message);
      }
    }
  };
  return (
    <div id="container">
      <div id="moveContainer">
        <div id="rainBow" className="purple_container">
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
            <button id="signUpBtn" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;