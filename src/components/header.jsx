import './header.css'
import home from '../assets/Home.png'
import logout from '../assets/Logout.png'

import homeHover from '../assets/Home_hover.png'
import logoutHover from '../assets/Logout_hover.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate();

    const [isHomeHover, setIsHomeHover] = useState(false);
    const [isLogoutHover, setIsLogoutHover] = useState(false);


    return (
        <>
            <div className='header'>
                <img className='logoutImg' src={isLogoutHover ? logoutHover : logout}
                     alt="로그아웃"
                     onMouseEnter={() => setIsLogoutHover(true)}
                     onMouseLeave={() => setIsLogoutHover(false)}
                     onClick={() => navigate('/')}
                />
                <img className='homeImg' src={isHomeHover ? homeHover : home}
                     alt="홈으로 나가기"
                     onMouseEnter={() => setIsHomeHover(true)}
                     onMouseLeave={() => setIsHomeHover(false)}
                     onClick={() => navigate('/')}
                />
            </div>
        </>
    )
}