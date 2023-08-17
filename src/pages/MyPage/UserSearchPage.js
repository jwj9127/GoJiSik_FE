import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import '../../css/MyPage/UserSearchPage.css'

export default function UserSearchPage(){
    const [id, setId] = useState([]);
    const [token, setToken] = useState();
    const [beforeName, setBeforeName] = useState();
    const [beforebirthday, setBeforeBirthday] = useState();
    const [beforephone, setBeforePhone] = useState();

    useEffect(()=>{
        const storedId = window.localStorage.getItem("phonenum");
        const storedToken = window.localStorage.getItem("token");
        const storedName = window.localStorage.getItem("username");
        const storedBirthday = window.localStorage.getItem("birthday");
        setId(storedId);
        setToken(storedToken);
        setBeforeName(storedName);
        setBeforeBirthday(storedBirthday.substring(-4,8));
        setBeforePhone(storedId);

        axios.get(`//localhost:8080/users`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          }).then((result) =>{
            window.localStorage.setItem("username", result.data.username);
            window.localStorage.setItem("phonenum", result.data.phonenum);
            window.localStorage.setItem("birthday", result.data.birthday);
          })
    })

    return (
        <>
        <div>정보 조회
            <div className="search_name">이름
                <span>{beforeName}</span>
            </div>
            <div className="search_birthday">생년월일
                <span>{beforebirthday}</span>
            </div>
            <div className="search_phonenum">전화번호
                <span>{beforephone}</span>
            </div>
            <div className=''><Link to={'/modifyUserPage'}>내 정보 수정</Link></div>
        </div>
        </>
    )
}