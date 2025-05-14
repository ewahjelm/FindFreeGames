const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <button>Favorite</button>
      <img
        src={game.thumbnail}
        alt={game.title}
        className="game-image"
        width="150"
      />
      <h3>{game.title}</h3>
      <p>{game.genre}</p>
    </div>
  );
};

export default GameCard;
