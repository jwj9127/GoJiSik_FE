import React from "react";
import { Link } from "react-router-dom";
import '../../../css/kiosk/MoviePage.css';

export default function Megabox() {
    return (

        <>
            <div className="title">
                <span>키오스크</span>
            </div>
            <div className="tap">
                <Link to="/Movie"><button>영화관</button></Link>
                <Link to="/Cafe"><button>카페</button></Link>
                <Link to="/Food"><button>햄버거</button></Link>
                <Link to="/Dessert"><button>디저트</button></Link>
            </div>
            <div>
                <p>메가박스</p>
                <div className="Usemegabox"></div>
            </div>
        </>
    )
}

