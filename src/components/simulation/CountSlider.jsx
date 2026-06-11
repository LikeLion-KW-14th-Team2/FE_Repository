import './CountSlider.css'

export function CountSlider({ label, value, onChange }) {
    const min = 0
    const max = 10
    const percent = (value / max) * 100

    return (
        <div className='simulation-count-box'>
            <label>{label}</label>

            <div className='simulation-slider-wrap'>
                <input
                    type='range'
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                />

                <span
                    className='simulation-count-badge'
                    style={{ left: `${percent}%` }}
                >
                    {value}
                </span>
            </div>
        </div>
    )
}