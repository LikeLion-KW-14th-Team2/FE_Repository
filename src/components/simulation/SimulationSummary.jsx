import './SimulationSummary.css'
import { ProbabilityGauge } from './ProbabilityGauge'
import { Btn } from '../Btn'

export function SimulationSummary({
    probability,
    onReset,
    onDetail,
}) {
    return (
        <div className='simulation-result-area'>
            <div className='simulation-result-main'>
                <h2 className='simulation-result-title'>
                    박규리 님의 졸업 가능 확률은
                    <br />
                    다음과 같아요
                </h2>

                <ProbabilityGauge probability={probability} />
            </div>

            <div className='simulation-result-buttons'>
                <div className='simulation-result-button'>
                    <Btn
                        text='시뮬레이션 다시 입력하기'
                        num='2'
                        onClick={onReset}
                    />
                </div>

                <div className='simulation-result-button'>
                    <Btn
                        text='상세 결과 조회하기'
                        num='1'
                        
                        onClick={onDetail}
                    />
                </div>
            </div>
        </div>
    )
}