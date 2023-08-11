import { Link } from "react-router-dom";
import '../../css/Ecommerce/Airplane.css'

export default function Airplane() {
    return(
        <>
        <div className = "ecommerce_main">
            <div className = "shoppingmall"><Link to={'/shoppingmall'}>쇼핑몰</Link></div>
            <div className = "used_transaction"><Link to={'/used_transaction'}>중고거래</Link></div>
            <div className = "airplane"><Link to={'/airplane'}>비행기</Link></div>
            <div className = "place"><Link to={'/place'}>숙소</Link></div>
            <div className = "public_transport"><Link to={'/public_transport'}>대중교통</Link></div>
        </div>
        <div className = "airplane_main">
            <Link to={'/skyscanner'}><div className = "skyscanner"></div></Link>
            <Link to={'/trip'}><div className = "trip"></div></Link>
            <Link to={'/interpark'}><div className = "interpark"></div></Link>
        </div>
        </>
    )
}