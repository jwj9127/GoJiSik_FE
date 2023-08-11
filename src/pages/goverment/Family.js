import React from "react";
import { Link } from "react-router-dom";



function Family() {
    return (
        <>
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="">
                <h1>가족관계증명서</h1>
            </div>
            <div className="UseImage">
                <img src="useimg/juminimg.png" />
            </div>
        </>
    )
}

export default Family;
