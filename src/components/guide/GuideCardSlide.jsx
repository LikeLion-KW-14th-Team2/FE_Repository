import React from 'react';
import './GuideCardSlide.css';
import map from '../../assets/Map.png';
import CardHigh from '../../assets/cards/Card_High.png';
import CardLow from '../../assets/cards/Card_Low.png';
import CardHidden from '../../assets/cards/Card_Hidden.png';
 
export function GuideCardSlide({ step }) {
    const isHiddenStep = step >= 3;

    return (
        <div className="guide-card-slide-container">
            <div className="guide-map-wrapper">
                
                <img 
                    className="guide-map-bg" 
                    src={map} 
                    alt="학사일랜드 전체 지도" 
                    style={{ opacity: 0.25 }} 
                />
                
                {isHiddenStep ? (
                    <div className="guide-single-card-wrapper">
                        <div 
                            className="guide-card-item single-card"
                            style={{ width: '600px' }}
                        >
                            <img src={CardHidden} alt="물음표 히든 카드" className="guide-card-img" />
                        </div>
                    </div>
                ) : (
                    
                    <div className="guide-cards-overlap-wrapper">
                        <div 
                            className="guide-card-item left-card"
                            style={{
                                width: '600px',
                                transform: 'rotate(5deg)'
                            }}
                        >
                            <img src={CardHigh} alt="High 졸업 카드" className="guide-card-img" />
                        </div>
                        
                        <div 
                            className="guide-card-item right-card"
                            style={{
                                width: '600px',
                                transform: 'rotate(-10deg)'
                            }}
                        >
                            <img src={CardLow} alt="Low 졸업 카드" className="guide-card-img" />
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}