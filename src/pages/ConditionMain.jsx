import './ConditionMain.css'
import { useState } from 'react'

import { ConditionLayout } from '../components/condition/ConditionLayout'
import { ConditionBox } from '../components/condition/ConditionBox'

export function ConditionMain() {
    const [selectedYear, setSelectedYear] = useState('20-23')

    return (
        <ConditionLayout>
            <main className='condition-main-panel'>
                <ConditionBox
                    selectedYear={selectedYear}
                    onSelectYear={setSelectedYear}
                />
            </main>
        </ConditionLayout>
    )
}