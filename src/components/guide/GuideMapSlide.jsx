import './GuideMapSlide.css'
import { GuideMapPoint } from './GuideMapPoint'
import map from '../../assets/Map.png'
import { useState } from 'react'
 
export function GuideMapSlide({ points, interactive = false, activePointId = null, step }) {
  const [hoveredPointId, setHoveredPointId] = useState(null);
  const isAnyFlagHovered = hoveredPointId !== null;

  const getMode = (point) => {
    if (interactive) return 'hover'
    if (activePointId) {
      return point.id === activePointId ? 'static-active' : 'static-dim'
    }
    return 'plain'
  }
 
  const isMountainStep = step === 5;

  const mapOpacity = isMountainStep ? 0.5 : (isAnyFlagHovered ? 0.5 : 1);

  return (
    <div className="guide-map-slide">
      <div className="guide-map-wrapper">
        <img 
          className="guide-map-bg" 
          src={map} 
          alt="학사일랜드 전체 지도" 
          style={{ opacity: mapOpacity }}
        />
 
        {points.map((point) => (
          <GuideMapPoint key={point.id} point={point} mode={getMode(point)} 
            isParentHovered={hoveredPointId === point.id}
            onFlagMouseEnter={() => setHoveredPointId(point.id)}
            onFlagMouseLeave={() => setHoveredPointId(null)}
          />
        ))}
      </div>
    </div>
  )
}