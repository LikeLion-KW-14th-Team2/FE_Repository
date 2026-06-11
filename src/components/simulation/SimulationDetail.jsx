import './SimulationDetail.css'

function getProbabilityInfo(probability) {
    if (probability < 30) {
        return {
            main: '#ff3333',
            light: '#ffb2b2',
        }
    }

    if (probability < 60) {
        return {
            main: '#ff8a1f',
            light: '#ffd0a0',
        }
    }

    if (probability < 80) {
        return {
            main: '#ffd400',
            light: '#fff0a0',
        }
    }

    return {
        main: '#34c95f',
        light: '#bff1d0',
    }
}

export function SimulationDetail({ probability, onReset, menuButton6 }) {
    const info = getProbabilityInfo(probability)

    const resultItems = [
        {
            title: '총 학점',
            desc: '124학점 · 총 140학점',
            status: '완료',
            done: true,
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
            <div className='simulation-detail-top'>
                <h2 className='simulation-detail-title'>졸업 가능 확률</h2>

                <div className='simulation-detail-progress-row'>
                    <div className='simulation-detail-progress'>
                        <div
                            className='simulation-detail-progress-fill'
                            style={{
                                width: `${probability}%`,
                                background: `linear-gradient(90deg, ${info.light}, ${info.main})`,
                            }}
                        />
                    </div>

                    <span
                        className='simulation-detail-percent'
                        style={{ color: info.main }}
                    >
                        {probability}%
                    </span>
                </div>
            </div>

            <div className='simulation-detail-divider' />

            <div className='simulation-detail-list'>
                {resultItems.map((item) => (
                    <div className='simulation-detail-item' key={item.title}>
                        <div>
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

            <button
                type='button'
                className='simulation-detail-reset-button'
                onClick={onReset}
            >
                <img src={menuButton6} alt='시뮬레이션 다시 입력하기' />
            </button>
        </div>
    )
}