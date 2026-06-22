import './GuideMapPoint.css'
 
export function GuideMapPoint({ point, mode = 'plain', isParentHovered, onFlagMouseEnter, onFlagMouseLeave }) {
  const isInteractive = mode === 'hover'
  const showFlagLayout = isInteractive && isParentHovered
  const showStaticLabel = mode === 'static-active'
 
  return (
    <div
      className={`guide-map-point guide-map-point--${mode}`}
      style={{ top: point.top, left: point.left }}
      onMouseEnter={() => isInteractive && onFlagMouseEnter()}
      onMouseLeave={() => isInteractive && onFlagMouseLeave()}
    >
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