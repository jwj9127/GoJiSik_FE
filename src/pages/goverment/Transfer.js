import React from "react";
import { Link } from "react-router-dom";
import '../../css/goverment/JuminPage.css';


export default function Transfer() {
    return (
        <>
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="">
                <h1>전입신고</h1>
            </div>
            <div className="Usetransfer"></div>
        </>
    )
}


