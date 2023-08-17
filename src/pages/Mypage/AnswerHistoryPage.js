import { useEffect, useState } from "react";
import "../../css/MyPage/AnswerHistoryPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AnswerHistoryPage() {
    const [postList, setPostList] = useState([]);
    const token = window.localStorage.getItem("token");
    useEffect(() => {
        
        // 페이지에 해당하는 게시물 가져오기
        axios({
            method : 'get',
            url : '//localhost:8080/questions/my-answer',
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
    )

    return (
        <>
            <div className="postHistory_main">
                <div className="answerReview">답변 내역 보기</div>

                <div className="answerList">
                {
                    postList.data?.map((post)=>(
                        <Link to={'/postdetails'} state={{id : post.id}}>
                            <li key={post.id}>
                                <ul>제목 : {post.title}</ul>
                                <ul>작성자 : {post.writer}</ul>
                                <ul>내용 : {post.contents}</ul>
                            </li>
                        </Link>
                    ))
                }
                </div>
            </div>
        </>
    )
}