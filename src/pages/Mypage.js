import { Link } from "react-router-dom";
import "../css/MyPage.css"

function MyPage(){
    return(
        <>
        <div className = 'mypage_main'>
            <div className = 'profil'>프로필</div>

            <div className = 'detail'>
                <div className = 'nickname'>닉네임</div>
                <div className = 'gradeAndpoint'>
                    <div className = 'grade'>등급</div>
                    <div className = 'point'>포인트</div>
                </div>
            </div>

            <div className = 'view'>
                <div className = 'record'>
                    <div className = 'postHistoryPage'><Link to = {'/PostHistoryPage'}>게시글 내역 보기</Link></div>
                    <div className = 'answerHistoryPage'><Link to = {'/answerHistoryPage'}>답변 내역 보기</Link></div>
                </div>
                <div className = 'informationPage'><Link to = {'/informationPage'}>내 정보 조회</Link></div>
            </div>
            <div className = 'withdrawal'><Link to = {'/withdrawal'}>회원 탈퇴</Link></div>
        </div>
        </>
    )
}

export default MyPage;