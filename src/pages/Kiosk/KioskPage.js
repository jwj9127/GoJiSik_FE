import React from "react";
import { Link } from "react-router-dom";
import '../../css/kiosk/KioskPage.css';

function KioskPage() {
    return (
        <>
            <div className="title">
                <Link to="/kiosk"><span>키오스크</span></Link>
            </div>
            <div>
                <div className="tap">
                    <Link to="/Movie"><button>영화관</button></Link>
                    <Link to="/Cafe"><button>카페</button></Link>
                    <Link to="/Food"><button>햄버거</button></Link>
                    <Link to="/Dessert"><button>디저트</button></Link>
                </div>
                <div className="Kiosk_list">
                    <ul>
                        <li><Link to="/Cgv"><div className="Cgv"></div><p>CGV</p></Link></li>
                        <li><Link to="/Two"><div className="Two"></div><p>투썸플레이스</p></Link></li>
                        <li><Link to="/Lotteria"><div className="Lotteria"></div><p>롯데리아</p></Link></li>
                        <li><Link to="/br"><div className="br"></div><p>배스킨 라빈스</p></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/sulbing"><div className="sulbing"></div><p>설빙</p></Link></li>
                        <li><Link to="/Paikdabang"><div className="Paikdabang"></div><p>빽다방</p></Link></li>
                        <li><Link to="/waffle"><div className="waffle"></div><p>와플대학</p></Link></li>
                        <li><Link to="/Lotte"><div className="Lotte"></div><p>롯데시네마</p></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/Mom"><div className="Mom"></div><p>맘스터치</p></Link></li>
                        <li><Link to="/Megabox"><div className="Megabox"></div><p>메가박스</p></Link></li>
                        <li><Link to="/Mcdo"><div className="Mcdo"></div><p>맥도날드</p></Link></li>
            
                    </ul>
                </div>
            </div>
        </>
    )
}

export default KioskPage;