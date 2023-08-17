import React from 'react'
import {GoUpload} from 'react-icons/go'
import axios from 'axios'
import { useState, useEffect } from 'react'
import moment from "moment/moment";

export default function Comments({id}){
    const [comment, setComment] = useState('')
    const [iscomment, setIscomment] = useState(false)
    const [commentlist, setCommetlist] = useState('')
    const [answer_id, setId] = useState('')
    const [postInfo, setPostInfo] = useState([])

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
        console.log('gdgd')
        console.log(id)
        console.log(comment)
        e.preventDefault();
        axios({
            url : `//localhost:8080/answers/${id}`,
            method : 'post',
            headers : {
                'Authorization' : `Bearer ${token}`
            },
            data : {contents : comment}
        }).then(res => {
            setId(res.data.id)
            getCommentlist()
        })
    }
    const getCommentlist = ()=> {
        console.log(id)
        axios({
            method : 'get',
            url : `//localhost:8080/answers/${id}`
        })
        .then(res => {
            setCommetlist(res.data)
        });
    }
    useEffect(()=>{
        if (id) {
            getCommentlist();
        }
    },[id])
        
    
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
                        <span>작성일 : {moment(item.createdDate, "YYYY.MM.DD").format("YYYY-MM-DD")}</span>
                        </li>)}
                </ul>
            </div>  
        </>
    )
}
