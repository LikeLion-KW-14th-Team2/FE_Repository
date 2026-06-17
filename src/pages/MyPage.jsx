import { Btn } from "../components/Btn";
import { Header } from "../components/header";

import MyPage_Flag from '../assets/MyPage_Flag.png';
import MapImg from '../assets/Map.png';
import torn from "../assets/Group 209 1.png";
import { useState } from "react";
import './MyPage.css'

import { MypageLanding } from "../components/mypage/MypageLanding";
import { MypageMain } from "../components/mypage/MypageMain";


export function MyPage() {
    const [view, setView] = useState('landing');

    return (
        <>
        <div className="mypage-container">
            <Header />

            <div className="left-section">
                <img className="bg-map" src={MapImg} alt="배경 지도" />
                
                <div className="mypage-flag">
                    <img src={MyPage_Flag} alt="마이 페이지" />
                </div>
                
            </div>

            <img className="torn" src={torn} />

            <div className="right-section">
                {view === 'landing' ? (
                    <MypageLanding onNavigateToMain={() => setView('main')} />
                ) : (
                    <MypageMain/>
                )}
            </div>   
        </div>
       
        </>
    )
}