import "../css/AnswerHistoryPage.css"

function AnswerHistoryPage(){
    return(
        <>
        <div className = "main">
            <div className = "answerReview">답변 내역 보기</div>
            
            <div className = "answerBox">
                <div className = "postName">게시글 제목</div>
                <div className = "review_div">
                    <div className = "review">조회 수</div>
                </div>
                <div className = "showAnswer">해당 게시글 답변</div>
            </div>

            <div className = "answerBox_2">
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

export default AnswerHistoryPage;