import './SimulationSummary.css'
import { ProbabilityGauge } from './ProbabilityGauge'

export function SimulationSummary({
    probability,
    onReset,
    onDetail,
    menuButton4,
    menuButton5,
}) {
    return (
        <div className='simulation-result-area'>
            <h2 className='simulation-result-title'>
                홍길동 님의 졸업 가능 확률은
                <br />
                다음과 같아요
            </h2>

            <ProbabilityGauge probability={probability} />

            <div className='simulation-result-buttons'>
                <button
                    type='button'
                    className='simulation-result-image-button'
                    onClick={onReset}
                >
                    <img src={menuButton4} alt='시뮬레이션 다시 입력하기' />
                </button>

                <button
                    type='button'
                    className='simulation-result-image-button'
                    onClick={onDetail}
                >
                    <img src={menuButton5} alt='상세 결과 조회하기' />
                </button>
            </div>
        </div>
    )
}