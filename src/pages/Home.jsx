import './Home.css'
import { Header } from '../components/header'
import { useNavigate } from 'react-router-dom'

import MapImg from '../assets/Map.png'
import Simulation_Flag from '../assets/Simulation_Flag.png'
import Condition_Flag from '../assets/Condition_Flag.png'
import Guide_Flag from '../assets/Guide_Flag.png'
import MyPage_Flag from '../assets/MyPage_Flag.png'
import { useState } from 'react'

export function Home() {
    const navigate = useNavigate();

    const [isFlagHovered, setIsFlagHovered] = useState(false);

    const flags = [
        //{ id: 1, top: '202px', left: '262px', name: '학사모운틴' },
        { id: 2, top: '33%', left: '61%', name: '졸업시뮬레이션', src: Simulation_Flag, path: '/Simulation', width: '279px' },
        { id: 3, top: '34.5%', left: '39%', name: '졸업요건 조회', src: Condition_Flag, path: '/Condition', width: '253px' },
        { id: 4, top: '48%', left: '55.5%', name: '마이페이지', src: MyPage_Flag, path: '/MyPage', width: '187px'},
        { id: 5, top: '72.5%', left: '62.5%', name: '가이드', src: Guide_Flag, path: '/Guide', width: '353px' }
    ];

    return (
        <>
            <div className='home'>
                <Header/>
                
                <div className='map-wrapper'>
                    <img className={`map-bg ${isFlagHovered ? 'hovered' : ''}`} src={MapImg} alt="배경 지도" />

                    {/* 깃발을 클릭 가능한 버튼 태그로 생성 */}
                    {flags.map((flag) => (
                        <button 
                            key={flag.id}
                            className='flag-button' 
                            style={{
                                top: flag.top,
                                left: flag.left
                            }}
                            onClick={() => navigate(flag.path)} // 클릭 시 해당 경로로 이동
                            aria-label={`${flag.name} 페이지로 이동`}

                            onMouseEnter={() => setIsFlagHovered(true)}
                            onMouseLeave={() => setIsFlagHovered(false)}
                        >
                            <img src={flag.src} alt={flag.name} style={{width:flag.width}}/>
                        </button>
                    ))}   
                </div>
            </div>
        </>
    )
}