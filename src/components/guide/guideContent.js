import Simulation_Flag from '../../assets/flags/Simulation_Flag.png'
import Condition_Flag from '../../assets/flags/Condition_Flag.png'
import Guide_Flag from '../../assets/flags/Guide_Flag.png'
import MyPage_Flag from '../../assets/flags/MyPage_Flag.png'

export const MAP_POINTS = [
  {
    id: 'condition',
    name: '졸업요건 조회',
    description: '학번별 졸업요건을 한눈에 확인할 수 있는 구역이에요',
    top: '31.5%',
    left: '39%',
    flagSrc : Condition_Flag,
  },
  {
    id: 'simulation',
    name: '졸업 시뮬레이션',
    description: '목표 학점 달성 가능성을 시뮬레이션 해보는 구역이에요',
    top: '30.5%',
    left: '61%',
    flagSrc : Simulation_Flag,
  },
  {
    id: 'mypage',
    name: '마이페이지',
    description: '내 학적 정보와 수강 내역을 확인하는 구역이에요',
    top: '45%',
    left: '55.2%',
    flagSrc : MyPage_Flag,
  },
  {
    id: 'guide',
    name: '가이드',
    description: '지금 보고 있는 가이드 구역이에요',
    top: '69.5%',
    left: '62.5%',
    flagSrc : Guide_Flag,
  },
  {
    id: 'mountain',
    name: '학사모운틴',
    description: '졸업장을 찾을 수 있는 최종 목적지예요',
    top: '15%',
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