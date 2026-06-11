import './Condition.css'
import { Header } from '../components/header'
import { useNavigate } from 'react-router-dom'

import map from '../assets/Map.png'
import conditionFlag from '../assets/Condition_Flag.png'
import groupIcon from '../assets/Group.png'
import torn from '../assets/Group 209 1.png'
import menuButton from '../assets/메뉴 버튼 1.png'

export function Condition() {
    const navigate = useNavigate()

    return (
        <div className='condition-page'>
            {/* 1층: 흐려진 지도 */}
            <img className='condition-bg-map' src={map} alt="배경 지도" />

            {/* 2층: 찢어진 화면 전체 이미지 */}
            <img className='condition-torn' src={torn} alt="찢어진 화면" />

            {/* 3층: 왼쪽 지도 위 졸업요건 조회 깃발 */}
            <img 
                className='condition-flag' 
                src={conditionFlag} 
                alt="졸업요건 조회" 
            />

            {/* 4층: 오른쪽 상단 버튼 */}
            <Header />

            {/* 5층: 오른쪽 중앙 내용 */}
            <div className='condition-content'>
                <img
                    className='condition-icon'
                    src={groupIcon}
                    alt="졸업요건 아이콘"
                />

                <p className='condition-text'>
                    <span>학번/학부별 졸업요건</span>을<br />
                    분석했어요
                </p>

                <button 
                    className='condition-button'
                    onClick={() => navigate('/ConditionMain')}
                >
                    <img src={menuButton} alt="졸업요건 조회하기" />
                </button>
            </div>
        </div>
    )
}