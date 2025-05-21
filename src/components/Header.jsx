import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="header">
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className="header-start">
          <Link to="/home">
            <h1 className="header-content">FIND FREE GAMES TO PLAY</h1>
          </Link>
        </div>
        <Link to="/about">About</Link>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  Action
                </label>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
