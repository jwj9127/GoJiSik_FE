import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/login.css'

export default function Loginpage(){
    const UserInfo = new FormData();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [token, setToken] = useState('')
    const navigate = useNavigate()
    const StartLogin = e => {
        e.preventDefault();
        UserInfo.append('phone_num', id)
        UserInfo.append('password', pw)

        axios({
            method : 'post',
            url : '//localhost:8080/users/login',
            data : UserInfo
        }) .then(result => {
            setIsLogin(true)
            window.localStorage.setItem('token', result.data.token);
            setToken(result.data.token)
            navigate('/')
        })
        .catch(error => {
            alert('로그인실패')
            setIsLogin(false)
        })
    }

    const inputId = e => {
        setId(e.target.value)
        setIsLogin(true)
    }
    const inputPw = e => {
        setPw(e.target.value)
        setIsLogin(true)
    }

    return(
        <div className="loginpage">
            <div className="loginpage-logo"></div>
            <form className="loginform">
                <div className="loginpage-loginbox">
                    <div className="loginpage-loginbox__box">
                        <label htmlfor='id'>아이디</label>
                        <input id="id" className="ID" type="text" placeholder="전화번호를 입력해주세요 ( '-' 제외)" onChange={inputId}></input>
                    </div>
                    <div className="loginpage-loginbox__box">
                        <label htmlFor="pw">비밀번호</label>
                        <input id="pw" className="PW" type="password" placeholder="설정하신 비밀번호 4자리를 입력해주세요" onChange={inputPw}></input>
                    </div>
                </div>
                <span className="loginerrormsg">{isLogin?null :'설정하신 아이디와 비밀번호의 형식과 다릅니다.'}</span>
                <input type="submit" value={'로그인'} onClick={StartLogin} className="loginbtn"/>
                <div className="jointextbox">
                    회원이 아니신가요?
                    <span className="gotojoinbtn"><Link to={'/Agreepage'}>회원가입</Link></span>
                </div>
            </form>
        </div>
    )
}