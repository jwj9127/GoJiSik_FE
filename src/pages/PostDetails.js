import React from "react";
import { useEffect, useState, } from "react";
import axios from "axios";
import Comments from './Comments'
import { useLocation } from "react-router-dom";
import { Cookies, CookiesProvider } from "react-cookie";
import '../css/postDetails.css';

export default function PostDetails() {
    const location = useLocation()
    window.localStorage.setItem('clickid', location.state.id)
    const clickId = window.localStorage.getItem('clickid')
    console.log(location.state)
    const [files, setFiles] = useState([]);
    const [thisPost, setThisPost] = useState([]);
    const [imageError, setImageError] = useState(false);
    const cookies = new Cookies();

    useEffect(() => {
        axios({
            method: 'get',
            url: `//localhost:8080/questions/${clickId}`,
            withCredentials: true,
            headers: {
                'Set-Cookies': cookies.get('postView')
            }
        })
            .then(res => {
                setThisPost(res.data.data[0])
                console.log(res.data.data[0])
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <CookiesProvider>
            <div className='postdetails'>
                <div className='postdetails-box'>
                    <div className='postdetails-box-box'>
                        <div className='postdetails-titlebox'>
                            <h3 className="postdetails-title">제목 : {thisPost.title}</h3>
                            <h6>작성자 : {thisPost.writer}</h6>
                        </div>
                        <div className='postdetails-contentsbox'>
                            <h3>내용</h3>
                            <div className='postdetails-contents'>
                                {thisPost.contents}
                            </div>
                            <div className='postdetails-categorybox'>
                                <h3>카테고리</h3>
                                <div className='postdetails-category'>
                                    {thisPost.category}
                                </div>
                            </div>
                        </div>
                    </div>


                    {!imageError && (
                        <div className="file">
                            <h3>첨부파일</h3>
                            <img
                                src={`http://localhost:8080/files/image/${clickId}`}
                                onError={() => setImageError(true)}
                                style={{ display: imageError ? 'none' : 'block' }}
                                alt="Attachment"
                            />
                        </div>
                    )}
                    <div className="commentsfullbox">
                        <Comments id={thisPost.id} className="commentsbox"/>
                    </div>
                </div>

            </div>
        </CookiesProvider>
    )
}