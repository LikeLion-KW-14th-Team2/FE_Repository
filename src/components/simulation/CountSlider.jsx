import './CountSlider.css'

export function CountSlider({ label, value, onChange }) {
    const max = 6

    /*
        Figma 기준:
        전체 320px, 숫자 원 40px
        숫자 원 중심은 20px ~ 300px 범위에서 이동
    */
    const badgeSize = 40
    const sliderWidth = 320

    const badgeLeft =
        badgeSize / 2 +
        (value / max) * (sliderWidth - badgeSize)

    const handleCountClick = () => {
        onChange(value === max ? 0 : value + 1)
    }

    return (
        <div className='simulation-count-box'>
            <label>{label}</label>

            <div className='simulation-slider-wrap'>
                <div className='simulation-slider-line' />

                <button
                    type='button'
                    className='simulation-count-badge'
                    style={{ left: `${badgeLeft}px` }}
                    onClick={handleCountClick}
                    aria-label={`${label}: 현재 ${value}개`}
                >
                    {value}
                </button>
            </div>
        </div>
    )
}