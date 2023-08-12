import { Link } from "react-router-dom";
import '../../css/Ecommerce/Used_transaction.css'

export default function Used_transaction() {
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
                    <li><Link to={'/carrot'}><div className="carrot"></div></Link><p>당근마켓</p></li>
                    <li><Link to={'/lightning'}><div className="lightning"></div></Link><p>번개장터</p></li>
                    <li><Link to={'/used_country'}><div className="used_country"></div></Link><p>중고나라</p></li>
                </ul>
            </div>
        </>
    )
}