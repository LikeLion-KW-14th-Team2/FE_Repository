import './Condition.css'
import { Btn } from '../components/Btn'
import { ConditionLayout } from '../components/condition/ConditionLayout'
import { useNavigate } from 'react-router-dom'

import conditionImg from '../assets/condition_img.png'

export function Condition() {
    const navigate = useNavigate()

    return (
        <ConditionLayout>
            <div className='condition-right-panel'>
                <div className='condition-content'>
                    <img
                        className='condition-icon'
                        src={conditionImg}
                        alt='졸업요건 아이콘'
                    />

                    <p className='condition-text'>
                        <span>학번/학부별 졸업요건</span>을<br />
                        분석했어요
                    </p>

                    <div className='condition-button'>
                        <Btn
                            text='졸업요건 조회하기'
                            num='1'
                            onClick={() => navigate('/ConditionMain')}
                        />
                    </div>
                </div>
            </div>
        </ConditionLayout>
    )
}