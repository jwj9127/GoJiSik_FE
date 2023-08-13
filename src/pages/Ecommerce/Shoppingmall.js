import { Link } from "react-router-dom";
import '../../css/Ecommerce/Shoppingmall.css'

export default function Shoppingmall() {
    return (
        <>
            <div className="title">
                <Link to="/ecommerce"><span>이커머스</span></Link>
            </div>
            <div className="tap">
                <Link to={'/shoppingmall'}><button>쇼핑몰</button></Link>
                <Link to={'/used_transaction'}><button>중고거래</button></Link>
                <Link to={'/airplane'}><button>비행기</button></Link>
                <Link to={'/place'}><button>숙소</button></Link>
                <Link to={'/public_transport'}><button>대중교통</button></Link>
            </div>
            <div className="ecommerce_list">
                <ul>
                    <li><Link to={'/eleven_street'}><div className="eleven_street"></div><p>11번가</p></Link></li>
                    <li><Link to={'/auction'}><div className="auction"></div></Link><p>옥션</p></li>
                    <li><Link to={'/gmarket'}><div className="gmarket"></div></Link><p>G마켓</p></li>
                </ul>
                <ul>
                    <li><Link to={'/coupang'}><div className="coupang"></div></Link><p>쿠팡</p></li>
                    <li><Link to={'/naver_shopping'}><div className="naver_shopping"></div></Link><p>네이버 쇼핑</p></li>
                </ul>
            </div>
        </>
    )
}