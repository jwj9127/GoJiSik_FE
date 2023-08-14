import { Link } from "react-router-dom";
import '../../css/Ecommerce/Place.css';

export default function Place() {
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
            </div>
            <div className="ecommerce_list">
                <ul>
                    <li><Link to={'/hotels_combine'}><div className="hotels_combine"></div></Link><p>호텔스컴바인</p></li>
                    <li><Link to={'/yanolja'}><div className="yanolja"></div></Link><p>야놀자</p></li>
                    <li><Link to={'/how'}><div className="how"></div></Link><p></p>여기어때</li>
                </ul>
            </div>
        </>
    )
}