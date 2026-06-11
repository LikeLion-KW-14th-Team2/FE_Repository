import './ProbabilityGauge.css'

function getProbabilityInfo(probability) {
    if (probability < 30) {
        return {
            main: '#ff3333',
            light: '#ffb2b2',
            gradientId: 'veryLowGradient',
        }
    }

    if (probability < 60) {
        return {
            main: '#ff8a1f',
            light: '#ffd0a0',
            gradientId: 'lowGradient',
        }
    }

    if (probability < 80) {
        return {
            main: '#ffd400',
            light: '#fff0a0',
            gradientId: 'highGradient',
        }
    }

    return {
        main: '#34c95f',
        light: '#bff1d0',
        gradientId: 'veryHighGradient',
    }
}

export function ProbabilityGauge({ probability }) {
    const info = getProbabilityInfo(probability)

    return (
        <div className='simulation-gauge-box'>
            <svg
                className='simulation-gauge-svg'
                viewBox='0 0 520 320'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <defs>
                    <linearGradient
                        id={info.gradientId}
                        x1='80'
                        y1='240'
                        x2='440'
                        y2='70'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop offset='0%' stopColor={info.light} />
                        <stop offset='100%' stopColor={info.main} />
                    </linearGradient>
                </defs>

                <path
                    className='simulation-gauge-track'
                    d='M 80 240 A 180 180 0 0 1 440 240'
                    pathLength='100'
                />

                <path
                    className='simulation-gauge-progress'
                    d='M 80 240 A 180 180 0 0 1 440 240'
                    pathLength='100'
                    stroke={`url(#${info.gradientId})`}
                    strokeDasharray={`${probability} 100`}
                />
            </svg>

            <div
                className='simulation-gauge-percent'
                style={{ color: info.main }}
            >
                {probability}%
            </div>
        </div>
    )
}