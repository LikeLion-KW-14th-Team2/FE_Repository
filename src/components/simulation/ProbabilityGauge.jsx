import './ProbabilityGauge.css'

import gauge20 from '../../assets/Probability_Gauge_20.png'
import gauge40 from '../../assets/Probability_Gauge_40.png'
import gauge60 from '../../assets/Probability_Gauge_60.png'
import gauge80 from '../../assets/Probability_Gauge_80.png'

const gaugeByProbability = {
    20: {
        image: gauge20,
        level: '20',
    },
    40: {
        image: gauge40,
        level: '40',
    },
    60: {
        image: gauge60,
        level: '60',
    },
    80: {
        image: gauge80,
        level: '80',
    },
}

export function ProbabilityGauge({ probability }) {
    const gauge = gaugeByProbability[probability] ?? gaugeByProbability[20]

    return (
        <div className={`simulation-gauge-box gauge-level-${gauge.level}`}>
            <img
                className='simulation-gauge-image'
                src={gauge.image}
                alt={`${probability}% 졸업 가능 확률`}
            />


            <div className='simulation-gauge-percent'>
                {probability}%
            </div>
        </div>
    )
}