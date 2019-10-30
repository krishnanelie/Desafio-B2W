import React from 'react';
import './Logo.css';
import logo from "./images/logo.png";

function Logo() {
  return (
    <div className="logo">
        <img id="logo" src={logo}  width="100px" height="100px" alt="logo"></img>
    </div>
  );
}
export default Logo;