import './Simulation.css'
import { Header } from '../components/header'
import { useNavigate } from 'react-router-dom'

import map from '../assets/Map.png'
import simulationFlag from '../assets/flags/Simulation_Flag.png'
import torn from '../assets/Group 209 1.png'
import group79 from '../assets/Group 79.png'
import menuButton2 from '../assets/메뉴 버튼 2.png'

export function Simulation() {
    const navigate = useNavigate()

    return (
        <div className='simulation-page'>
            <img 
                className='simulation-bg-map' 
                src={map} 
                alt="배경 지도" 
            />

            <img 
                className='simulation-torn' 
                src={torn} 
                alt="찢어진 화면" 
            />

            <img 
                className='simulation-flag' 
                src={simulationFlag} 
                alt="졸업 시뮬레이션" 
            />

            <Header />

            <div className='simulation-content'>
                <img 
                    className='simulation-icon' 
                    src={group79} 
                    alt="시뮬레이션 아이콘" 
                />

                <p className='simulation-text'>
                    몇 가지 정보를 입력하면<br />
                    <span>졸업 가능 확률</span>을 구할 수 있어요
                </p>

                <button 
                    className='simulation-button'
                    onClick={() => navigate('/SimulationMain')}
                >
                    <img 
                        src={menuButton2} 
                        alt="시뮬레이션 입력하기" 
                    />
                </button>
            </div>
        </div>
    )
}