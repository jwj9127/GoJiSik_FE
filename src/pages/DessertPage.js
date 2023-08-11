import { Link } from "react-router-dom";
import '../css/DessertPage.css';

export default function DessertPage(){
    return(
        <>
        <div className = "kiosk_main">
            <div className = "Movie"><Link to={'/movie'}>영화관</Link></div>
            <div className = "Cafe"><Link to={'/cafe'}>카페</Link></div>
            <div className = "Food"><Link to={'/food'}>햄버거</Link></div>
            <div className = "Dessert"><Link to={'/dessert'}>디저트</Link></div>
        </div>
        <div className = "dessert_main">
            <div className = "sulbing"></div>
            <div className = "br"></div>
            <div className = "waffle"></div>
        </div>
        </>
    )
}