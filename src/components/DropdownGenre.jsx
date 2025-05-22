import { useState } from 'react'


const DropdownGenre = ({ options, selected, onChange }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="dropdown" onMouseLeave={() => setOpen(false)}>
            <button onClick={() => setOpen(!open)} className="dropdown-toggle">
                Select Genre ▼
            </button>

            {open && (
                <div className="dropdown-menu">
                    {options.map((genre) => (
                        <label key={genre} className="dropdown-item">
                            <input
                                type="checkbox"
                                value={genre}
                                checked={selected.includes(genre)}
                                onChange={onChange}
                            />
                            {genre}
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownGenre
