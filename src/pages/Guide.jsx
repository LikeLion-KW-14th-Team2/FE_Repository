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
    setStep((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    if (step >= totalSteps) {
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
          {/* 💡 수정: GuideMapSlide 컴포넌트에 현재 step 상태값을 Props로 전달합니다. */}
          {currentStep.type === 'map' && (
            <GuideMapSlide
              points={MAP_POINTS}
              interactive={currentStep.interactive}
              activePointId={currentStep.activePointId}
              step={step} 
            />
          )}

          {currentStep.type === 'card' && (
            <GuideCardSlide cards={currentStep.cards} step={step} />
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