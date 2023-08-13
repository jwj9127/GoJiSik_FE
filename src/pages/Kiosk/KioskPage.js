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
                        <li><Link to="/Two"><div className="Two"></div><p>전체1</p></Link></li>
                        <li><Link to="/Star"><div className="Star"></div><p>영화1</p></Link></li>
                        <li><Link to="/br"><div className="br"></div><p>영화1</p></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/sulbing"><div className="sulbing"></div><p>CGV</p></Link></li>
                        <li><Link to="/Paikdabang"><div className="Paikdabang"></div><p>전체1</p></Link></li>
                        <li><Link to="/waffle"><div className="waffle"></div><p>영화1</p></Link></li>
                        <li><Link to="/Lotte"><div className="Lotte"></div><p>영화1</p></Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/Mom"><div className="Mom"></div><p>CGV</p></Link></li>
                        <li><Link to="/Megabox"><div className="Megabox"></div><p>전체1</p></Link></li>
                        <li><Link to="/Mcdo"><div className="Mcdo"></div><p>영화1</p></Link></li>
            
                    </ul>
                </div>
            </div>
        </>
    )
}

export default KioskPage;