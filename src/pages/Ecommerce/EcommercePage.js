import React from "react";
import { Link } from "react-router-dom";
import '../../css/Ecommerce/EcommercePage.css';

export default function EcommercePage() {
    return (
        <>
            <div className="title">
                <Link to="/shoppingmall"><span>이커머스</span></Link>
            </div>
            <div>
                <div className="tap">
                    <Link to="/shoppingmall"><button>쇼핑몰</button></Link>
                    <Link to="/used_transaction"><button>중고거래</button></Link>
                    <Link to="/airplane"><button>비행기</button></Link>
                    <Link to="/place"><button>숙소</button></Link>
                </div>
                <div className="ecommerce_list">
                    <ul>
                        <li><Link to=""><div className="box"></div><p>전체1</p></Link></li>
                        <li><Link to=""><div className="box"></div><p>전체1</p></Link></li>
                        <li><Link to=""><div className="box"></div><p>쇼핑몰1</p></Link></li>
                        <li><Link to=""><div className="box"></div><p>중고거래1</p></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}