import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropdownGenre from "./DropdownGenre";
import DropdownPlatform from "./DropdownPlatform";
import FavoriteToggle from "./FavoriteToggle";

function Header({
  thisGenre,
  thisPlatform,
  selectedGenre,
  selectedPlatform,
  GenreChange,
  PlatformChange,
  showFavorites,
  setShowFavorites,
}) {
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
            <h1 className="header-content">
              FIND FREE
              <br /> GAMES TO
              <br /> PLAY
            </h1>
          </Link>
        </div>
        <Link to="/about">About</Link>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <div className="mobile-filters">
              <DropdownGenre
                options={thisGenre}
                selected={selectedGenre}
                onChange={GenreChange}
              />
              <DropdownPlatform
                options={thisPlatform}
                selected={selectedPlatform}
                onChange={PlatformChange}
              />
              <FavoriteToggle
                showFavorites={showFavorites}
                setShowFavorites={setShowFavorites}
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
