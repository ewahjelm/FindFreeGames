import React from "react";

const PopupCard = ({ game, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{game.title}</h2>
        <img src={game.thumbnail} alt={game.title} />
        <p>{game.short_description}</p>
        <button
          className="play-button-popup"
          onClick={() => window.open(game.game_url, "_blank")}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
