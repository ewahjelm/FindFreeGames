import React, { useEffect, useState } from 'react'
import { gamesData } from '../data/games' // Importing the mock data
import GameCard from '../components/GameCard'
const GameGrid = () => {
     const [games, setGames] = useState([])

        useEffect(() => {
            setGames(gamesData) // Mock fetching games
        }, [])
    return (
        <div className="game-list">
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    )
}

export default GameGrid
