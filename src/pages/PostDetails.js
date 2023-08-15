import React from "react";
import { useEffect, useState } from "react";
import Post from './Post'
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetails () {
    const {question_id} = useParams();
    const [post, setPost] = useState({});
    

    useEffect(()=> {
       axios({
        method : 'get',
        url : `//localhost:8080/post/${question_id}`,
        responseType : 'json',
       })
       .then((response)=>{
        setPost(response.data)
       })
    },[])

    return(
       <div>
        <Post 
        question_id = {question_id}
        title = {post.title}
        contents={post.contents}
        writer ={post.writer}
        />
       </div>
    )
}