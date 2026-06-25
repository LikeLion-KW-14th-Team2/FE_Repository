import { useState } from 'react';
import logo from '../assets/Logo.png'
import Map from '../assets/Map.png'
import login from '../assets/Login_Landing.png'
import { Btn } from '../components/Btn';
import { useNavigate } from 'react-router-dom';

import api from '../api/axios';

export function Landing() {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoginStep, setIsLoginStep] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFailModalOpen, setIsFailModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleMapClick = () => {if(!isLoginStep) setIsLoginStep(true);};

    const handleLoginClick = () => {setIsModalOpen(true);};

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleLogin = async () => {
        if (!id || !pw) {
            setIsFailModalOpen(true);
            setIsModalOpen(false);
            return;
        }

        try {
            // 백엔드 API에 로그인 요청 (이전 세션 간섭 방지 포함)
            const response = await api.post('/api/klas/auth/login', {
                studentId: id,
                password: pw
            }, {
                withCredentials: false 
            });

            // [조건 1 & 2 & 3] API 결과 분석
            if (response.data && response.data.success === true) {
                // 로그인 성공 시 세션 저장
                if (response.data.cookie) {
                    localStorage.setItem('klasSession', response.data.cookie);
                }
                
                // 최초 로그인 여부 기록장 가져오기
                const visitedUsers = JSON.parse(localStorage.getItem('visitedUsers') || '{}');
                
                // 1. 최초 로그인 시 (visitedUsers에 이 학번 기록이 없는 경우)
                if (!visitedUsers[id]) {
                    visitedUsers[id] = true; // 방문 기록 남기기
                    localStorage.setItem('visitedUsers', JSON.stringify(visitedUsers));
                    
                    resetLoginState();
                    navigate('/Guide'); // 가이드로 이동
                } 
                // 2. 재 로그인 시 (이미 방문 기록이 있는 경우)
                else {
                    resetLoginState();
                    navigate('/Home'); // 홈으로 이동
                }

            } else {
                // 3. 로그인 실패 시 (API에서 success가 true가 아님)
                handleLoginFailure();
            }
            
        } catch (error) {
            console.error("로그인 중 에러 발생:", error);
            // 통신 에러나 서버 에러 발생 시에도 실패 처리
            handleLoginFailure();
        }
    };

    // 로그인 실패 공통 처리 함수
    const handleLoginFailure = () => {
        setIsFailModalOpen(true);
        setIsModalOpen(false);
        setId(''); // 입력창 비우기
        setPw('');
    };

    const resetLoginState = () => {
        setId('');
        setPw('');
        setIsModalOpen(false);
    };

    const handleFindPw = () => {
        const targetUrl = "https://klas.kw.ac.kr/usr/cmn/login/modal/UserFindPwdPage.do";
        window.open(targetUrl, '_blank');
    }

    return (
        <>
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            position: 'relative'
        }}>
            {/*초기 화면*/}
            <div style={{
                width: '704px', 
                textAlign: 'center', 
                zIndex: isLoginStep ? 1 : 3,
                opacity: isLoginStep ? 0 : 1,
                transform: isLoginStep ? 'translateY(-40px)' : 'translateY(0)',
                transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            }}>
                <img src={logo} style={{ width: '308px' }} alt="로고"/>
                <p style={{
                    fontSize: '24px', 
                    color: '#555555', 
                    fontWeight: 700, 
                    lineHeight: '1.4'
                }}>
                    항해사 우니와 함께 떠나는 전설의 ‘조러비소’ 원정대! <br/>
                    거센 시험의 폭풍을 뚫고 드디어 &lt;학사일랜드&gt;에 도착했어요<br/>
                    나만의 파트너 우니와 함께 보물을 찾을 시간이에요
                </p>
                <p style={{ opacity: '0.25', fontSize: '20px', marginTop: '30px', fontWeight: 500 }}>
                    아래의 보물지도를 확인해 보세요
                </p>
            </div>

            {/*로그인 안내*/}
            {!isModalOpen && isLoginStep && (
                <div style={{
                position: 'absolute',
                zIndex: 4,
                opacity: isLoginStep ? 1 : 0,
                visibility: isLoginStep ? 'visible' : 'hidden',
                transition: 'all 0.75s cubic-bezier(0.23, 1, 0.32, 1) 0.2s',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                }}>
                    <img src={login} style={{width:'50px', height:'60px'}}/>
                    <p style={{
                        fontSize: '30px', 
                        color: '#555555', 
                        fontWeight: 700, 
                        lineHeight: '1.4'
                    }}>
                        KLAS 계정으로 로그인해, <br/>졸업까지의 모험을 시작해요
                    </p>
                    <div onClick={handleLoginClick}>
                        <Btn text = "로그인하기"/>
                    </div>
                    
                </div>
            )}
            
            {/* 지도 */}
            <div 
                onClick={handleMapClick}
                onMouseEnter={() => !isLoginStep && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    cursor: isLoginStep ? 'default' : 'pointer',

                    bottom: isLoginStep ? 'auto' : '-125px',

                    transform: isLoginStep 
                        ? 'translateY(0%)' 
                        : isHovered 
                            ? 'translateY(600px)' 
                            : 'translateY(650px)',
                    
                    transition: 'all 0.75s cubic-bezier(0.25, 1, 0.5, 1)', 
                    
                    width: isLoginStep ? 'auto' : '1200px',
                    height: isLoginStep ? '100%' : 'auto',

                    filter: isLoginStep ? 'blur(0.2vw)' : 'none',
                    opacity: isLoginStep ? 0.25 : 1
                }}
            >
                <img 
                    src={Map} 
                    style={{ 
                        width: isLoginStep ? 'auto' : '100%', 
                        height: isLoginStep ? '100%' : 'auto', 
                        display: 'block' 
                    }} 
                    alt="보물지도"
                />            
            </div>

            {/*로그인 모달*/}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    pointerEvents: 'auto'
                }}>
                    <div style={{
                        width: '530px',
                        height: '420px',
                        backgroundColor: '#ffffff',
                        borderRadius: '40px',
                        padding: '40px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            width: '100%',
                            textAlign: 'left',
                            fontSize: '30px',
                            fontWeight: '700',
                            color: '#555555',
                            lineHeight: '1.4'
                        }}>
                            KLAS 계정으로 로그인
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px', 
                            width: '100%'
                        }}>
                            <input
                                type="text"
                                placeholder="ID를 입력하세요"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                style={{
                                    width: '100%',
                                    height: '60px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(0, 0, 0, 0.5)',
                                    opacity: '0.25',
                                    padding: '0 20px',
                                    fontSize: '20px',
                                    lineHeight: '1.4',
                                    fontWeight: '500',
                                    boxSizing: 'border-box',
                                    outline: 'none'
                                }}
                            />
                            <input
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                style={{
                                    width: '100%',
                                    height: '62px',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(0, 0, 0, 0.5)',
                                    opacity: '0.25',
                                    padding: '0 20px',
                                    fontSize: '20px',
                                    lineHeight: '1.4',
                                    fontWeight: '500',
                                    boxSizing: 'border-box',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '22px',
                            width: '100%'
                        }}>
                            <div style={{ flex: 1 }} onClick={handleFindPw}>
                                <Btn text="비밀번호 찾기" num="3" />
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ width: '100%' }} onClick={handleLogin}>
                                    <Btn text="로그인하기" num="1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 로그인 실패 모달 */}
            {isFailModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#00000033',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 200,
                    pointerEvents: 'auto'
                }}>
                    {/* 모달 본문 상자 */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '40px',
                        boxShadow: '0px 5px 50px 0px #0000001A',
                        padding: '40px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                    }}>
                        {/* 텍스트 영역 */}
                        <div style={{ width: '100%', textAlign: 'left' }}>
                            <h3 style={{
                                margin: '0 0 14px 0',
                                fontSize: '24px', 
                                fontWeight: '600', 
                                color: '#555555',
                                lineHeight: '1.4'
                            }}>
                                다시 시도해 주세요
                            </h3>
                            <p style={{
                                margin: '0 0 30px 0',
                                fontSize: '20px', 
                                fontWeight: '500', 
                                color: 'rgba(0, 0, 0, 0.25)',
                                lineHeight: '1.4'
                            }}>
                                ID 또는 비밀번호를 한 번 더 확인해 주세요
                            </p>
                        </div>

                        {/* 확인 버튼 영역*/}
                        <div style={{ 
                            width: '100%', 
                            display: 'flex', 
                            justifyContent: 'flex-end'
                        }}>
                            <button 
                                onClick={() => {setIsFailModalOpen(false); setIsModalOpen(true);}}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    color: '#890B00',
                                    cursor: 'pointer',
                                    lineHeight: '1.4',
                                    outline: 'none'
                                }}
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )} 
        </div>
        </>
    );
}