import { useState } from "react";
import "../../css/MyPage/AnswerHistoryPage.css"

function AnswerHistoryPage() {
    const [title, setTitle] = useState([]);
    // useEffect(() => {
    //     axios
    //       .get("users/{title}")
    //       .then((response) => {
    //         setTitle(response.data);
    //       });
    //   }, []);

    const [hits, setHits] = useState([]);
    // useEffect(() => {
    //     axios
    //       .get("users/{hits}")
    //       .then((response) => {
    //         setHits(response.data);
    //       });
    //   }, []);

    const [contents, setContents] = useState([]);
    // useEffect(() => {
    //     axios
    //       .get("users/{contents}")
    //       .then((response) => {
    //         setContents(response.data);
    //       });
    //   }, []);
    
    return (
        <>
            <div className="answerHistory_main">
                <div className="answerReview">답변 내역 보기</div>

                <div className="answerBox">
                    <div className="postName">{title}</div>
                    <div className="review_div">
                        <div className="review">{hits}</div>
                    </div>
                    <div className="showAnswer">{contents}</div>
                </div>

                <div className="answerBox_2">
                    <div className="postName">{title}</div>
                    <div className="review_div">
                        <div className="review">{hits}</div>
                    </div>
                    <div className="showAnswer">{contents}</div>
                </div>
            </div>
        </>
    )
}

export default AnswerHistoryPage;