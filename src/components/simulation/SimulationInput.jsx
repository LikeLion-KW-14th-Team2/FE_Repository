import { useState } from 'react'

import './SimulationInput.css'
import { CountSlider } from './CountSlider'
import { Btn } from '../Btn'

export function SimulationInput({
    majorCount,
    setMajorCount,
    extraCount,
    setExtraCount,
    retakeCourses,
    setRetakeCourses,
    targetGpa,
    setTargetGpa,
    onStartSimulation,
    onGoToMyPage,
}) {
    const [courseQuery, setCourseQuery] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [showGpaError, setShowGpaError] = useState(false)

    const trimmedQuery = courseQuery.trim()

    const isAlreadyAdded = retakeCourses.some(
        (course) => course === trimmedQuery
    )

    const handleAddCourse = () => {
        if (trimmedQuery === '' || isAlreadyAdded) {
            return
        }

        setRetakeCourses((previousCourses) => [
            ...previousCourses,
            trimmedQuery,
        ])

        setCourseQuery('')
        setIsDropdownOpen(false)
    }

    const handleRemoveCourse = (targetCourse) => {
        setRetakeCourses((previousCourses) =>
            previousCourses.filter((course) => course !== targetCourse)
        )
    }

    const handleCourseKeyDown = (event) => {
        if (event.key !== 'Enter') {
            return
        }

        event.preventDefault()
        handleAddCourse()
    }

    const isGpaValid = () => {
        const trimmedGpa = targetGpa.trim()

        return (
            trimmedGpa !== '' &&
            /^\d+(\.\d{1})?$/.test(trimmedGpa)
        )
    }

    const handleStartClick = () => {
        if (!isGpaValid()) {
            setShowGpaError(true)
            return
        }

        onStartSimulation()
    }

    return (
        <>
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
                    <label className='simulation-section-title'>
                        재수강 과목
                    </label>

                    <div className='simulation-retake-search'>
                        <input
                            className='simulation-text-input'
                            type='text'
                            placeholder='재수강 과목을 입력하세요'
                            value={courseQuery}
                            onChange={(event) => {
                                setCourseQuery(event.target.value)
                                setIsDropdownOpen(true)
                            }}
                            onFocus={() => setIsDropdownOpen(true)}
                            onKeyDown={handleCourseKeyDown}
                        />

                        {isDropdownOpen &&
                            trimmedQuery !== '' &&
                            !isAlreadyAdded && (
                                <div className='simulation-course-dropdown'>
                                    <button
                                        type='button'
                                        onMouseDown={(event) =>
                                            event.preventDefault()
                                        }
                                        onClick={handleAddCourse}
                                    >
                                        {trimmedQuery}
                                    </button>
                                </div>
                            )}

                        {isDropdownOpen &&
                            trimmedQuery !== '' &&
                            isAlreadyAdded && (
                                <div className='simulation-course-dropdown'>
                                    <p>이미 추가한 과목입니다.</p>
                                </div>
                            )}
                    </div>

                    <div className='simulation-retake-list'>
                        {retakeCourses.map((course) => (
                            <div
                                className='simulation-retake-chip'
                                key={course}
                            >
                                <span>{course}</span>

                                <button
                                    type='button'
                                    aria-label={`${course} 삭제`}
                                    onClick={() =>
                                        handleRemoveCourse(course)
                                    }
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='simulation-gpa-section'>
                    <label className='simulation-section-title'>
                        목표 학기 평점<span>*</span>
                    </label>

                    <input
                        className='simulation-text-input'
                        type='text'
                        inputMode='decimal'
                        placeholder='소수점 첫째 자리까지 입력하세요'
                        value={targetGpa}
                        onChange={(event) =>
                            setTargetGpa(event.target.value)
                        }
                    />
                </div>

                <div className='simulation-bottom-buttons'>
                    <button
                        type='button'
                        className='simulation-info-button'
                        onClick={onGoToMyPage}
                    >
                        내 정보 조회하기
                    </button>

                    <div className='simulation-start-button'>
                        <Btn
                            text='시뮬레이션 시작하기'
                            num='1'
                            onClick={handleStartClick}
                        />
                    </div>
                </div>
            </div>

            {showGpaError && (
                <div
                    className='simulation-error-overlay'
                    role='dialog'
                    aria-modal='true'
                    aria-labelledby='simulation-error-title'
                >
                    <div className='simulation-error-modal'>
                        <h2 id='simulation-error-title'>
                            목표 학기 평점을 다시 입력해주세요
                        </h2>

                        <p>
                            목표 학기 평점은 소수점 첫째 자리까지만
                            입력할 수 있어요
                        </p>

                        <button
                            type='button'
                            className='simulation-error-confirm'
                            onClick={() => setShowGpaError(false)}
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}