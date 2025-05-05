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
  ];

  return (
    <div>
      <header className="header">
        <h2>Free to game</h2>
      </header>

      <section className="section-grid">
        <nav className="nav">
          <ul>
            <h3>Genre</h3>
            <br />
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
      </section>
      <Footer />
    </div>
  );
};

export default Home;
