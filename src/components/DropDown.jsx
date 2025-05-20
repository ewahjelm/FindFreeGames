import React, { useState } from "react";

const DropDown = () => {
  //   const [platformDropdowns, setPlatformDropdowns] = useState([]);
  //   const [genreDropdowns, setGenreDropdowns] = useState([]);

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
  return (
    <>
      <nav className="dropdown">
        <label>Choose genre:</label>
        <select>
          {thisGenre.map((genre) => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>
      </nav>
      {/* <nav className="nav">
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
      </nav> */}
    </>
  );
};

export default DropDown;
