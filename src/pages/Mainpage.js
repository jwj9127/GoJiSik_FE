import {React, useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/Mainpage.css'

export default function Main() {
    const navigate = useNavigate();
    const [postdata, setPostdata] = useState([]);
    useEffect(()=>{
        const BestPost = async () => {
            try{
                const response = await axios.get('/questions')
                setPostdata(response)
            } catch(error){
                console.error('Error fetching data:', error);
            }
        };

        BestPost();
    }, [])
    const MoveToGover = e => {
        navigate('/goverment24')
    }
    const MoveToKiosk = e => {
        navigate('/kiosk');
    }
    const MoveToEcor = e => {
        navigate('/eCormmerce');
    }
    return(
        <div className="Mainbody">
         <div className="mainbox">
            <div className="mainbox-categorybox">
                <div className="mainbox-categorybox__goverment24box" onClick={MoveToGover}>
                    정부24
                    <p>바로가기</p>
                </div>
                <div className="mainbox-categorybox__kioskbox" onClick={MoveToKiosk}>
                    키오스크
                    <p>바로가기</p>
                </div>
                <div className="mainbox-categorybox__ecommercebox" onClick={MoveToEcor}>
                    이커머스
                    <p>바로가기</p>
                </div>
            </div>
            <div className="mainbox-bestpostbox">
                <h2>인기 게시글 목록</h2>
                {postdata.map(((item) => (
                                <li value={item} key={item}>
                                    {item}
                                </li>
                            )))}
            </div>
         </div>
        </div>    
    )
}