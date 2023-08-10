import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
export default function Postpages() {
    const [value,setValue] = useState(true);
    const navigate = useNavigate();
    const toggleclick = e => {  
        setValue(value => !value);
    }
    const MoveToWrite = e => {
        navigate('/post/postwrite')
    }
    return(
        <div className="postbox">
            <button className="btn postbox-viewtogglebtn" onClick={toggleclick}>{value?'조회순':'최신순'}</button>
            <button className="btn postbox-postwritebox" onClick={MoveToWrite}>게시글 작성</button>
        </div>
    )
}