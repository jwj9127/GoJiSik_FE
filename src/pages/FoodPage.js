import { Link } from "react-router-dom";
import '../css/FoodPage.css';

export default function FoodPage(){
    return(
        <>
        <div className = "kiosk_main">
            <div className = "Movie"><Link to={'/movie'}>영화관</Link></div>
            <div className = "Cafe"><Link to={'/cafe'}>카페</Link></div>
            <div className = "Food"><Link to={'/food'}>햄버거</Link></div>
            <div className = "Dessert"><Link to={'/dessert'}>디저트</Link></div>
        </div>
        <div className = "food_main">
            <div className = "lotteria"></div>
            <div className = "moms"></div>
            <div className = "mcdonald"></div>
            <div className = "burgerking"></div>
            <div className = "kfc"></div>
        </div>
        </>
    )
}