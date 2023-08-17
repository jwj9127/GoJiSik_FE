import { useEffect, useState } from "react";
import "../../css/MyPage/PostHistoryPage.css";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function PostHistoryPage() {
    const [postList, setPostList] = useState([]);
    const token = window.localStorage.getItem('token');
    useEffect(() => {
        
        // 페이지에 해당하는 게시물 가져오기
        axios({
            method : 'get',
            url : '//localhost:8080/questions/my-question',
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(res => {
            setPostList(res.data)
            console.log(res.data)
        })
        .catch((err)=> console.log(err))
        }
    , [])

    return (
        <div>
            <div className="postHistory_main">
                <div className="questionReview">질문 내역 보기</div>

                <div className="questionList">
                {
                    postList.data?.map((post)=>(
                        <Link to={'/postdetails'} state={{id : post.id}}>
                            <li key={post.id}>
                               제목 : {post.title}   
                            </li>
                        </Link>
                    ))
                }
                </div>
            </div>
        </div>
    )
}