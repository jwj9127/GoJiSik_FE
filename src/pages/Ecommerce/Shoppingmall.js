import { Link } from "react-router-dom";
import '../../css/Ecommerce/Shoppingmall.css'

export default function Shoppingmall() {
    return(
        <>
        <div className = "ecommerce_main">
            <div className = "shoppingmall"><Link to={'/shoppingmall'}>쇼핑몰</Link></div>
            <div className = "used_transaction"><Link to={'/used_transaction'}>중고거래</Link></div>
            <div className = "airplane"><Link to={'/airplane'}>비행기</Link></div>
            <div className = "place"><Link to={'/place'}>숙소</Link></div>
            <div className = "public_transport"><Link to={'/public_transport'}>대중교통</Link></div>
        </div>
        <div className = "shoppingmall_main">
            <Link to={'/eleven_street'}><div className = "eleven_street"></div></Link>
            <Link to={'/auction'}><div className = "auction"></div></Link>
            <Link to={'/gmarket'}><div className = "gmarket"></div></Link>
            <Link to={'/coupang'}><div className = "coupang"></div></Link>
            <Link to={'/naver_shopping'}><div className = "naver_shopping"></div></Link>
        </div>
        </>
    )
}