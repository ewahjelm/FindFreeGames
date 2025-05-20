import React from "react";

function popupCard() {
  return (
    <div className="popup-card">
      <header>
        <div>Favorited</div>
        <h1>Title</h1>
        <button>X</button>
      </header>
      <main>
        <img />
        <p>Short description</p>
        <button>Play</button>
      </main>
    </div>
  );
}

export default popupCard;
