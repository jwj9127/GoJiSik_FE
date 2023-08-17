import React from "react";
import { useEffect, useState, } from "react";
import axios from "axios";
import Comments from './Comments'
import { useLocation } from "react-router-dom";
import { Cookies, CookiesProvider } from "react-cookie";

export default function PostDetails() {
    const location = useLocation()
    window.localStorage.setItem('clickid' , location.state.id)
    const clickId = window.localStorage.getItem('clickid')
    console.log(location.state)
    const [files, setFiles] = useState([]);
    const [thisPost, setThisPost] = useState([]);
    const [imageError, setImageError] = useState(false);
    const cookies = new Cookies();

    useEffect(()=>{
        axios({
            method : 'get',
            url : `//localhost:8080/questions/${clickId}`,
            withCredentials : true,
            headers : {
               'Set-Cookies' : cookies.get('postView')
            }
        })
        .then(res =>{
            setThisPost(res.data.data[0])
            console.log(res.data.data[0])
        })
        .catch(err => console.log(err))
    },[]) 
    return(
        <CookiesProvider>
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
            <h3>내용</h3>
            <div className='postdetails-contentsbox'>
                {thisPost.contents}
            </div>
            
            {!imageError && (
                    <div>
                        <h3>첨부파일</h3>
                        <img
                            src={`http://localhost:8080/files/image/${clickId}`}
                            onError={() => setImageError(true)}
                            style={{ display: imageError ? 'none' : 'block' }}
                            alt="Attachment"
                        />
                    </div>
                )}
            <Comments id={thisPost.id}/>
        </div>
        </CookiesProvider>
    )
}