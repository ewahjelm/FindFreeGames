import { useEffect, useState } from "react";
import { gamesData } from "../data/games";
import GameCard from "../components/GameCard";
import PopupCard from "./popupCard";

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  favorites,
  toggleFavorite,
  showFavorites,
  selectedGame,
  setSelectedGame,
}) => {
  const [games, setGames] = useState([]);
  const [visibleCount, setVisbleCount] = useState(10);

  const itemsPerPage = 10;

  useEffect(() => {
    setGames(gamesData);
  }, []);

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
  };

  return (
    <div className={`game-page ${selectedGame ? "blurred" : ""}`}>
      <div className="game-list">
        {filteredGames.slice(0, visibleCount).map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavorite={favorites.includes(game.id)}
            toggleFavorite={toggleFavorite}
            onClick={() => setSelectedGame(game)} // öppna popup
          />
        ))}
      </div>

      <div className="button-group">
        {visibleCount > 10 && (
          <button onClick={handleShowLess} className="show-less-btn">
            Show less
          </button>
        )}
        {visibleCount < filteredGames.length && (
          <button onClick={handleLoadMore} className="load-more-btn">
            Show more
          </button>
        )}
      </div>

      {selectedGame && (
        <PopupCard
          game={selectedGame}
          onClose={() => setSelectedGame(null)} // stäng popup
        />
      )}
    </div>
  );
};

export default GameGrid;
