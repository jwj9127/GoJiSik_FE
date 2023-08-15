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
    const [token, setToken] = useState();
    useEffect(()=>{
        setToken(window.localStorage.getItem('token'));
    })

    const handleDeleteProfile = (e) => {
        e.preventDefault();
        if (window.confirm('확인을 누르면 회원 정보가 삭제됩니다.')) {
          axios
            .delete('//localhost:8080/users/{id}')
            .then(() => {
              alert('그동안 이용해주셔서 감사합니다.');
            })
            .then(
                ()=>{
                    navigator('/');
                }
            )
            .catch((err) => alert(err.response.data.message));
        } else {
          return;
        }
    };

    const [id, setId] = useState([]);
    const [name, setName] = useState([]);
    const [grade, setGrade] = useState([]);
    const [point, setPoint] = useState([]);
    useEffect(() => {
        axios
          .get("//localhost:8080/users/{id}")
          .then((response) => {
            setId(response.data);
            setName(response.data);
            // setGrade(response.data);
            // setPoint(response.data);
          });
      }, []);



    return (
        <>
            <div className='mypage_main'>
                <div className='profil' style={{ backgroundImage: `url(${backgroundImg})` }}>{id}</div>

                <div className='detail'>
                    <div className='nickname'>{name}</div>
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
                    <div className='modifyUserPage'><Link to={'/modifyUserPage'}>내 정보 조회</Link></div>
                </div>

                <div className='withdrawal'><button onClick={handleDeleteProfile}>회원 탈퇴</button></div>
            </div>
        </>
    )
}