import './SimulationInput.css'
import { CountSlider } from './CountSlider'

export function SimulationInput({
    majorCount,
    setMajorCount,
    extraCount,
    setExtraCount,
    retakeInput,
    setRetakeInput,
    targetGpa,
    setTargetGpa,
    onStartSimulation,
    menuButton3,
}) {
    return (
        <div className='simulation-form-area'>
            <div className='simulation-count-section'>
                <CountSlider
                    label='다음 학기 전공 과목 수'
                    value={majorCount}
                    onChange={setMajorCount}
                />

                <CountSlider
                    label='추가 교양 과목 수'
                    value={extraCount}
                    onChange={setExtraCount}
                />
            </div>

            <div className='simulation-retake-section'>
                <label className='simulation-section-title'>재수강 과목</label>

                <input
                    className='simulation-text-input simulation-retake-input'
                    type='text'
                    placeholder="'+ 새 과목 추가'를 눌러 재수강 과목을 추가할 수 있어요"
                    value={retakeInput}
                    onChange={(e) => setRetakeInput(e.target.value)}
                />

                <div className='simulation-retake-list'>
                    <button type='button'>재수강 과목 1</button>
                    <button type='button'>재수강 과목 2</button>
                    <button type='button' className='add-retake'>
                        + 새 과목 추가
                    </button>
                </div>
            </div>

            <div className='simulation-gpa-section'>
                <label className='simulation-section-title'>
                    목표 학기 평점<span>*</span>
                </label>

                <input
                    className='simulation-text-input'
                    type='text'
                    placeholder='소수점 첫째 자리까지 입력할 수 있어요'
                    value={targetGpa}
                    onChange={(e) => setTargetGpa(e.target.value)}
                />
            </div>

            <div className='simulation-bottom-buttons'>
                <button type='button' className='simulation-info-button'>
                    내 정보 조회하기
                </button>

                <button
                    type='button'
                    className='simulation-start-button'
                    onClick={onStartSimulation}
                >
                    <img src={menuButton3} alt='시뮬레이션 시작하기' />
                </button>
            </div>
        </div>
    )
}