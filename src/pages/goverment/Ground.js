import React from "react";
import { Link } from "react-router-dom";
import '../../css/goverment/JuminPage.css';


export default function Ground() {
    return (
        <>
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="">
                <h1>토지(임야)대장</h1>
            </div>
            <div className="Useground"></div>
        
            
        </>
    )
}


