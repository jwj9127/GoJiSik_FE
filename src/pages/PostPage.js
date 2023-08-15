import React, { useEffect, useState  } from "react";
import {useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../css/postpages.css'


export default function Postpages() {
    const [value, setValue] = useState(true);
    const [postlist, setPostlist] = useState([]);
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState('')
    const [searchlist, setSearchlist] = useState('')

    useEffect(()=>{
        axios({
            method: 'get',
            url : "//localhost:8080/questions",
        })
        .then((response)=>{
            setPostlist(response.data)
        })
        .catch((error) => {
            console.error('에러왜나 : ', error)
        })
    }, []);

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
                {postlist.data?.map((post) => (
                    <li key={post.id}>
                         <Link to={`/post/${post.id}`}>{post.title}</Link>
                         작성자: {post.name}
                    </li>
                 ))}
            </ul>
            </div>
        </div>
    )
}