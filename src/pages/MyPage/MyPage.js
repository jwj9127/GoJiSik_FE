import { Link } from "react-router-dom";
import "../../css/MyPage/MyPage.css";
import img1 from "../../img/MyPage/img_1.jpg";
import img2 from "../../img/MyPage/img_2.jpg";
import img3 from "../../img/MyPage/img_3.jpg";
import img4 from "../../img/MyPage/img_4.jpg";
import img5 from "../../img/MyPage/img_5.jpg";

function MyPage() {
    const backgroundArr = [img1, img2, img3, img4, img5];
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    const backgroundImg = backgroundArr[randomIndex];
    return (
        <>
            <div className='mypage_main'>
                <div className='profil' style={{ backgroundImage: `url(${backgroundImg})` }}>프로필</div>

                <div className='detail'>
                    <div className='nickname'>닉네임</div>
                    <div className='gradeAndpoint'>
                        <div className='grade'>등급</div>
                        <div className='point'>포인트</div>
                    </div>
                </div>

                <div className='view'>
                    <div className='record'>
                        <div className='postHistoryPage'><Link to={'/postHistoryPage'}>게시글 내역 보기</Link></div>
                        <div className='answerHistoryPage'><Link to={'/answerHistoryPage'}>답변 내역 보기</Link></div>
                    </div>
                    <div className='informationPage'><Link to={'/informationPage'}>내 정보 조회</Link></div>
                </div>

                <div className='withdrawal'><Link to={'/withdrawal'}><button>회원 탈퇴</button></Link></div>
            </div>
        </>
    )
}

export default MyPage;