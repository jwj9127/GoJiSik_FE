import React from 'react';
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
    return (
        <>
        <div className='Navigation'>
            <div className='logobox' onClick={MoveToMain}></div>
            <div className='navigationbox'>
                <div id='1' className='btn navigationbox-govermentbtn'><Link to='/goverment24'>정부24</Link></div>
                <div id='2' className='btn navigationbox-kioskbtn'><Link to='/movie'>키오스크</Link></div>
                <div id='3' className='btn navigationbox-ecommercebtn'><Link to='/eCormmerce'>전자상거래</Link></div>
                <div id='4' className='btn navigationbox-postbtn' ><Link to={'/post'}>게시글</Link></div>
            </div>
            <div className='mypagebox'>
                <button className='btn mypagebox-loginbtn'><Link to='/login'><span className='loginicons'><CgLogIn size={20}/></span>로그인</Link></button>
                <button className='btn mypagebox-mypagebtn'><Link to='/mypage'><span><BsPersonCircle size={50} color='#8195A9'/></span></Link></button>
            </div>
        </div>
        </>
    )
}

export default Navigation;