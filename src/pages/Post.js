import React from "react";

export default function Post ({idx, title, category, contents, file}) {
    return(
        <div className="post">
            <div className="post-titlebox">
                제목<span>{title}</span>
            </div>
            <div className="post-categorybox">
                카테고리<span>{category}</span>
            </div>
            <div className="post-contentsbox">
                내용<span>{contents}</span>
            </div>
            <div className="post-filesbox">
                {/* {첨부파일} */}
            </div>
            <h2>댓글</h2>
            <div className="post-commentbox">
                <Comments/>
            </div>
        </div>
    )
}
