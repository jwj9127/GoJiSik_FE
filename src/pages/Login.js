import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/login.css'

export default function Loginpage(){
    const UserInfo = new FormData();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('')
    const [token, setToken] = useState('')

    const StartLogin = e => {
        e.preventDefault();
        UserInfo.append('phone_num', id)
        UserInfo.append('password', pw)

        axios({
            method : 'post',
            url : '/users',
            data : UserInfo
        }) .then(result => {
            setToken(result.data.token)
        })
        .catch(error => {
            alert('로그인실패')
        })
    }

    const inputId = e => {
        setId(e.target.value)
    }
    const inputPw = e => {
        setPw(e.target.value)
    }

    return(
        <div className="loginpage">
            <div className="loginpage-logo"></div>
            <form className="loginform">
                <div className="loginpage-loginbox">
                    <div className="loginpage-loginbox__idbox">
                        <label for='ID'>아이디 : </label>
                        <input className="ID" type="text" placeholder="전화번호를 입력해주세요 ( '-' 제외)" onChange={inputId}></input>
                    </div>
                    <div className="loginpage-loginbox__pwbox">
                        <label for='PW'>비밀번호 : </label>
                        <input className="PW" type="password" placeholder="설정하신 비밀번호 4자리를 입력해주세요" onChange={inputPw}></input>
                    </div>
                </div>
                <input type="submit" value={'로그인'} onClick={StartLogin}/>
                <div className="joinbtn">
                    아직 회원이 아니신가요?
                    <Link to={'/Agreepage'}>회원가입</Link>
                </div>
            </form>
        </div>
    )
}