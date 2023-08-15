import React from "react";
import { Link } from "react-router-dom";
import '../../css/goverment/JuminPage.css';


export default function Car() {
    return (
        <>
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="">
                <h1>자동차 등록원부</h1>
            </div>
            <div className="Usecar"></div>
                
            
        </>
    )
}


