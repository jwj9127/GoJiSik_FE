import React from "react";
import {Link} from 'react-router-dom';
import '../css/Goverment.css';


const Goverment = () => {
    return (
        <>
        <div className="Goverment_main">
            <div className="title">
                <Link to="/goverment24"><span>정부24 사용방법</span></Link>
            </div>
            <div className="data">
                <ul>
                    <li><Link to="/JuminPage"><div className="JuminPage"><p>주민등록등본</p></div></Link></li>
                    <li><Link to="/Year"><div className="Year"><p>건축물대장</p></div></Link></li>
                    <li><Link to="/Family"><div className="Family"><p>가족관계증명서</p></div></Link></li>
                    <li><Link to="/Transfer"><div className="Transfer"><p>전입신고</p></div></Link></li>
                </ul>
                <ul>
                    <li><Link to="/Passport"><div className="Passport"><p>여권 재발급</p></div></Link></li>
                    <li><Link to="/Immigration"><div className="Immigration"><p>출입국 사실증명</p></div></Link></li>
                    <li><Link to="/Work"><div className="Work"><p>재직증명서 발급</p></div></Link></li>
                    <li><Link to="/Generation"><div className="Generation"><p>세대 분리</p></div></Link></li>
                </ul>
                <ul>
                    <li><Link to="/Income"><div className="Income"><p>소득금액증명원</p></div></Link></li>
                    <li><Link to="/Car"><div className="Car"><p>자동차 등록원부</p></div></Link></li>
                    <li><Link to="/Covid"><div className="Covid"><p>코로나19 <br /> 생활지원비</p></div></Link></li>
                    <li><Link to="/Ground"><div className="Ground"><p>토지(임야)대장</p></div></Link></li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Goverment;