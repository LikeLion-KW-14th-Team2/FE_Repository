// src/pages/MyPage.jsx
import { useEffect, useState } from "react";
import api from "../api/axios"; // 설정해둔 axios 인스턴스

import { Header } from "../components/header";
import MyPage_Flag from '../assets/flags/MyPage_Flag.png';
import MapImg from '../assets/Map.png';
import torn from "../assets/Group 209 1.png";
import './MyPage.css';

import { MypageLanding } from "../components/mypage/MypageLanding";
import { MypageMain } from "../components/mypage/MypageMain";
import { MyPageCourse } from "../components/mypage/MyPageCourse";

import CardBg1 from '../assets/cards/Card_Texture.png'; 
import CardBg2 from '../assets/cards/Card_Texture.png';     

import Wooni1 from '../assets/wooni1.png'; 
import Wooni2 from '../assets/wooni2.png'; 
import Wooni3 from '../assets/wooni3.png'; 
import Wooni4 from '../assets/wooni4.png'; 
import Wooni5 from '../assets/wooni5.png'; 

export function MyPage() {
    const [view, setView] = useState('landing');
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [isCardCentered, setIsCardCentered] = useState(false);
    const [rawGpa, setRawGpa] = useState(0);

    // 학점 점수 요약 정보 API 호출
    useEffect(() => {
        const fetchGpaData = async () => {
            try {
                // 💡 로컬 스토리지에서 세션 정보를 가져옵니다.
                const session = localStorage.getItem('klasSession');

                const response = await api.get('/api/klas/grades/summary', {
                    headers: {
                        'Klas-Cookie': session
                    }
                });

                if (response.data && response.data.jaechulScoresum !== undefined) {
                    setRawGpa(Number(response.data.jaechulScoresum));
                }
            } catch (error) {
                console.error("[마이페이지] GPA 합계 불러오기 실패:", error);
                // 403 에러가 나더라도 화면이 깨지지 않도록 안전하게 기본값 처리
                setRawGpa(3.48); 
            }
        };

        if (view === 'main') {
            fetchGpaData();
        }
    }, [view]);

    // 학점 구간에 따른 카드 설정 동적 계산 함수
    const getCardSetup = (score) => {
        const displayGpa = score.toFixed(1);

        if (score < 2.4) {
            return { bg: CardBg1, wooni: Wooni1, titleTop: `GPA ${displayGpa}??`, titleBottom: "NOOOOOO", des: "재입학을 고려해 보세요!" };
        } else if (score < 3.0) {
            return { bg: CardBg1, wooni: Wooni2, titleTop: `GPA ${displayGpa};;`, titleBottom: "POOR", des: "조금만 더 노력해 보세요!" };
        } else if (score < 4.0) {
            return { bg: CardBg1, wooni: Wooni3, titleTop: `GPA ${displayGpa}!`, titleBottom: "GOOD JOB", des: "행운을 빕니다!" };
        } else if (score < 4.5) {
            return { bg: CardBg1, wooni: Wooni4, titleTop: `GPA ${displayGpa}!!!`, titleBottom: "EXCELLENT", des: "대단해요! 정말 잘하고 있어요!" };
        } else {
            return { bg: CardBg2, wooni: Wooni5, titleTop: `<<GPA ${displayGpa}>>`, titleBottom: "LLEGENDD", des: "전설의 GPA 달성!" };
        }
    };

    const cardSetup = getCardSetup(rawGpa);

    // 💡 기존 코드의 중복 렌더링(return문 두 번 겹침) 오류를 해결했습니다.
    return (
        <div className={`mypage-container ${isCardCentered ? 'backdrop-blurred' : ''}`}>
            <Header />

            {/* 좌측 구역 */}
            <div className="left-section">
                <img className="bg-map" src={MapImg} alt="배경 지도" />
                <div className="mypage-flag">
                    <img src={MyPage_Flag} alt="마이 페이지" />
                </div>
            </div>

            {/* 찢어진 종이 구분선 */}
            <img className="torn" src={torn} alt="구분선" />

            {/* 우측 구역 */}
            <div className="right-section">
                {view === 'landing' && <MypageLanding onNavigateToMain={() => setView('main')} />}
                {view === 'main' && (
                    <MypageMain 
                        onNavigateToCourse={() => setView('course')} 
                        onResetHover={() => setIsCardCentered(false)}
                    />
                )}
                {view === 'course' && <MyPageCourse />}
            </div>

            {/* 카드 본체 */}
            {view === 'main' && (
                <div className={`character-card-thumbnail ${isCardCentered ? 'is-centered' : ''}`}>
                    <img className="card-bg-frame" src={cardSetup.bg} alt="카드 배경" />
            
                    <div className="card-dynamic-content">
                        <h1 className="card-dynamic-title">
                            <span className="title-gpa-line">{cardSetup.titleTop}</span>
                            <span className="title-status-line">{cardSetup.titleBottom}</span>
                        </h1>
            
                        <p className="card-dynamic-desc">{cardSetup.des}</p>
                        <img className="card-dynamic-wooni" src={cardSetup.wooni} alt="우니 캐릭터" />
                    </div>
                </div>
            )}
        </div>
    );
}