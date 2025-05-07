import Footer from "../components/Footer";
import GameGrid from "../components/GameGrid";

const Home = () => {
  const thisGenre = [
    "mmorpg",
    "Shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];
  const thisPlatform = ["Browser", "PC"];

  return (
    <div>
      <header className="header">
        <h2>Free to game</h2>
      </header>

      <div className="main-layout">
        <nav className="nav">
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
                  />
                  {genre}
                </label>
              </li>
            ))}
          </ul>
        </nav>
        <GameGrid />
      </div>
    </div>
  );
};

export default Home;
