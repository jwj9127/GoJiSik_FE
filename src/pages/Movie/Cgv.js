import { Link } from "react-router-dom";
import '../../css/Movie/Cgv.css';

export default function Cgv(){
    return(
        <>
        <div className = "kiosk_main">
            <div className = "Movie"><Link to={'/movie'}>영화관</Link></div>
            <div className = "Cafe"><Link to={'/cafe'}>카페</Link></div>
            <div className = "Food"><Link to={'/food'}>햄버거</Link></div>
            <div className = "Dessert"><Link to={'/dessert'}>디저트</Link></div>
        </div>
        <div className = "cgv_main">
            <div className = "cgv_logo"></div>
            <div className = "ticketing">
                <div className = "buy_ticket">티켓구매</div>
                <div className = "running_time">영화상영시간표</div>
                <div className = "reservation_ticket">예매티켓출력</div>
                <div className = "photo_play">포토플레이</div>
            </div>
            <div className = "snack">매점 이용 방법</div>
        </div>
        </>
    )
}