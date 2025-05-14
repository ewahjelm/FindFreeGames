import { FaStar, FaRegStar } from "react-icons/fa";

const GameCard = ({ game, isFavorite, toggleFavorite }) => {
  return (
    <div className="game-card">
      <img
        src={game.thumbnail}
        alt={game.title}
        className="game-image"
        width="150"
      />
      <h3>{game.title}</h3>
      <span onClick={() => toggleFavorite(game.id)}>
        {isFavorite ? <FaStar /> : <FaRegStar />}
      </span>
      <p>{game.genre}</p>
    </div>
  );
};

export default GameCard;
