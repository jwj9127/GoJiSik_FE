import React, { useEffect, useState  } from "react";
import {useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../css/postpages.css'
import PostDetails from "./PostDetails";


export default function Postpages() {
    const [value, setValue] = useState(true);
    const [postlist, setPostlist] = useState([]);
    const navigate = useNavigate();
    const [inputSearch, setInputSearch] = useState('')
    const [searchlist, setSearchlist] = useState('')
    const [isClick, setIsClick] = useState(false)
    const [postInfo, setPostInfo] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [isInput, setIsinput] = useState(false)
    const [clickId, setClickId] = useState('')

    const isClicked = (e) => {
        setIsClick(true)
        setClickId(e.target.key)
    }

    const getpostInfo = () => {
        axios({
            method:'get',
            url:`//localhost:8080/questions/${clickId}`
        })
        .then((res) => setPostInfo(res.data))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        getpostInfo();
    }, [isClick])
    
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

    useEffect(() => {
        if(window.localStorage.getItem('token') === null){
            setIsLogin(false)
        }else{
            setIsLogin(true)
        }
    })

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
    useEffect(()=>{
        if(inputSearch > 0){
            setIsinput(true)
        } else{
            setIsinput(false)
        }
    },[inputSearch])
    const search = e => {
        
    }
    return(
        <div className="postbox">
            {isClick? <PostDetails post={postInfo}/> :
            <>
                <h3>게시글 목록</h3>
                <div className="searchbox">
                    <input classname='inputserch' placeholder="검색할 제목을 입력해주세요." onChange={inputsearch}/>
                    <button className="searchbtn" disabled={!isInput} onClick={search}>검색</button>
                </div>
                
                <div className="btnbox">
                    <button className="btn postbox-viewtogglebtn" onClick={toggleclick}>{value?'조회순':'최신순'}</button>
                    <button className="btn postbox-postwritebox" disabled={!isLogin} onClick={MoveToWrite}>게시글 작성</button>
                </div>
                <div className="postbox-postlistbox">
                <ul className="postlist">
                    {postlist.data?.map((post) => (
                        <li key={post.id}>
                            <Link to={`/post/postdetails`} onClick={isClicked}>{post.title}</Link>
                            작성자: {post.writer}
                            작성일: {post.createdDate} 
                            조회수: {post.hits}
                        </li>
                    ))}
                </ul>
                </div>
            </>
            }
        </div>
    )
}