import { useEffect, useState } from "react";
import "../../css/MyPage/PostHistoryPage.css"
import { useSelector } from "react-redux";
import {useSearchParams} from "react-router-dom";
import Post from "../Post";

export default function PostHistoryPage() {
    const [pageCount, setPageCount] = useState(0);
    const [postList, setPostList] = useState([]);

    const [title, setTitle] = useState([]);
    // useEffect(() => {
    //     axios
    //       .get("users/{title}")
    //       .then((response) => {
    //         setTitle(response.data);
    //       });
    //   }, []);

    const [hits, setHits] = useState([]);
    // useEffect(() => {
    //     axios
    //       .get("users/{hits}")
    //       .then((response) => {
    //         setHits(response.data);
    //       });
    //   }, []);

    const [contents, setContents] = useState([]);
    // useEffect(() => {
    //     axios
    //       .get("users/{contents}")
    //       .then((response) => {
    //         setContents(response.data);
    //       });
    //   }, []);

    // user의 id를 알아내기 위해 token 가져오기
    const token = useSelector(state => state.Auth.token);

    useEffect(() => {
        
    // 페이지에 해당하는 게시물 가져오기
    const getPostList = async () => {
        const page_number = useSearchParams.get("page");
        // const user_id = jwtUtils.getId(token);
        // const {data} = await api.get(`/api/user/list?page_number=${page_number}&page_size=4&user_id=${user_id}`);
        // return data;
    }
        // 현재 페이지에 해당하는 게시물로 상태 변경하기
        getPostList().then(result => setPostList(result));
        // 게시물 전체 갯수 구하기
        const getTotalPost = async () => {
        //   const user_id = jwtUtils.getId(token);
        //   const {data} = await api.get(`/api/user/count/${user_id}`);
        //   return data.total;
        }
        // 전체 post 갯수 결과 올림
        getTotalPost().then(result => setPageCount(result));
      }, [])

    return (
        <>
            <div className="postHistory_main">
                <div className="questionReview">질문 내역 보기</div>

                <div className="questionList">
                {postList.map((item, index) => (
                    <Post key={item.id} username={item.user.username}
                    title={item.title} content={item.content}
                    post_id={item.id}
                    />
                ))}
                </div>
            </div>
        </>
    )
}