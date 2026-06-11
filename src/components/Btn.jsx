import React, { useState } from 'react';
import btn1 from '../assets/Button1.png'; 
import btn2 from '../assets/Button2.png'; 
import btn3 from '../assets/Button3.png'; 

export function Btn({ text, num }) {
    const [isHovered, setIsHovered] = useState(false);

    let btnImg = btn1;
    if (num == 2) btnImg = btn2;
    if (num == 3) btnImg = btn3;

    let currentOpacity = 1;
    if (isHovered) {
        currentOpacity = num == 3 ? 0.6 : 0.8;
    }
    
    return (
        <button
            style={{
                backgroundImage: `url(${btnImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: currentOpacity,

                width: '100%',
                height: '80px',
                padding: '10px 40px',
                border: 'none',
                borderRadius: '20px',
                overflow: 'hidden', 

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',


                color: num == 2 ? '#890B00' : num == 3 ? 'rgba(0, 0, 0, 0.5)' :'#ffffff',
                fontSize: '24px',
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '1.4',

                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.1s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </button>
    );
}