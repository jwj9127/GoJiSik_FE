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
                        <li><Link to=""><div className="box"></div><p>전체1</p></Link></li>
                        <li><Link to=""><div className="box"></div><p>전체1</p></Link></li>
                        <li><Link to=""><div className="box"></div><p>영화1</p></Link></li>
                        <li><Link to=""><div className="box"></div><p>영화1</p></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default KioskPage;