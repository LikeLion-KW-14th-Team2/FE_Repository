import './GuideCaptionBar.css'
 
export function GuideCaptionBar({ caption, onPrev, onNext, isLast }) {
  return (
    <div className="guide-caption-bar">
      <button className="guide-caption-arrow" onClick={onPrev} aria-label="이전 가이드">
        ←
      </button>
 
      <p className="guide-caption-text">
        {caption.map((part, index) => (
          <span
            key={index}
            className={part.highlight ? 'guide-caption-highlight' : undefined}
          >
            {part.text}
          </span>
        ))}
      </p>
 
      <button
        className="guide-caption-arrow"
        onClick={onNext}
        aria-label={isLast ? '가이드 종료하고 홈으로 이동' : '다음 가이드'}
      >
        →
      </button>
    </div>
  )
}