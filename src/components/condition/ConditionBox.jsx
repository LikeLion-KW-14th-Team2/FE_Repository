import './ConditionBox.css'

const yearTabs = [
    { value: '20-23', label: '20-23학번' },
    { value: '24', label: '24학번' },
    { value: '25', label: '25학번' },
    { value: '26', label: '26학번' },
]

const departmentTabs = [
    { value: 'jeongyung', label: '정보융합학부' },
    { value: 'computer', label: '컴퓨터정보공학부' },
    { value: 'software', label: '소프트웨어학부' },
]

export function ConditionBox({
    selectedYear,
    onSelectYear,
    selectedDepartment,
    onSelectDepartment,
    requirement,
    isLoading,
    error,
}) {
    const requiredLiberalCourses =
        requirement?.requiredLiberalCourses ?? []

    const balanceAreas = requirement?.balanceAreas ?? []

    const graduationProjectOptions =
        requirement?.graduationProjectOptions ?? []

    const additionalRequirements =
        requirement?.additionalRequirements ?? []

    return (
        <section className='condition-box'>
            <div className='condition-box-filters'>
                <div className='condition-box-tabs'>
                    {yearTabs.map((year) => (
                        <button
                            type='button'
                            key={year.value}
                            className={
                                selectedYear === year.value
                                    ? 'condition-box-tab active'
                                    : 'condition-box-tab'
                            }
                            onClick={() => onSelectYear(year.value)}
                        >
                            {year.label}
                        </button>
                    ))}
                </div>

                <div className='condition-department-select'>
                    <p>학부 선택</p>

                    <div className='condition-department-tabs'>
                        {departmentTabs.map((department) => (
                            <button
                                type='button'
                                key={department.value}
                                className={
                                    selectedDepartment === department.value
                                        ? 'condition-department-tab active'
                                        : 'condition-department-tab'
                                }
                                onClick={() =>
                                    onSelectDepartment(department.value)
                                }
                            >
                                {department.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='condition-box-result'>
                {isLoading && (
                    <p className='condition-message'>
                        졸업요건을 조회 중입니다.
                    </p>
                )}

                {!isLoading && error && (
                    <p className='condition-message'>{error}</p>
                )}

                {!isLoading && !error && requirement && (
                    <article className='condition-document'>
                        <header className='condition-document-header'>
                            <p>졸업요건 조회</p>

                            <h2>
                                {requirement.admissionYear}학번 졸업요건
                            </h2>

                            <span>
                                {requirement.college} · {requirement.department}
                            </span>
                        </header>

                        <section className='condition-credit-summary'>
                            <div className='condition-credit-card'>
                                <span>총 졸업학점</span>
                                <strong>{requirement.totalCredit}학점</strong>
                            </div>

                            <div className='condition-credit-card'>
                                <span>전공학점</span>
                                <strong>{requirement.majorCredit}학점</strong>
                            </div>

                            <div className='condition-credit-card'>
                                <span>교양학점</span>
                                <strong>
                                    {requirement.liberalArtsCredit}학점
                                </strong>
                            </div>

                            <div className='condition-credit-card'>
                                <span>남은 학점</span>
                                <strong>
                                    {requirement.balanceCredit}학점
                                </strong>
                            </div>
                        </section>

                        {requiredLiberalCourses.length > 0 && (
                            <section className='condition-document-section'>
                                <h3>필수 교양 과목</h3>

                                <ul>
                                    {requiredLiberalCourses.map((course) => (
                                        <li key={course}>{course}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {balanceAreas.length > 0 && (
                            <section className='condition-document-section'>
                                <h3>이수 영역</h3>

                                <p className='condition-section-text'>
                                    남은 최소 이수 영역:{' '}
                                    {requirement.balanceMinAreas}개
                                </p>

                                <ul>
                                    {balanceAreas.map((area) => (
                                        <li key={area}>{area}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {graduationProjectOptions.length > 0 && (
                            <section className='condition-document-section'>
                                <h3>졸업 요건</h3>

                                <ul>
                                    {graduationProjectOptions.map((option) => (
                                        <li key={option}>{option}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {additionalRequirements.length > 0 && (
                            <section className='condition-document-section'>
                                <h3>추가 안내</h3>

                                <ul>
                                    {additionalRequirements.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </article>
                )}
            </div>
        </section>
    )
}