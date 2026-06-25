import './ConditionMain.css'
import { useEffect, useState } from 'react'

import api from '../api/axios'
import { ConditionLayout } from '../components/condition/ConditionLayout'
import { ConditionBox } from '../components/condition/ConditionBox'

const requirementEndpoints = {
    '20-23': '/api/klas/requirements/2020-2023/check',
    '24': '/api/klas/requirements/2024/check',
    '25': '/api/klas/requirements/2025/check',
    '26': '/api/klas/requirements/2026/check',
}

export function ConditionMain() {
    const [selectedYear, setSelectedYear] = useState('20-23')
    const [selectedDepartment, setSelectedDepartment] = useState('computer')
    const [requirement, setRequirement] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const getRequirement = async () => {
            setIsLoading(true)
            setError('')
            setRequirement(null)

            try {
                const response = await api.get(
                    requirementEndpoints[selectedYear],
                    {
                        params: {
                            department: selectedDepartment,
                        },
                    }
                )

                setRequirement(response.data)
            } catch (error) {
                console.error('졸업요건 조회 실패:', error)
                setError('졸업요건을 불러오지 못했습니다.')
            } finally {
                setIsLoading(false)
            }
        }

        getRequirement()
    }, [selectedYear, selectedDepartment])

    return (
        <ConditionLayout>
            <main className='condition-main-panel'>
                <ConditionBox
                    selectedYear={selectedYear}
                    onSelectYear={setSelectedYear}
                    selectedDepartment={selectedDepartment}
                    onSelectDepartment={setSelectedDepartment}
                    requirement={requirement}
                    isLoading={isLoading}
                    error={error}
                />
            </main>
        </ConditionLayout>
    )
}