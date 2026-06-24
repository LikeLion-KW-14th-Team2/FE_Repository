import { useState } from 'react'
import './ConditionBox.css'

export function ConditionBox() {
    const [selectedYear, setSelectedYear] = useState('20-23학번')

    const yearTabs = ['20-23학번', '24학번', '25학번', '26학번']

    return (
        <section className='condition-box'>
            <div className='condition-box-tabs'>
                {yearTabs.map((year) => (
                    <button
                        type='button'
                        key={year}
                        className={
                            selectedYear === year
                                ? 'condition-box-tab active'
                                : 'condition-box-tab'
                        }
                        onClick={() => setSelectedYear(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>

            <div
                className='condition-box-result'
                data-year={selectedYear}
            >
            </div>
        </section>
    )
}