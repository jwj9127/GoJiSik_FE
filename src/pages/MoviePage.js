import { Link } from "react-router-dom";
import '../css/MoviePage.css';

function MoviePage(){
    return(
        <>
        <div className = "kiosk_main">
            <div className = "Movie"><Link to={'/movie'}>영화관</Link></div>
            <div className = "Cafe"><Link to={'/cafe'}>카페</Link></div>
            <div className = "Food"><Link to={'/food'}>햄버거</Link></div>
            <div className = "Dessert"><Link to={'/dessert'}>디저트</Link></div>
        </div>
        <div className = "movie_main">
            <Link to={'/cgv'}><div className = "cgv"></div></Link>
            <Link to={'/megabox'}><div className = "megabox"></div></Link>
            <Link to={'/lotteCinema'}><div className = "lotteCinema"></div></Link>
        </div>
        </>
    )
}

export default MoviePage;