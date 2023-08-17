import React, { useEffect, useState } from 'react';
import '../css/Navigation.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {CgLogIn} from 'react-icons/cg'
import {BsPersonCircle} from 'react-icons/bs'

const Navigation = () => {
    const navigate = useNavigate();
    const MoveToMain = e => {
        navigate('/');
    }
    const [isToken, setIsToken] = useState(null);
    const [name, setName] = useState();
    const [birthday, setBirthday] = useState();
    const [phonenum, setPhonenum] = useState();
    useEffect(()=>{
        setIsToken(window.localStorage.getItem('token'));
        setName(window.localStorage.getItem('username'));
        setBirthday(window.localStorage.getItem('birthday'));
        setPhonenum(window.localStorage.getItem('phonenum'));
    })

    const logoutbtn = e => {
        e.preventDefault();
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('birthday');
        window.localStorage.removeItem('phonenum');
        setIsToken(false)
        navigate('/');
    }

    return (
        <>
        <div className='Navigation'>
            <div className='logobox' onClick={MoveToMain}></div>
            <div className='navigationbox'>
                <div id='1' className='btn navigationbox-govermentbtn'><Link to='/goverment24'>정부24</Link></div>
                <div id='2' className='btn navigationbox-kioskbtn'><Link to='/kiosk'>키오스크</Link></div>
                <div id='3' className='btn navigationbox-ecommercebtn'><Link to='/shoppingmall'>전자상거래</Link></div>
                <div id='4' className='btn navigationbox-postbtn' ><Link to={'/post'}>게시글</Link></div>
            </div>
            <div className='mypagebox'>
                <button className='btn mypagebox-loginbtn'>{isToken ? <button onClick={logoutbtn} className='logoutbtn'>로그아웃</button> :<Link to='/login'><span className='loginicons'><CgLogIn size={20}/></span>로그인</Link>}</button>
                {isToken ? (<button className='btn mypagebox-mypagebtn'><Link to='/mypage'><span><BsPersonCircle size={50} color='#8195A9'/></span></Link></button>) : null}
            </div>
        </div>
        </>
    )
}

export default Navigation;