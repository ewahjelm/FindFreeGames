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
        'pve',
        'pixel',
        'voxel',
        'zombie',
        'turn-based',
        'first-person',
        'third-person',
        'top-down',
        'tank',
        'space',
        'sailing',
        'side-scroller',
        'superhero',
        'permadeath',
        'card',
        'battle-royale',
        'mmo',
        'mmofps',
        'mmotps',
        '3d',
        '2d',
        'anime',
        'fantasy',
        'sci-fi',
        'fighting',
        'action-rpg',
        'action',
        'military',
        'martial-arts',
        'flight',
        'low-spec',
        'tower-defense',
        'horror',
        'mmorts'

    ]


    return (
        <div>
            <header className="header">
                <h2>Free to game</h2>
            </header>

            <section>
                <p>Genre</p>
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
