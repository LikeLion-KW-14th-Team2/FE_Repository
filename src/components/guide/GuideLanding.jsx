// src/components/guide/GuideLanding.jsx
//
// '가이드 - 랜딩 페이지' 화면.
// ConditionMain / SimulationMain과 동일한 "반쪼개진 지도 + 찢어진 종이 + 깃발"
// 레이아웃 패턴을 그대로 따랐어요 (map / flag / torn / content).
import './GuideLanding.css'
import { Btn } from '../Btn'
import Guide_Img from '../../assets/Guide_img.png'

import map from '../../assets/Map.png'
import guideFlag from '../../assets/flags/Guide_Flag.png'
import torn from '../../assets/Group 209 1.png'

export function GuideLanding({ onStart }) {
  return (
    <div className="guide-landing-page">
      <div className="guide-left-visual">
        <div className="map-fixed-container">
          <img className="guide-landing-map" src={map} alt="배경 지도" />
          <img className="guide-landing-flag" src={guideFlag} alt="가이드 깃발" />
        </div>
        <img className="guide-landing-torn" src={torn} alt="찢어진 화면" />
      </div>

      <div className="guide-landing-content">
        <div className="guide-landing-compass">
          <img src={Guide_Img} />
        </div>

        <p className="guide-landing-title">
          졸업장을 찾기까지의 여정동안
          <br />
          <span className="highlight">만나게 될 구역</span>들을
          <br />
          가이드에서 알아볼 수 있어요
        </p>

        <p className="guide-landing-subtitle">
          우측 상단 ‘홈으로 나가기’ 아이콘을 통해
          <br />
          가이드를 건너뛸 수 있어요
        </p>

        <div className="guide-landing-button" onClick={onStart}>
          <Btn text="가이드 시작하기" />
        </div>
      </div>
    </div>
  )
}