import { Header } from '../header'

import map from '../../assets/Map.png'
import conditionFlag from '../../assets/flags/Condition_Flag.png'
import torn from '../../assets/Group 209 1.png'

import './ConditionLayout.css'

export function ConditionLayout({ children }) {
    return (
        <div className='condition-layout'>
            <img
                className='condition-layout-map'
                src={map}
                alt='배경 지도'
            />

            <img
                className='condition-layout-torn'
                src={torn}
                alt='찢어진 화면'
            />

            <img
                className='condition-layout-flag'
                src={conditionFlag}
                
                alt='졸업요건 조회'
            />

            <Header />

            {children}
        </div>
    )
}