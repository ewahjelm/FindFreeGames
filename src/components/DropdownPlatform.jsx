import { useState } from 'react'


const DropdownPlatform = ({ options, selected, onChange }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="dropdown" onMouseLeave={() => setOpen(false)}>
            <button onClick={() => setOpen(!open)} className="dropdown-toggle">
                Select Platform ▼
            </button>

            {open && (
                <div className="dropdown-menu">
                    {options.map((platform) => (
                        <label key={platform} className="dropdown-item">
                            <input
                                type="checkbox"
                                value={platform}
                                checked={selected.includes(platform)}
                                onChange={onChange}
                            />
                            {platform}
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownPlatform
