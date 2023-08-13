import React from "react";
import { Link } from "react-router-dom";
import '../../css/kiosk/DessertPage.css';

export default function Dessert() {
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
                        <li><Link to="/Sulbing"><div className="sulbing"></div><p>설빙</p></Link></li>
                        <li><Link to="/Br"><div className="br"></div><p>배스킨 라빈스</p></Link></li>
                        <li><Link to="/Waffle"><div className="waffle"></div><p>와플대학</p></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
