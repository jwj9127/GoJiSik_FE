import React from "react";
import {Link} from 'react-router-dom';
import '../css/JuminPage.css';

const Goverment = () => {
    return (
        <>
        <div className="Goverment_main">
            <div className="title">
                <span>정부24 사용방법</span>
            </div>
            <div className="data">
                <ul>
                    <li><Link to="/JuminPage"><div className="box"></div><p>주민등록등본</p></Link></li>
                    <li><Link to="/JuminPage"><div className="box"></div><p>연말정산</p></Link></li>
                    <li><Link to="/JuminPage"><div className="box"></div><p>가족관계증명서</p></Link></li>
                    <li><Link to="/JuminPage"><div className="box"></div><p>어쩌고저쩌고</p></Link></li>
                </ul>
                <ul>
                    <li><Link to="/JuminPage"><div className="box"></div><p>주민등록등본</p></Link></li>
                    <li><Link to="/JuminPage"><div className="box"></div><p>연말정산</p></Link></li>
                    <li><Link to="/JuminPage"><div className="box"></div><p>가족관계증명서</p></Link></li>
                    <li><Link to="/JuminPage"><div className="box"></div><p>어쩌고저쩌고</p></Link></li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Goverment;