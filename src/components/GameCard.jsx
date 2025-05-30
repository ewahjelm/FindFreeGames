import { FaStar, FaRegStar } from "react-icons/fa";

const GameCard = ({ game, isFavorite, toggleFavorite, onClick }) => {
  const handlePlayNow = () => {
    window.open(game.game_url, "_blank");
  };

  return (
    <div className="game-card" onClick={onClick}>
      <img
        src={game.thumbnail}
        alt={game.title}
        className="game-image" //används inte !!
        width="150" // inline css !!
      />
      <h3 titel={game.title}>
        {/* {game.title.length > 10 ? game.title.slice(0, 10) + "..." : game.title} */}
        {game.title.length > 18 ? game.title.slice(0, 18) + "..." : game.title}
      </h3>
      <span
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(game.id);
        }}
        className={`favorite-icon ${isFavorite ? "is-favorite" : ""}`}
      >
        {isFavorite ? <FaStar /> : <FaRegStar />}
      </span>
      <p>{game.genre}</p>
      <button
        className="play-button"
        onClick={(e) => {
          e.stopPropagation();
          handlePlayNow();
        }}
      >
        Play Now
      </button>
    </div>
  );
};

export default GameCard;
