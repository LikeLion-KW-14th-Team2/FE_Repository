import { useState } from 'react';
import { Btn } from '../Btn'
import { MypageCard } from './MypageCard'
import './MypageMain.css'

export function MypageMain({ onNavigateToCourse }) {
    const [hoveredId, setHoveredId] = useState(null);

    const userCards = [
        { id: 1, value: '홍길동', name: '성명', top: '100px', left: '160px', rotate: '-5deg' },
        { id: 2, name: '학부(과)', value: '정보융합학부', top: '150px', left: '520px', rotate: '3deg' },
        { id: 3, name: '다전공', value: '경영학과', top: '200px', left: '340px', rotate: '-2deg' },
        { id: 4, name: '현재 상태', value: '재학중', top: '270px', left: '60px', rotate: '6deg' },
        { id: 5, name: '입학년도', value: '2026년', top: '370px', left: '240px', rotate: '-4deg' },
        { id: 6, name: '졸업 예정일', value: '2030년 2월', top: '380px', left: '520px', rotate: '2deg' }
    ];

    return(
        <>
        <div className='mypage-main-container'>
            <div className="cards-wrapper">
                {userCards.map((card) => {
                    const isHovered = hoveredId === card.id;

                    return (
                    <div 
                        key={card.id}
                        className="card-positioner"
                        style={{
                            top: card.top,
                            left: card.left,
                            transform: isHovered 
                                    ? `translateY(-10px) rotate(${card.rotate})` 
                                    : `rotate(${card.rotate})`,
                            zIndex: isHovered ? 50 : 5
                        }}
                        onMouseEnter={() => setHoveredId(card.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <MypageCard value={card.value} name={card.name} />
                    </div>
                );})}
            </div>
            
            <div className='mypage-button'>
                <Btn text="수강 내역 조회하기" num="3" onClick={onNavigateToCourse}/>
                <Btn text="KLAS 학사정보 바로가기" num="1" />
            </div>    
        </div>
        
        </>
    )
}