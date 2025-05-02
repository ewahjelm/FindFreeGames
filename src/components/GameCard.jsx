const GameCard = ({game}) => {
    return (
        <div  className="game-card">
            <img
                src={game.image}
                alt={game.title}
                className="game-image"
                width="150"
            />
            <h3>{game.title}</h3>
            <p>{game.short_description}</p>
        </div>
    )
}

export default GameCard
