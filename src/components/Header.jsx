import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-start">
        <h1 className="header-content">FIND FREE GAMES TO PLAY</h1>
      </div>
      <Link to="/about">About us</Link>
    </div>
  );
}

export default Header;
