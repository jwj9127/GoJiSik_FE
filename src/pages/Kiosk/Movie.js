import React from "react";
import { Link } from "react-router-dom";


function Movie() {
    return (

        <>
            <div className="title">
                <span>키오스크</span>
            </div>
            <div className="tap">
                <Link to="/kiosk"><button>전체</button></Link>
                <Link to="/Movie"><button>영화관</button></Link>
                <Link to="/Cafe"><button>카페</button></Link>
                <Link to="/Food"><button>햄버거</button></Link>
                <Link to="/Dessert"><button>디저트</button></Link>
            </div>
            <div className="Kiosk_list">
                <ul>
                    <li><Link to=""><div className="box"></div><p>영화1</p></Link></li>
                    <li><Link to=""><div className="box"></div><p>영화1</p></Link></li>
                    <li><Link to=""><div className="box"></div><p>영화1</p></Link></li>
                    <li><Link to=""><div className="box"></div><p>영화1</p></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Movie;