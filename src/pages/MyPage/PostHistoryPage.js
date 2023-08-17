import { Link } from "react-router-dom";
import "../../css/MyPage/MyPage.css";
import img1 from "../../img/MyPage/img_1.jpg";
import img2 from "../../img/MyPage/img_2.jpg";
import img3 from "../../img/MyPage/img_3.jpg";
import img4 from "../../img/MyPage/img_4.jpg";
import img5 from "../../img/MyPage/img_5.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MyPage() {
    const backgroundArr = [img1, img2, img3, img4, img5];
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    const backgroundImg = backgroundArr[randomIndex];
        
    const [id, setId] = useState([]);
    const [grade, setGrade] = useState([]);
    const [point, setPoint] = useState([]);
    const [token, setToken] = useState();
    
    useEffect(() => {
        const storedId = window.localStorage.getItem("phonenum");
        const storedToken = window.localStorage.getItem("token");

        if (storedId && storedToken) {
            setId(storedId);
            setToken(storedToken);
      
            axios
              .get(`//localhost:8080/users`, {
                headers: { Authorization: `Bearer ${storedToken}` },
              })
              .then((result) => {
                window.localStorage.setItem("phonenum", result.data.phonenum);
                // setGrade(response.data);
                // setPoint(response.data);
              })
              .catch((err) => alert(err.response.data.message));
          }
        }, []);
    
    
    
    return (
        <>
            <div className='mypage_main'>
                <div className='profil' style={{ backgroundImage: `url(${backgroundImg})` }}>{id}</div>

                <div className='detail'>
                    <div className='nickname'>{id}</div>
                    <div className='gradeAndpoint'>
                        {/* <div className='grade'>{grade}</div>
                        <div className='point'>{point}</div> */}
                    </div>
                </div>

                <div className='view'>
                    <div className='record'>
                        <div className='postHistoryPage'><Link to={'/postHistoryPage'}>게시글 내역 보기</Link></div>
                        <div className='answerHistoryPage'><Link to={'/answerHistoryPage'}>답변 내역 보기</Link></div>
                    </div>
                    <div className='userSearchPage'><Link to={'/userSearchPage'}>내 정보 조회</Link></div>
                </div>
            </div>
        </>
    )
}