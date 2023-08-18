import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../css/postpages.css'
import moment from "moment/moment";


export default function Postpages() {
    const [value, setValue] = useState(true);
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState('')
    const [searchlist, setSearchlist] = useState('')
    const [isClick, setIsClick] = useState(false)
    const [postInfo, setPostInfo] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [rehitarry, setRehitarry] = useState([]);
    const [togglevalue, setTogglevalue] = useState(false)
    const tableheader = ['작성자', '제목', '작성일', '조회수']
    const [repostlist, setRepostlist] = useState([])
    const [bestlist, setBestlist] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: "//localhost:8080/questions",
        })
            .then((response) => {
                const reverselist = response.data.data.reverse()
                const bestpostlist = response.data.data.sort((a, b) => (b.hits - a.hits))
                console.log(bestpostlist)
                console.log(reverselist)
                setRepostlist(reverselist)
                setBestlist(bestpostlist)
            })
            .catch((error) => {
                console.error('에러왜나 : ', error)
            })
    }, []);

    useEffect(() => {
        if (window.localStorage.getItem('token') === null) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    }, [])


    const toggleclick = e => {
        setValue(value => !value);
    }
    const MoveToWrite = e => {
        navigate('/post/postwrite')
    }
    const inputsearch = e => {
        setInputSearch(e.target.value);
        console.log(inputSearch)
    }
    return (
        <div className="postbox">
            <div className="postbox-allbox">
                <div className="postbox-allbox__headerbox">
                    <h3>게시글 목록</h3>
                    <div className="btnbox">
                        <button className="btn postbox-viewtogglebtn" value={togglevalue} onClick={toggleclick}>{value ? '조회순' : '최신순'}</button>
                        <button className="btn postbox-postwritebox" disabled={!isLogin} onClick={MoveToWrite}>게시글 작성</button>
                    </div>
                </div>
                <div className="postbox-postlistbox">
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