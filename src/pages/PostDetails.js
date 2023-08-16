import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Comments from './Comments'

export default function PostDetails(post) {

    const [files, setFiles] = useState([]);
    const [thisPost, setThisPost] = useState([]);

    useEffect(()=>{
        axios({
            method : 'get',
            url : `//localhost:8080/questions/${post.post}`,
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
            url : `//localhost:8080/files/${post.post}`
        })
        .then(res => setFiles(res.data.file))
        .catch(err => console.log('에러입니다' + err))
    })
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
               {files.map(item => {
                <div>{item}</div>
               })}
            </div>
            <h3>댓글</h3>
            <Comments id={thisPost.id}/>
        </div>
    )
}