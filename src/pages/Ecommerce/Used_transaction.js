import { Link } from "react-router-dom";
import '../../css/Ecommerce/Used_transaction.css'

export default function Used_transaction() {
    return(
        <>
        <div className = "ecommerce_main">
            <div className = "shoppingmall"><Link to={'/shoppingmall'}>쇼핑몰</Link></div>
            <div className = "used_transaction"><Link to={'/used_transaction'}>중고거래</Link></div>
            <div className = "airplane"><Link to={'/airplane'}>비행기</Link></div>
            <div className = "place"><Link to={'/place'}>숙소</Link></div>
            <div className = "public_transport"><Link to={'/public_transport'}>대중교통</Link></div>
        </div>
        <div className = "used_transaction_main">
            <Link to={'/carrot'}><div className = "carrot"></div></Link>
            <Link to={'/lightning'}><div className = "lightning"></div></Link>
            <Link to={'/used_country'}><div className = "used_country"></div></Link>
        </div>
        </>
    )
}