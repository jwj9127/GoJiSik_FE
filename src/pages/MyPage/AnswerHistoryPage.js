import { useEffect, useState } from "react";
import "../../css/MyPage/AnswerHistoryPage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

export default function AnswerHistoryPage() {
    const navigate = useNavigate();
    const [postList, setPostList] = useState([]);
    const token = window.localStorage.getItem("token");
    const tableheader = ['작성자', '작성일']
    const [repostlist, setRepostlist] = useState([])

    console.log("123")

    useEffect(() => {
        console.log(1)
        // 페이지에 해당하는 게시물 가져오기
        axios({
            method : 'get',
            url : '/answers/my-answer',
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(res => {
            setPostList(res.data)
            const reverselist = res.data.data.reverse()
            console.log(res.data)
            setRepostlist(reverselist)
        })
        .catch((err)=> console.log(err))
        },[])

    return (
        <>
            <div className="answerHistorybox">
                <div className="answerHistorybox-allbox"> 
                    <div className="answerHistorybox-allbox__headerbox">
                        <h3>답변 목록</h3>
                    </div>
                </div>
                <div className="answerbox-postlistbox">
                    <table>
                        <thead>
                            <tr>
                                {tableheader?.map(head => {
                                return <th>{head}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                        {repostlist?.map(post => {
                                return (
                                    <tr >
                                        <Link to={'/postdetails'} state={{id : post.id}}>
                                        <td>{post.writer}</td>
                                        <td>{moment(post.createdDate, "YYYY.MM.DD").format("YYYY-MM-DD")}</td>
                                        </Link>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

