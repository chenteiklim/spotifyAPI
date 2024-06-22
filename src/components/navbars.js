import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="left">
        <span className="mdi mdi-chevron-left mdi-36px "></span>
        <span className="mdi mdi-chevron-right mdi-36px"></span>
      </div>
      <div className="right">
        <Link to="/" className="login-btn">Log Out</Link> {/* Use Link instead of TouchableOpacity */}
      </div>
    </nav>
  );
};

export default Navbar;