import { FaStar } from 'react-icons/fa'


const FavoriteToggle = ({ showFavorites, setShowFavorites, favorites }) => {
    return (
        <div
            onClick={() => setShowFavorites(!showFavorites)}
            style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                userSelect: 'none',
                fontWeight: 'bold'
            }}
            title={showFavorites ? 'Show all games' : 'Show favorites only'}
            aria-label="Toggle favorites filter"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                    setShowFavorites(!showFavorites)
            }}
        >
            <FaStar color={showFavorites ? 'gold' : 'gray'} size={24} />
            <span>{favorites.length}</span>
        </div>
    )
}

export default FavoriteToggle
