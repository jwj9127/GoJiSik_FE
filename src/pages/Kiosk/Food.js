import React from "react";
import { Link } from "react-router-dom";
import '../../css/kiosk/Food.css';

export default function Food() {
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
                        <li><Link to="Lotteria"><div className="Lotteria"></div><p>롯데리아</p></Link></li>
                        <li><Link to="Mom"><div className="Mom"></div><p>맘스터치</p></Link></li>
                        <li><Link to="Mcdo"><div className="Mcdo"></div><p>맥도날드</p></Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link to="Burger"><div className="Burger"></div><p>버거킹</p></Link></li>
                        <li><Link to="Kfc"><div className="Kfc"></div><p>KFC</p></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
