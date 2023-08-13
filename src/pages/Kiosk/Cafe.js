import React from "react";
import { Link } from "react-router-dom";
import '../../css/kiosk/CafePage.css';

export default function Cafe() {
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
                        <li><Link to="/Two"><div className="Two"></div><p>투썸플레이스</p></Link></li>
                        <li><Link to="/Mega"><div className="Mega"></div><p>메가커피</p></Link></li>
                        <li><Link to="/Ediya"><div className="Ediya"></div><p>이디야</p></Link></li>
                        <li><Link to="/Angel"><div className="Angel"></div><p>엔제리너스</p></Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link to="/Paikdabang"><div className="Paikdabang"></div><p>빽다방</p></Link></li>
                        <li><Link to="/Hollys"><div className="Hollys"></div><p>할리스</p></Link></li>
                        
                        
                    </ul>
                </div>
            </div>
        </>
    )
}
