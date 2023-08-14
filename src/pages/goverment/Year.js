import React from "react";
import { Link } from "react-router-dom";
import '../../css/goverment/JuminPage.css';



function Year() {
    return (
        <>
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="">
                <h1>건축물대장</h1>
            </div>
            <div className="Useyear">
                
            </div>
        </>
    )
}

export default Year;
