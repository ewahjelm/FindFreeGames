import React, { useEffect, useState } from "react";
import { gamesData } from "../data/games"; // Importing the mock data
import GameCard from "../components/GameCard";

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  favorites,
  toggleFavorite,
  showFavorites,
}) => {
  const [games, setGames] = useState([]);
  const [visibleCount, setVisbleCount] = useState(10);
  const itemsPerPage = 10;

  useEffect(() => {
    setGames(gamesData); // Mock fetching games
  }, []);

  //Filter games by genre and platform
  const filteredGames = games.filter((game) => {
    const genre = game.genre.toLowerCase();
    const platform = game.platform.toLowerCase();

    const genreMatch =
      selectedGenre.length === 0 || selectedGenre.includes(genre);
    const favoriteMatch = !showFavorites || favorites.includes(game.id);
    const platformMatch =
      selectedPlatform.length === 0 ||
      selectedPlatform.some((p) => platform.includes(p));

    return genreMatch && platformMatch && favoriteMatch;
  });

  const handleLoadMore = () => {
    setVisbleCount((prev) => prev + itemsPerPage);
  };

  const handleShowLess = () => {
    setVisbleCount((prev) => Math.max(10, prev - itemsPerPage));
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="game-page">
      <div className="game-list">
        {filteredGames.slice(0, visibleCount).map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavorite={favorites.includes(game.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <div className="button-group">
        {visibleCount < filteredGames.length && (
          <button onClick={handleLoadMore} className="load-more-btn">
            Show more
          </button>
        )}
        {visibleCount > 10 && (
          <button onClick={handleShowLess} className="show-less-btn">
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default GameGrid;
