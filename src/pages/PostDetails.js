import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Comments from './Comments'

export default function PostDetails(post) {

    const [files, setFiles] = useState([]);

    useEffect(()=>{
        axios({
            method : 'get',
            url : `//localhost::8080/questions/${post.id}`,
        })
        .then(res => setFiles(files))
        .catch(err => console.log(err))
    },[]) 

    return(
        <div className = 'postdetails'>  
            <h3>제목</h3>
            <h5>작성자 : {post.writer}</h5>
            <div className='postdetails-titlebox'>
                {post.title}
            </div>
            <h3>카테고리</h3>
            <div className='postdetails-categorybox'>
                {post.category}
            </div>
            <div className='postdetails-contentsbox'>
                {post.contents}
            </div>
            <h3>첨부파일</h3>
            <div>
               {files.map(item => {
                <div>{item}</div>
               })}
            </div>
            <h3>댓글</h3>
            <Comments id={post.id}/>
        </div>
    )
}