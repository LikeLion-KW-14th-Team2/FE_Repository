import { Btn } from "../Btn";
import mypage_img from '../../assets/MyPage_img.png';
import './MypageLanding.css'

export function MypageLanding({ onNavigateToMain }) {
    return (
        <>
        <div className="landing-content">
            <img src={mypage_img} />
            <p style={{fontSize: '30px', fontFamily: 'Pretendard Variable', fontWeight: '700',lineHeight:'1.4', color: '#555555'}}>내 정보를 조회하며 <br /> <span style={{color: '#890B00'}}>우니 카드</span>를 수집해 보세요</p>
            <div onClick={onNavigateToMain}>
                <Btn text="마이 페이지 바로가기" num="1" />  
            </div>
            
        </div>
        </>
    );
}