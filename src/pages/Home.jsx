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
        { id: 2, top: '262px', left: '867px', name: '졸업시뮬레이션', src: Simulation_Flag, path: '/Simulation', width: '279px' },
        { id: 3, top: '330px', left: '608px', name: '졸업요건 조회', src: Condition_Flag, path: '/Condition', width: '253px' },
        { id: 4, top: '346px', left: '405px', name: '마이페이지', src: MyPage_Flag, path: '/MyPage', width: '187px'},
        { id: 5, top: '172px', left: '491px', name: '가이드', src: Guide_Flag, path: '/Guide', width: '353px' }
    ];

    return (
        <>
            <div className='home'>
                <Header/>
                
                <img className='map-bg' src={MapImg} alt="배경 지도" 
                    style={{ opacity: isFlagHovered ? 0.5 : 1 }}        
                />

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
        </>
    )
}