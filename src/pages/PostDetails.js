import React from "react";
import { useEffect, useState } from "react";
import Post from './Post'
import { useParams } from "react-router-dom";

export default function PostDetails () {
    const {question_id} = useParams();
    const [post, setPost] = useState({});
    const getPost = async => {
        const resp = await( await axios.get(`//localhost:8080/post/${question_id}`)).data;
        setPost(resp.data);
    }

    useEffect(()=> {
        getPost()
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