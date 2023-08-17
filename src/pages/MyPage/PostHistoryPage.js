import { useEffect, useState } from "react";
import "../../css/MyPage/PostHistoryPage.css";
import PostDetails from "../PostDetails";
import axios from "axios";

export default function PostHistoryPage() {
    const [postList, setPostList] = useState([]);
    const token = window.localStorage.getItem('token');
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
    , [])

    return (
        <>
            <div className="postHistory_main">
                <div className="questionReview">질문 내역 보기</div>

                <div className="questionList">
                {postList.map((item) => (
                            <PostDetails
                            idx={item.idx}
                            title={item.title}
                            contents={item.contents}
                          />
                ))}
                </div>
            </div>
        </>
    )
}