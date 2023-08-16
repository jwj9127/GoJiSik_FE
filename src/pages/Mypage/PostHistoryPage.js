import { useEffect, useState } from "react";
import "../../css/MyPage/PostHistoryPage.css";
import PostDetails from "../PostDetails";
import axios from "axios";

export default function PostHistoryPage() {
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