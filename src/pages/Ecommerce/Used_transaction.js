import { Link } from "react-router-dom";
import '../../css/Ecommerce/Used_transaction.css'

export default function Used_transaction() {
    return (
        <>
            <div className="title">
                <Link to="/shoppingmall"><span>전자상거래</span></Link>
            </div>
            <div className="tap">
                <Link to={'/shoppingmall'}><button>쇼핑몰</button></Link>
                <Link to={'/used_transaction'}><button>중고거래</button></Link>
                <Link to={'/airplane'}><button>비행기</button></Link>
                <Link to={'/place'}><button>숙소</button></Link>
            </div>
            <div className="ecommerce_list">
                <ul>
                    <li><Link to={'/lightning'}><div className="lightning"></div></Link><p>번개장터</p></li>
                </ul>
            </div>
        </>
    )
}