import GameGrid from '../components/GameGrid'

const Home = () => {
    const thisGenre = [
        'Genre',
        'mmorpg',
        'Shooter',
        'strategy',
        'moba',
        'racing',
        'sports',
        'social',
        'sandbox',
        'open-world',
        'survival',
        'pvp',
        'pve'
    ]


    return (
        <div>
            <header className="header">
                <h2>Free to game</h2>
            </header>

            <section>
                <nav className="nav">
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
            </section>

          
        </div>
    )
}

export default Home
