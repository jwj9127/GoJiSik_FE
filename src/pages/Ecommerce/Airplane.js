import { Link } from "react-router-dom";
import '../../css/Ecommerce/Airplane.css'

export default function Airplane() {
    return (
        <>
            <div className="title">
                <Link to="/shoppingmall"><span>이커머스</span></Link>
            </div>
            <div className="tap">
                <Link to={'/shoppingmall'}><button>쇼핑몰</button></Link>
                <Link to={'/used_transaction'}><button>중고거래</button></Link>
                <Link to={'/airplane'}><button>비행기</button></Link>
                <Link to={'/place'}><button>숙소</button></Link>
            </div>
            <div className="ecommerce_list">
                <ul>
                    <li><Link to={'/skyscanner'}><div className="skyscanner"></div></Link><p>스카이스캐너</p></li>
                    <li><Link to={'/trip'}><div className="trip"></div></Link><p>트립닷컴</p></li>
                    <li><Link to={'/interpark'}><div className="interpark"></div></Link><p>인터파크</p></li>
                </ul>
            </div>
        </>
    )
}