import './SimulationMain.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SimulationLayout } from '../components/simulation/SimulationLayout'
import { SimulationInput } from '../components/simulation/SimulationInput'
import { SimulationSummary } from '../components/simulation/SimulationSummary'
import { SimulationDetail } from '../components/simulation/SimulationDetail'

export function SimulationMain() {
    const navigate = useNavigate()

    const [majorCount, setMajorCount] = useState(0)
    const [extraCount, setExtraCount] = useState(0)
    const [retakeCourses, setRetakeCourses] = useState([])
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

        if (retakeCourses.length > 0) {
            score += 10
        }

        return Math.min(100, Math.max(0, Math.round(score)))
    }

    const handleStartSimulation = () => {
        setProbability(calculateProbability())
        setScreen('summary')
    }

    const handleResetSimulation = () => {
        setScreen('input')
    }

    return (
        <SimulationLayout>
            <div className='simulation-right-panel'>
                <div className='simulation-content-frame'>
                    {screen === 'input' && (
                        <SimulationInput
                            majorCount={majorCount}
                            setMajorCount={setMajorCount}
                            extraCount={extraCount}
                            setExtraCount={setExtraCount}
                            retakeCourses={retakeCourses}
                            setRetakeCourses={setRetakeCourses}
                            targetGpa={targetGpa}
                            setTargetGpa={setTargetGpa}
                            onStartSimulation={handleStartSimulation}
                            onGoToMyPage={() => navigate('/MyPage')}
                        />
                    )}

                    {screen === 'summary' && (
                        <SimulationSummary
                            probability={probability}
                            onReset={handleResetSimulation}
                            onDetail={() => setScreen('detail')}
                        />
                    )}

                    {screen === 'detail' && (
                        <SimulationDetail
                            probability={probability}
                            onReset={handleResetSimulation}
                        />
                    )}
                </div>
            </div>
        </SimulationLayout>
    )
}