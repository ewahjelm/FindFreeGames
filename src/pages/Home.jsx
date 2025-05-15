import { useState } from "react";

import Footer from "../components/Footer";
import GameGrid from "../components/GameGrid";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (gameId) => {
    if (favorites.includes(gameId)) {
      setFavorites(favorites.filter((id) => id !== gameId));
    } else {
      setFavorites([...favorites, gameId]);
    }
  };

  const thisGenre = [
    "mmorpg",
    "Shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "mmo",
    "fantasy",
    "fighting",
    "action",
  ];
  const thisPlatform = ["Browser", "PC"];

  // If the user checks one of the checkboxes,
  // the handler adds the tag into selectedGenre/selectedPlatform.
  // Once it's unchecked, the handler removes the tag from selectedGenre/selectedPlatform
  const GenreChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedGenre([...selectedGenre, value]);
    } else {
      setSelectedGenre(selectedGenre.filter((g) => g !== value));
    }
  };

  const PlatformChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedPlatform([...selectedPlatform, value]);
    } else {
      setSelectedPlatform(selectedPlatform.filter((p) => p !== value));
    }
  };

  return (
    <div>
      <header className="header">
        <h2>Free to game</h2>
      </header>

      <div className="main-layout">
        <nav className="nav">
          <p>Filter by:</p>
          <br />
          <ul>
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setShowFavorites(e.target.checked)}
                />
                Favorites
              </label>
            </li>
            <br />
          </ul>
          <p>Platform</p>
          <br />
          <ul>
            {thisPlatform.map((platform) => (
              <li key={platform}>
                <label>
                  <input
                    type="checkbox"
                    name="platform-filter"
                    value={platform.toLowerCase()}
                    onChange={PlatformChange}
                  />
                  {platform}
                </label>
              </li>
            ))}
          </ul>
          <br />
          <p>Genre</p>
          <br />
          <ul>
            {thisGenre.map((genre) => (
              <li key={genre}>
                <label>
                  <input
                    type="checkbox"
                    name="genre-filter"
                    value={genre.toLowerCase()}
                    onChange={GenreChange}
                  />
                  {genre}
                </label>
              </li>
            ))}
          </ul>
        </nav>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          showFavorites={showFavorites}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
