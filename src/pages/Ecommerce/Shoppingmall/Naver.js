import { Link } from 'react-router-dom';
import '../../../css/Ecommerce/EcommerceUse.css';

export default function Naver(){
    return(
        <>
        <div className="title">
            <Link to="/ecommerce"><span>전자상거래</span></Link>
        </div>
        <div className="tap">
            <Link to={'/shoppingmall'}><button>쇼핑몰</button></Link>
            <Link to={'/used_transaction'}><button>중고거래</button></Link>
            <Link to={'/airplane'}><button>비행기</button></Link>
            <Link to={'/place'}><button>숙소</button></Link>
            <div className='ecommerce_img'>
                <p>네이버쇼핑</p>
                <div className='naver_img'></div>
            </div>
        </div>
        </>
    )
}