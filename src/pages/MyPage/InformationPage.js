import "../../css/MyPage/InformationPage.css";

function InformationPage() {
    return (
        <>
            <div className="information_main">
                <div className="informationFix">내 정보 수정</div>
                <div className="fix">
                    <div className="id">아이디</div>
                    <div className="pw">비밀번호</div>
                    <div className="email">이메일</div>
                    <div className="nickName">닉네임</div>
                </div>
                <div className="fixEnd">정보 수정하기</div>
            </div>
        </>
    )
}

export default InformationPage;