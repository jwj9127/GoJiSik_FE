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
            setFiles(res.files)
            setThisPost(res.data)
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
            <h5>작성자 : {thisPost.data[0].writer}</h5>
            <div className='postdetails-titlebox'>
                {thisPost.data[0].title}
            </div>
            <h3>카테고리</h3>
            <div className='postdetails-categorybox'>
                {thisPost.data[0].category}
            </div>
            <div className='postdetails-contentsbox'>
                {thisPost.data[0].contents}
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