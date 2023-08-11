import "../../css/MyPage/PostHistoryPage.css"

function PostHistoryPage(){
    return(
        <>
        <div className = "postHistory_main">
            <div className = "questionReview">질문 내역 보기</div>

            <div className = "questionBox">
                <div className = "postName">게시글 제목</div>
                <div className = "review_div">
                    <div className = "review">조회 수</div>
                </div>
                <div className = "showAnswer">해당 게시글 답변</div>
            </div>

            <div className = "questionBox_2">
                <div className = "postName">게시글 제목</div>
                <div className = "review_div">
                    <div className = "review">조회 수</div>
                </div>
                <div className = "showAnswer">해당 게시글 답변</div>
            </div>
        </div>
        </>
    )
}

export default PostHistoryPage;