import { Link } from "react-router-dom";
import '../../css/Ecommerce/Place.css';

export default function Place() {
    return(
        <>
        <div className = "ecommerce_main">
            <div className = "shoppingmall"><Link to={'/shoppingmall'}>쇼핑몰</Link></div>
            <div className = "used_transaction"><Link to={'/used_transaction'}>중고거래</Link></div>
            <div className = "airplane"><Link to={'/airplane'}>비행기</Link></div>
            <div className = "place"><Link to={'/place'}>숙소</Link></div>
            <div className = "public_transport"><Link to={'/public_transport'}>대중교통</Link></div>
        </div>
        <div className = "place_main">
            <Link to={'/hotels_combine'}><div className = "hotels_combine"></div></Link>
            <Link to={'/agoda'}><div className = "agoda"></div></Link>
            <Link to={'/yanolja'}><div className = "yanolja"></div></Link>
            <Link to={'/how'}><div className = "how"></div></Link>
        </div>
        </>
    )
}