import React from "react";
import { useEffect, useState, } from "react";
import axios from "axios";
import Comments from './Comments'
import { useLocation } from "react-router-dom";

export default function PostDetails() {
    const location = useLocation()
    window.localStorage.setItem('clickid' , location.state.id)
    const clickId = window.localStorage.getItem('clickid')
    console.log(location.state)
    const [files, setFiles] = useState([]);
    const [thisPost, setThisPost] = useState([]);

    useEffect(()=>{
        axios({
            method : 'get',
            url : `//localhost:8080/questions/${clickId}`,
        })
        .then(res =>{
            setThisPost(res.data.data[0])
            console.log(res.data.data[0])
        })
        .catch(err => console.log(err))
    },[]) 
    useEffect(()=>{
        axios({
            method : 'get',
            url : `//localhost:8080/files/${clickId}`
        })
        .then(res => {
            setFiles(res.data.data)
            console.log(res)
        })
        .catch(err => console.log('에러입니다' + err))
    },[])
    return(
        <div className = 'postdetails'>  
            <h3>제목</h3>
            <h5>작성자 : {thisPost.writer}</h5>
            <div className='postdetails-titlebox'>
                {thisPost.title}
            </div>
            <h3>카테고리</h3>
            <div className='postdetails-categorybox'>
                {thisPost.category}
            </div>
            <div className='postdetails-contentsbox'>
                {thisPost.contents}
            </div>
            <h3>첨부파일</h3>
            <div>
                <div>
                    <img src={`http://localhost:8080/files/image/${clickId}`}/>
                    <audio controls src={`http://localhost:8080/files/audio/${clickId}`} />
                </div>
            </div>
            <h3>댓글</h3>
            <Comments id={thisPost.id}/>
        </div>
    )
}