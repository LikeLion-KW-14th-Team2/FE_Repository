import './SimulationDetail.css'
import { Btn } from '../Btn'

import probabilityBarBase from '../../assets/Probability_Bar_Base.png'
import probabilityBar20 from '../../assets/Probability_Bar_20.png'
import probabilityBar40 from '../../assets/Probability_Bar_40.png'
import probabilityBar60 from '../../assets/Probability_Bar_60.png'
import probabilityBar80 from '../../assets/Probability_Bar_80.png'

function getProbabilityBar(probability) {
    const barImages = {
        20: probabilityBar20,
        40: probabilityBar40,
        60: probabilityBar60,
        80: probabilityBar80,
    }

    return barImages[probability] ?? probabilityBar20
}

function getProbabilityColor(probability) {
    const colors = {
        20: '#FF383C',
        40: '#FF8D28',
        60: '#FFCC00',
        80: '#34C759',
    }

    return colors[probability] ?? '#FF383C'
}

export function SimulationDetail({ probability, onReset }) {
    const barImage = getProbabilityBar(probability)
    const probabilityColor = getProbabilityColor(probability)

    const resultItems = [
        {
            title: '총 학점',
            desc: '124학점 · 총 133학점',
            status: '미완료',
            done: false,
        },
        {
            title: '전공 필수',
            desc: '45학점 · 총 60학점',
            status: '미완료',
            done: false,
        },
        {
            title: '교양 필수',
            desc: '20학점 · 총 22학점',
            status: '미완료',
            done: false,
        },
        {
            title: '균형 교양',
            desc: '1개 영역 미이수',
            status: '미완료',
            done: false,
        },
    ]

    return (
        <div className='simulation-detail-area'>
            <div className='simulation-detail-content'>
                <div className='simulation-detail-top'>
                    <h2 className='simulation-detail-title'>
                        졸업 가능 확률
                    </h2>

                    <div className='simulation-detail-progress-row'>
                        <div className='simulation-detail-progress'>
                            <img
                                className='simulation-detail-progress-base'
                                src={probabilityBarBase}
                                alt=''
                            />

                            <img
                                className='simulation-detail-progress-fill'
                                src={barImage}
                                alt=''
                            />
                        </div>

                        <span
                            className='simulation-detail-percent'
                            style={{ color: probabilityColor }}
                        >
                            {probability}%
                        </span>
                    </div>
                </div>

                <div
                    className='simulation-detail-divider'
                    aria-hidden='true'
                />

                <div className='simulation-detail-list'>
                    {resultItems.map((item) => (
                        <div
                            className='simulation-detail-item'
                            key={item.title}
                        >
                            <div className='simulation-detail-item-copy'>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>

                            <span
                                className={
                                    item.done
                                        ? 'simulation-status-badge done'
                                        : 'simulation-status-badge undone'
                                }
                            >
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='simulation-detail-reset-button'>
                <Btn
                    text='시뮬레이션 다시 입력하기'
                    num='1'
                    onClick={onReset}
                />
            </div>
        </div>
    )
}