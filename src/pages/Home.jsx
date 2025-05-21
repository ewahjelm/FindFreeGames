import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import GameGrid from "../components/GameGrid";
import Header from "../components/Header";
import DropdownGenre from "../components/DropdownGenre";
import DropdownPlatform from "../components/DropdownPlatform";
import FavoriteToggle from "../components/FavoriteToggle";
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
    "mmorpg",
    "shooter",
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

  const thisPlatform = ["browser", "pc"];

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
      <Header
        thisGenre={thisGenre}
        thisPlatform={thisPlatform}
        selectedGenre={selectedGenre}
        selectedPlatform={selectedPlatform}
        GenreChange={GenreChange}
        PlatformChange={PlatformChange}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <div className="main-layout">
        <div className="filters filters-desktop">
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
