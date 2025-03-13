import React from 'react';
import Logo from '../assets/Logo.png';
import './Splash.css'; // Add styles

function Splash() {
  return (
    <div className="splash-screen">
      <img src={Logo} alt="Logo" className="splash-logo" />
    </div>
  );
}

export default Splash;