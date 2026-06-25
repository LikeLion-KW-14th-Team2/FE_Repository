import Simulation_Flag from '../../assets/flags/Simulation_Flag.png'
import Condition_Flag from '../../assets/flags/Condition_Flag.png'
import Guide_Flag from '../../assets/flags/Guide_Flag.png'
import MyPage_Flag from '../../assets/flags/MyPage_Flag.png'

export const MAP_POINTS = [
  {
    id: 'condition',
    name: '졸업요건 조회',
    description: '학번/학부별 졸업요건을 조회할 수 있어요',
    top: '31.5%',
    left: '39%',
    flagSrc : Condition_Flag,
  },
  {
    id: 'simulation',
    name: '졸업 시뮬레이션',
    description: '다음 학기 과목 수, 목표 평점 등을 바탕으로\n졸업 가능 여부를 확인할 수 있어요',
    top: '30.5%',
    left: '61%',
    flagSrc : Simulation_Flag,
  },
  {
    id: 'mypage',
    name: '마이페이지',
    description: '나의 개인정보 및 학사정보를 조회할 수 있어요',
    top: '45%',
    left: '55.2%',
    flagSrc : MyPage_Flag,
  },
  {
    id: 'guide',
    name: '가이드',
    description: '현재 머무르고 있는 곳이에요',
    top: '69.5%',
    left: '62.5%',
    flagSrc : Guide_Flag,
  },
  {
    id: 'mountain',
    name: '학사모운틴',
    description: '학사모운틴',
    top: '11.5%',
    left: '48%',
  },
]

// ---------------------------------------------------------------
// 가이드2(우니 카드 미리보기)용 더미 데이터
// TODO: 실제 우니 카드 일러스트 에셋(POOR/EXCELLENT)으로 교체
// ---------------------------------------------------------------
export const UNI_CARD_PREVIEW = [
  {
    id: 'poor',
    grade: 'GPA 2.4',
    label: 'POOR',
    comment: '조금만 더 노력해 보세요!',
    mood: 'sleepy',
  },
  {
    id: 'excellent',
    grade: 'GPA 4.0',
    label: 'EXCELLENT',
    comment: '대단해요! 정말 잘하고 있어요!',
    mood: 'happy',
  },
]

// 가이드3(히든 카드 예고)용 데이터
export const HIDDEN_UNI_CARD = [{ id: 'hidden', isHidden: true }]

// ---------------------------------------------------------------
// 가이드 본문 5단계 구성
// type: 'map' | 'card'
// caption: [{ text, highlight? }] 형태의 배열로,
//          highlight: true인 부분만 강조 색(#890B00)으로 렌더링됨
// ---------------------------------------------------------------
export const GUIDE_STEPS = [
  {
    id: 1,
    type: 'map',
    interactive: true, // 모든 마커에 호버 툴팁 노출
    activePointId: null,
    caption: [
      { text: '○ 위에 마우스를 호버링', highlight: true },
      { text: '해 구역의 이름과 기능을 확인하세요' },
    ],
  },
  {
    id: 2,
    type: 'card',
    cards: UNI_CARD_PREVIEW,
    caption: [
      { text: '학점에 따라 외형이 바뀌는 ' },
      { text: '우니 카드를 수집', highlight: true },
      { text: '하세요!' },
    ],
  },
  {
    id: 3,
    type: 'card',
    cards: HIDDEN_UNI_CARD,
    caption: [
      { text: '4.5학점을 달성하면 얻을 수 있는 ' },
      { text: '히든 우니 카드', highlight: true },
      { text: '도 있답니다' },
    ],
  },
  {
    id: 4,
    type: 'map',
    interactive: false, // 호버 안내 없이 지도만 보여줌
    activePointId: null,
    caption: [{ text: '카드를 모으며 <학사일랜드>의 모든 곳을 탐험하면' }],
  },
  {
    id: 5,
    type: 'map',
    interactive: false,
    activePointId: 'mountain', // 학사모운틴만 강조, 나머지는 흐리게
    caption: [
      { text: '마침내 <학사모운틴>에서 바라고 바라던 ' },
      { text: '졸업장', highlight: true },
      { text: '을 찾을 수 있을 거예요' },
    ],
  },
]