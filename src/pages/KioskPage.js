import { Link } from "react-router-dom";
import '../css/KioskPage.css';

function KioskPage(){
    return(
        <>
        <div className = "main">
            <div className = "Movie"><Link to={'/movie'}>영화관</Link></div>
            <div className = "Cafe"><Link to={'/cafe'}>카페</Link></div>
            <div className = "Food"><Link to={'/food'}>음식점</Link></div>
            <div className = "Other"><Link to={'/other'}>기타</Link></div>
        </div>
        </>
    )
}

export default KioskPage;