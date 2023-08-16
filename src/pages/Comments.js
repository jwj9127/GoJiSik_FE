import React from 'react'
import {GoUpload} from 'react-icons/go'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Comments(post){
    const [comment, setComment] = useState('')
    const [iscomment, setIscomment] = useState(false)
    const [commentlist, setCommetlist] = useState('')
    const [answer_id, setId] = useState('')

    const token = window.localStorage.getItem('token')

    const commentInput = e =>{
        setComment(e.target.value)
        if(comment.length > 0){
            setIscomment(true)
        } else{
            setIscomment(false)
        }
    }
    const commentbtn = e =>{
        axios({
            url : '//localhost:8080/answers',
            method : 'post',
            headers : {
                'token' : token
            },
            data : {contents : comment}
        }).then(res => setId(res.data.id))
    }
    useEffect(()=>{
        axios.get(`//localhost:8080/answers/${post.id}`)
        .then(res => setCommetlist(res.data));
    },[])
    return(
        <>
            <div className="commentsbox">
                <input type='text'className='inputcomment' onChange={commentInput} placeholder={'댓글을 입력해주세요'}/>
                <button className="commentbtn" disabled={!iscomment} onClick = {commentbtn}><GoUpload/></button>
                <hr/>
                <ul>
                    {commentlist.data?.map(item => <li key={item.key}>
                        <div>작성자 : {item.writer}</div>
                        <div>{item.contents}</div>
                        <span>작성일 : {item.createdDate}</span>
                        </li>)}
                </ul>
            </div>  
        </>
    )
}
