import './GuideMapSlide.css'
import { GuideMapPoint } from './GuideMapPoint'
 
import map from '../../assets/Map.png'
 
export function GuideMapSlide({ points, interactive = false, activePointId = null }) {
  const getMode = (point) => {
    if (interactive) return 'hover'
    if (activePointId) {
      return point.id === activePointId ? 'static-active' : 'static-dim'
    }
    return 'plain'
  }
 
  return (
    <div className="guide-map-slide">
      <div className="guide-map-wrapper">
        <img className="guide-map-bg" src={map} alt="학사일랜드 전체 지도" />
 
        {points.map((point) => (
          <GuideMapPoint key={point.id} point={point} mode={getMode(point)} />
        ))}
      </div>
    </div>
  )
}