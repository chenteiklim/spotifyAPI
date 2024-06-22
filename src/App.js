import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebars.js';
import Navbar from './components/navbars.js';
import Content from './components/contents.js';
import SignUpPage from './components/signuppage.js';
import LoginPage from './components/loginpage.js';


function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/content" element={<Content />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;