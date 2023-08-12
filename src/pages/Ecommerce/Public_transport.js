import { Link } from "react-router-dom";
import '../../css/Ecommerce/Public_transport.css';

export default function Public_transport() {
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
                    <li><Link to={'/bustago'}><div className="bustago"></div></Link><p>버스타고</p></li>
                    <li><Link to={'/kobus'}><div className="kobus"></div></Link><p>고속버스예매</p></li>
                    <li><Link to={'/letskorail'}><div className="letskorail"></div></Link><p>렛츠코레일</p></li>
                    <li><Link to={'/srail'}><div className="srail"></div></Link><p>SRT</p></li>
                </ul>
            </div>
        </>
    )
}