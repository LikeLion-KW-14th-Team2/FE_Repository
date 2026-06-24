import './ConditionMain.css'
import { useNavigate, useParams } from 'react-router-dom'

import { ConditionLayout } from '../components/condition/ConditionLayout'
import { ConditionBox } from '../components/condition/ConditionBox'

const VALID_YEARS = ['20-23', '24', '25', '26']

export function ConditionMain() {
    const navigate = useNavigate()
    const { year } = useParams()

    const selectedYear = VALID_YEARS.includes(year)
        ? year
        : '20-23'

    const handleSelectYear = (nextYear) => {
        if (nextYear === selectedYear) return

        navigate(`/ConditionMain/${nextYear}`)
    }

    return (
        <ConditionLayout>
            <main className='condition-main-panel'>
                <div
                    key={selectedYear}
                    className='condition-main-transition'
                >
                    <ConditionBox
                        selectedYear={selectedYear}
                        onSelectYear={handleSelectYear}
                    />
                </div>
            </main>
        </ConditionLayout>
    )
}