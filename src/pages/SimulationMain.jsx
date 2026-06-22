import './SimulationMain.css'
import { Header } from '../components/header'
import { useState } from 'react'
import './SimulationMain.css'

import { SimulationInput } from '../components/simulation/SimulationInput'
import { SimulationSummary } from '../components/simulation/SimulationSummary'
import { SimulationDetail } from '../components/simulation/SimulationDetail'

import map from '../assets/Map.png'
import simulationFlag from '../assets/flags/Simulation_Flag.png'
import torn from '../assets/Group 209 1.png'
import menuButton3 from '../assets/메뉴 버튼 3.png'
import menuButton4 from '../assets/메뉴 버튼 4.png'
import menuButton5 from '../assets/메뉴 버튼 5.png'
import menuButton6 from '../assets/메뉴 버튼 6.png'

export function SimulationMain() {
    const [majorCount, setMajorCount] = useState(0)
    const [extraCount, setExtraCount] = useState(0)
    const [retakeInput, setRetakeInput] = useState('')
    const [targetGpa, setTargetGpa] = useState('')

    const [screen, setScreen] = useState('input')
    const [probability, setProbability] = useState(0)

    const calculateProbability = () => {
        const gpa = Number(targetGpa)

        let score = 10

        score += majorCount * 5
        score += extraCount * 3

        if (!Number.isNaN(gpa) && targetGpa.trim() !== '') {
            score += gpa * 10
        }

        if (retakeInput.trim() !== '') {
            score += 10
        }

        return Math.min(100, Math.max(0, Math.round(score)))
    }

    const handleStartSimulation = () => {
        const result = calculateProbability()

        setProbability(result)
        setScreen('summary')
    }

    const handleResetSimulation = () => {
        setScreen('input')
    }

    return (
        <div className='simulation-main-page'>
            <img className='simulation-main-map' src={map} alt='배경 지도' />
            <img className='simulation-main-torn' src={torn} alt='찢어진 화면' />
            <img
                className='simulation-main-flag'
                src={simulationFlag}
                alt='졸업 시뮬레이션'
            />

            <Header />

            <div className='simulation-right-panel'>
                <div className='simulation-content-frame'>
                    {screen === 'input' && (
                        <SimulationInput
                            majorCount={majorCount}
                            setMajorCount={setMajorCount}
                            extraCount={extraCount}
                            setExtraCount={setExtraCount}
                            retakeInput={retakeInput}
                            setRetakeInput={setRetakeInput}
                            targetGpa={targetGpa}
                            setTargetGpa={setTargetGpa}
                            onStartSimulation={handleStartSimulation}
                            menuButton3={menuButton3}
                        />
                    )}

                    {screen === 'summary' && (
                        <SimulationSummary
                            probability={probability}
                            onReset={handleResetSimulation}
                            onDetail={() => setScreen('detail')}
                            menuButton4={menuButton4}
                            menuButton5={menuButton5}
                        />
                    )}

                    {screen === 'detail' && (
                        <SimulationDetail
                            probability={probability}
                            onReset={handleResetSimulation}
                            menuButton6={menuButton6}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}