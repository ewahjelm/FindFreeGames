import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import GameGrid from "../components/GameGrid";
import Header from "../components/Header";

const Home = ({ selectedGame, setSelectedGame }) => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  //Här börjar favorit toogler
  const toggleFavorite = (gameId) => {
    let updatedFavorites;

    if (favorites.includes(gameId)) {
      updatedFavorites = favorites.filter((id) => id !== gameId);
    } else {
      updatedFavorites = [...favorites, gameId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const thisGenre = [
    "Mmorpg",
    "Shooter",
    "Strategy",
    "Moba",
    "Racing",
    "Sports",
    "Social",
    "Mmo",
    "Fantasy",
    "Fighting",
    "Action",
  ];
  const thisPlatform = ["Browser", "PC"];

  // If the user checks one of the checkboxes,
  // the handler adds the tag into selectedGenre/selectedPlatform.
  // Once it's unchecked, the handler removes the tag from selectedGenre/selectedPlatform
  //Här börjar genre change
  const GenreChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedGenre([...selectedGenre, value]);
    } else {
      setSelectedGenre(selectedGenre.filter((g) => g !== value));
    }
  };
  //Här börjar plattform change
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
      <Header />
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
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
