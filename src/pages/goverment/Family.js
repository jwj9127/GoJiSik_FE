import React from "react";
import { Link } from "react-router-dom";
import '../../css/goverment/JuminPage.css';


function Family() {
    return (
        <>
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="">
                <h1>가족관계증명서</h1>
            </div>
            <div className="Usefamily"> </div>
                
           
        </>
    )
}

export default Family;
