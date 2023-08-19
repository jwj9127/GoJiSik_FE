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
    const token = window.localStorage.getItem('token')
    const username = window.localStorage.getItem('username')
    useEffect(() => {
            axios({
                method : 'get',
                url : '/users',
                headers :{
                    Authorization: `Bearer ${token}`
                }
            })
              .then((result) => {
                console.log(result)
                window.localStorage.setItem('username', result.data.username)
                window.localStorage.setItem('birthday', result.data.birthday)
            })
              .catch(err=> console.log(err))
        }, []);
    
    return (
        <>
            <div className='mypage_main'>
                <div className='profil' style={{ backgroundImage: `url(${backgroundImg})`}}>{username}</div>
                <div className='view'>
                    <div className='postHistoryPage'><Link to={'/postHistoryPage'}>게시글 내역 보기</Link></div>
                    <div className='answerHistoryPage'><Link to={'/answerHistoryPage'}>답변 내역 보기</Link></div>
                    <div className='userSearchPage'><Link to={'/userSearchPage'}>내 정보 조회</Link></div>
                </div>
            </div>
        </>
    )
}
