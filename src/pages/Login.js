import React from "react";
import { Link } from "react-router-dom";

export default function Joinpage(){
    return(
        <div className="loginpage">
            <div className="loginpage-logo"></div>
            <form className="loginform">
                <div className="loginpage-loginbox">
                    <div className="loginpage-loginbox__idbox">
                        <label for='id'>아이디 : </label>
                        <input className="ID" type="text"></input>
                    </div>
                    <div className="loginpage-loginbox__pwbox">
                        <label for='pw'>비밀번호 : </label>
                        <input className="PW" type="psw"></input>
                    </div>
                </div>
                <input type="submit" value={'로그인'}/>
                <div className="joinbtn">
                    아직 회원이 아니신가요?
                    <Link to={'/joinpage'}>회원가입</Link>
                </div>
            </form>
        </div>
    )
}