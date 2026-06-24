import { Header } from '../header'

import map from '../../assets/Map.png'
import simulationFlag from '../../assets/Simulation_Flag.png'
import torn from '../../assets/Group 209 1.png'

import './SimulationLayout.css'

export function SimulationLayout({ children }) {
    return (
        <div className='simulation-layout'>
            <img
                className='simulation-layout-map'
                src={map}
                alt='배경 지도'
            />

            <img
                className='simulation-layout-torn'
                src={torn}
                alt='찢어진 화면'
            />

            <img
                className='simulation-layout-flag'
                src={simulationFlag}
                alt='졸업 시뮬레이션'
            />

            <Header />

            {children}
        </div>
    )
}