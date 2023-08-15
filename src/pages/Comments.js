import React from 'react'
import {GoUpload} from 'react-icons/go'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Comments(){
    const [comment, setComment] = useState('')
    const [iscomment, setIscomment] = useState(false)
    const [commentlist, setCommetlist] = useState('')
    const [answer_id, setId] = useState('')
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
            data : {contents : comment}
        }).then(res => setId(res.data.id))
    }
    useEffect(()=>{
        axios.get(`/answers/${answer_id}`)
        .then(res => setCommetlist(res.data));
    },[])
    return(
        <>
            <div className="commentsbox">
                <input type='text'className='inputcomment' onChange={commentInput} placeholder={'댓글을 입력해주세요'}/>
                <button className="commentbtn" disabled={!iscomment} onClick = {commentbtn}><GoUpload/></button>
                <hr/>
                <ul>
                    {commentlist.map(item => <li>{item.contents}</li>)}
                </ul>
            </div>  
        </>
    )
}
