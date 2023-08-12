import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Loginpage(){
    // const loginbtn = e => {
    //     axios({
    //         method : 'post',
    //         url : '/users/login',
    //         data : UserInfo
    //     })
    // }
    return(
        <div className="loginpage">
            <div className="loginpage-logo"></div>
            <form className="loginform">
                <div className="loginpage-loginbox">
                    <div className="loginpage-loginbox__idbox">
                        <label for='ID'>아이디 : </label>
                        <input className="ID" type="text" placeholder="전화번호를 입력해주세요 ( '-' 제외)"></input>
                    </div>
                    <div className="loginpage-loginbox__pwbox">
                        <label for='PW'>비밀번호 : </label>
                        <input className="PW" type="password" placeholder="설정하신 비밀번호 4자리를 입력해주세요"></input>
                    </div>
                </div>
                <input type="submit" value={'로그인'} />
                <div className="joinbtn">
                    아직 회원이 아니신가요?
                    <Link to={'/Agreepage'}>회원가입</Link>
                </div>
            </form>
        </div>
    )
}