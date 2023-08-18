import { useEffect, useState } from "react";
import "../../css/MyPage/PostHistoryPage.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import moment from "moment";

export default function PostHistoryPage() {
    const [value, setValue] = useState(true);
    const [postList, setPostList] = useState([]);
    const token = window.localStorage.getItem('token');
    const tableheader = ['작성자', '제목', '작성일', '조회수']
    const [repostlist, setRepostlist] = useState([])
    const [bestlist, setBestlist] = useState([])
    const [togglevalue, setTogglevalue] = useState(false)
    useEffect(() => {

        // 페이지에 해당하는 게시물 가져오기
        axios({
            method: 'get',
            url: '//localhost:8080/questions/my-question',
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then(res => {
                const reverselist = res.data.data.reverse()
                const bestpostlist = res.data.data.sort((a, b) => (b.hits - a.hits))
                setPostList(res.data)
                console.log(res.data)
                setRepostlist(reverselist)
                setBestlist(bestpostlist)
            })
            .catch((err) => console.log(err))
    }
        , [])

    const toggleclick = e => {
        setValue(value => !value);
    }

    return (

        <div className="postHistorybox">
            <div className="postHistorybox-allbox">
                <div className="postHistorybox-allbox__headerbox">
                    <h3>게시글 목록</h3>
                    <div className="btnbox">
                        <button className="btn postHistorybox-viewtogglebtn" value={togglevalue} onClick={toggleclick}>{value ? '조회순' : '최신순'}</button>
                    </div>
                </div>
                <div className="postHistorybox-postlistbox">
                    <table>
                        <thead>
                            <tr>
                                {tableheader?.map(head => {
                                    return <th>{head}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {bestlist?.map(post => {
                                return (
                                    <tr>
                                        <td>{post.writer}</td>
                                        <Link to={'/postdetails'} state={{ id: post.id }}><td>{post.title}</td></Link>
                                        <td>{moment(post.createdDate, "YYYY.MM.DD").format("YYYY-MM-DD")}</td>
                                        <td>{post.hits}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}