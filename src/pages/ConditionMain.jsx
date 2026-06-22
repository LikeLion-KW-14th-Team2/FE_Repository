import './ConditionMain.css'
import { Header } from '../components/header'
import { useState } from 'react'

import map from '../assets/Map.png'
import conditionFlag from '../assets/flags/Condition_Flag.png'
import torn from '../assets/Group 209 1.png'

export function ConditionMain() {
    const [selectedYear, setSelectedYear] = useState('20-23학번')

    const yearTabs = ['20-23학번', '24학번', '25학번', '26학번']

    return (
        <div className='condition-main-page'>
            <img 
                className='condition-main-map' 
                src={map} 
                alt="배경 지도" 
            />

            <img 
                className='condition-main-flag' 
                src={conditionFlag} 
                alt="졸업요건 조회" 
            />

            <img 
                className='condition-main-torn' 
                src={torn} 
                alt="찢어진 화면" 
            />

            <Header />

            <div className='condition-main-content'>
                <div className='condition-year-tabs'>
                    {yearTabs.map((year) => (
                        <button
                            key={year}
                            className={
                                selectedYear === year
                                    ? 'condition-year-tab active'
                                    : 'condition-year-tab'
                            }
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <div className='condition-result-box'>
                    {/* 
                        나중에 API 연결하면 여기 안에 졸업요건 내용 렌더링하면 됨.
                        selectedYear 값에 따라 API 요청 가능.
                    */}
                </div>
            </div>
        </div>
    )
}