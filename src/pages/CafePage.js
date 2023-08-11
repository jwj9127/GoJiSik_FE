import { Link } from "react-router-dom";
import '../css/CafePage.css';

export default function CafePage(){
    return(
        <>
        <div className = "kiosk_main">
            <div className = "Movie"><Link to={'/movie'}>영화관</Link></div>
            <div className = "Cafe"><Link to={'/cafe'}>카페</Link></div>
            <div className = "Food"><Link to={'/food'}>햄버거</Link></div>
            <div className = "Dessert"><Link to={'/dessert'}>디저트</Link></div>
        </div>
        <div className = "cafe_main">
            <div className = "twosome"></div>
            <div className = "mega"></div>
            <div className = "ediya"></div>
            <div className = "palk"></div>
            <div className = "hollys"></div>
        </div>
        </>
    )
}