import { useEffect, useState } from "react";
import "../../css/MyPage/AnswerHistoryPage.css";
import PostDetails from "../PostDetails";
import axios from "axios";

export default function AnswerHistoryPage() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        
        // 페이지에 해당하는 게시물 가져오기
        const getPostList = async () => {
            const user_id = window.localStorage.getItem("token");
            const {data} = await(await axios.get(`//localhost:8080/questions/${user_id}`)).data;
            return data;
        }
            // 현재 페이지에 해당하는 게시물로 상태 변경하기
            getPostList().then(result => setPostList(result));
    }, [])

    return (
        <>
            <div className="postHistory_main">
                <div className="answerReview">답변 내역 보기</div>

                <div className="answerList">
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