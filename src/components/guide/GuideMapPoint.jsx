import { useState } from 'react'
import './GuideMapPoint.css'
 
export function GuideMapPoint({ point, mode = 'plain' }) {
  const [isHovered, setIsHovered] = useState(false)
 
  const isInteractive = mode === 'hover'
  const showFlagLayout = isInteractive && isHovered
  const showStaticLabel = mode === 'static-active'
 
  return (
    <div
      className={`guide-map-point guide-map-point--${mode}`}
      style={{ top: point.top, left: point.left }}
      onMouseEnter={() => isInteractive && setIsHovered(true)}
      onMouseLeave={() => isInteractive && setIsHovered(false)}
    >
      {/* Map.png 안에 동그라미가 이미 그려져 있어서,
          여기서는 호버/강조 감지를 위한 투명 히트 영역만 둡니다. */}
      <div className="guide-map-point-hitzone" />
 
      {showFlagLayout && (
        <>
            <div className="guide-flag-image-box">
                <img src={point.flagSrc} alt={point.name} className="guide-flag-asset" />
            </div>

            {point.description && (
                <p className="guide-flag-description-box">
                {point.description}
                </p>
            )}
        </>
      )}
 
      {showStaticLabel && (
        <span className="guide-map-point-label">{point.name}</span>
      )}
    </div>
  )
}