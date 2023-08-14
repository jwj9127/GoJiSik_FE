import React from "react";
import { Link } from "react-router-dom";


export default function Cgv() {
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
                <p>CGV</p>
                <div></div>
            </div>
        </>
    )
}

