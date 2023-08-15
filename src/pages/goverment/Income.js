import React from "react";
import { Link } from "react-router-dom";
import '../../css/goverment/JuminPage.css';


export default function Income() {
    return (
        <>
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="">
                <h1>소득금액증명원</h1>
            </div>
            <div className="Useincome"></div>
        </>
    )
}


