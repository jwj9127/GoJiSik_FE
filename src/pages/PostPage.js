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
    const [rehitarry, setRehitarry] = useState([]);
    const [togglevalue, setTogglevalue] = useState(false)
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
    // useEffect(() => {
    //     if(postlist){
    //         console.log(postlist.data)
    //     if (value) {
    //         // 조회순 정렬
    //         let sortedArray = postlist.slice().sort((a, b) => b.hits - a.hits);
    //         setTogglevalue(false);
    //         setRehitarry(sortedArray);
    //     } else {
    //         // 최신순 정렬
    //         let sortedArray = postlist.slice().sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    //         setRehitarry(sortedArray);
    //         setTogglevalue(true);
    //     }
    // }
    // }, [value, postlist]);
    return(
        <div className="postbox">
                <h3>게시글 목록</h3>
                {/* <div className="searchbox">
                    <input classname='inputserch' placeholder="검색할 제목을 입력해주세요." onChange={inputsearch}/>
                    <button className="searchbtn" onClick={search}>검색</button>
                </div> */}
                
                <div className="btnbox">
                    <button className="btn postbox-viewtogglebtn" value={togglevalue} onClick={toggleclick}>{value?'조회순':'최신순'}</button>
                    <button className="btn postbox-postwritebox" disabled={!isLogin} onClick={MoveToWrite}>게시글 작성</button>
                </div>
                <div className="postbox-postlistbox">
                <ul className="postlist">
                    {postlist.data?.map((post) => (
                        <Link to={'/postdetails'} state={{id:post.id}}>
                        <li key={post.id}>
                            제목 : {post.title}
                            작성자: {post.writer}
                            작성일: {post.createdDate} 
                            조회수: {post.hits}
                        </li>
                        </Link>
                    ))}
                </ul>
                </div>
        </div>
    )
}