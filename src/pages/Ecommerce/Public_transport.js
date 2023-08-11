import { Link } from "react-router-dom";
import '../../css/Ecommerce/Public_transport.css';

export default function Public_transport() {
    return(
        <>
        <div className = "ecommerce_main">
            <div className = "shoppingmall"><Link to={'/shoppingmall'}>쇼핑몰</Link></div>
            <div className = "used_transaction"><Link to={'/used_transaction'}>중고거래</Link></div>
            <div className = "airplane"><Link to={'/airplane'}>비행기</Link></div>
            <div className = "place"><Link to={'/place'}>숙소</Link></div>
            <div className = "public_transport"><Link to={'/public_transport'}>대중교통</Link></div>
        </div>
        <div className = "public_transport_main">
            <Link to={'/bustago'}><div className = "bustago"></div></Link>
            <Link to={'/kobus'}><div className = "kobus"></div></Link>
            <Link to={'/letskorail'}><div className = "letskorail"></div></Link>
            <Link to={'/srail'}><div className = "srail"></div></Link>
        </div>
        </>
    )
}