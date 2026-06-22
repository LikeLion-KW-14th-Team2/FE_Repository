import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Guide.css'

import { Header } from '../components/header'
import { GuideLanding } from '../components/guide/GuideLanding'
import { GuideMapSlide } from '../components/guide/GuideMapSlide'
import { GuideCardSlide } from '../components/guide/GuideCardSlide'
import { GuideCaptionBar } from '../components/guide/GuideCaptionBar'
import { GUIDE_STEPS, MAP_POINTS } from '../components/guide/guideContent'

export function Guide() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  const totalSteps = GUIDE_STEPS.length
  const currentStep = step > 0 ? GUIDE_STEPS[step - 1] : null

  const handleStart = () => setStep(1)

  const handlePrev = () => {
    // 가이드1에서 이전으로 가면 랜딩 화면(step 0)으로 돌아감
    setStep((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    if (step >= totalSteps) {
      // 마지막 가이드5에서 다음으로 넘기면 가이드를 끝내고 홈(지도)으로 이동
      navigate('/Home')
      return
    }
    setStep((prev) => prev + 1)
  }

  return (
    <div className="guide-main-page">
      <Header />

      {step === 0 && <GuideLanding onStart={handleStart} />}

      {currentStep && (
        <div className="guide-slide-wrapper">
          {currentStep.type === 'map' && (
            <GuideMapSlide
              points={MAP_POINTS}
              interactive={currentStep.interactive}
              activePointId={currentStep.activePointId}
            />
          )}

          {currentStep.type === 'card' && (
            <GuideCardSlide cards={currentStep.cards} />
          )}

          <GuideCaptionBar
            caption={currentStep.caption}
            onPrev={handlePrev}
            onNext={handleNext}
            isLast={step === totalSteps}
          />
        </div>
      )}
    </div>
  )
}