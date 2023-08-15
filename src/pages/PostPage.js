import React, { useEffect, useState  } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/postpages.css'

export default function Postpages() {
    const [value, setValue] = useState(true);
    const [postlist, setPostlist] = useState(null);
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState('')
    const [searchlist, setSearchlist] = useState('')
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
    const inputsearch = e => {
        setInputSearch(e.target.value);
    }
    const search = e => {
        setSearchlist('s')
    }
    return(
        <div className="postbox">
            <h3>게시글 목록</h3>
            <div className="searchbox">
                <input classname='inputserch' placeholder="검색할 제목을 입력해주세요." onChange={inputsearch}/>
                <button className="searchbtn" onClick={search}>검색</button>
            </div>
            
            <div className="btnbox">
                <button className="btn postbox-viewtogglebtn" onClick={toggleclick}>{value?'조회순':'최신순'}</button>
                <button className="btn postbox-postwritebox" onClick={MoveToWrite}>게시글 작성</button>
            </div>
            <div className="postbox-postlistbox">
                <ul className="postlist">
                    {/* {postlist.map((post)=> (
                        <li key={post.id}>
                            <Link to={`/post/${question_id}`}>{post.title}</Link>
                            작성자: {post.name}
                        </li>
                    ))} */}
                </ul>
            </div>
        </div>
    )
}