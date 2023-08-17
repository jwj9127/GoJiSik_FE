import { useEffect, useState } from "react";
import "../../css/MyPage/AnswerHistoryPage.css";
import PostDetails from "../PostDetails";
import axios from "axios";

export default function AnswerHistoryPage() {
    const [postList, setPostList] = useState([]);
    const token = window.localStorage.getItem("token");
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
    )
    //     const getPostList = async () => {
            
    //         const {data} = await(await axios.get(`//localhost:8080/questions/my-question`)).data;
    //         return data;
    //     }
    //         // 현재 페이지에 해당하는 게시물로 상태 변경하기
    //         getPostList().then(result => setPostList(result));
    // }, [])

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