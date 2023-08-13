import React, { useEffect, useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Postpages() {
    const [value, setValue] = useState(true);
    const [postlist, setPostlist] = useState(null);
    const navigate = useNavigate();

    // const getpostlist = async() => {
    //     const response = await (await axios.get('//localhost:8080/questions')).data
    //     setPostlist(response.data)
    // }

    // useEffect(()=>{
    //     getpostlist();
    // }, [])

    const toggleclick = e => {  
        setValue(value => !value);
    }
    const MoveToWrite = e => {
        navigate('/post/postwrite')
    }
    return(
        <div className="postbox">
            <h1>게시글 목록</h1>
            <ul className="postlist">
                {/* {postlist.map((post)=> (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))} */}
            </ul>
            <button className="btn postbox-viewtogglebtn" onClick={toggleclick}>{value?'조회순':'최신순'}</button>
            <button className="btn postbox-postwritebox" onClick={MoveToWrite}>게시글 작성</button>
        </div>
    )
}