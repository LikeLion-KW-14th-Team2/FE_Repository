import './Simulation.css'
import { Btn } from '../components/Btn'
import { SimulationLayout } from '../components/simulation/SimulationLayout'
import { useNavigate } from 'react-router-dom'

import simulationImg from '../assets/simulation_img.png'

export function Simulation() {
    const navigate = useNavigate()

    return (
        <SimulationLayout>
            <div className='simulation-landing-panel'>
                <div className='simulation-content'>
                    <img
                        className='simulation-icon'
                        src={simulationImg}
                        alt='시뮬레이션 아이콘'
                    />

                    <p className='simulation-text'>
                        몇 가지 정보를 입력하면
                        <br />
                        <span>졸업 가능 확률</span>을 구할 수 있어요
                    </p>

                    <div className='simulation-button'>
                        <Btn
                            text='시뮬레이션 입력하기'
                            num='1'
                            onClick={() => navigate('/SimulationMain')}
                        />
                    </div>
                </div>
            </div>
        </SimulationLayout>
    )
}