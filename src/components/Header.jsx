import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-start">
        <Link to="/home">
          <h1 className="header-content">FIND FREE GAMES TO PLAY</h1>
        </Link>
      </div>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
