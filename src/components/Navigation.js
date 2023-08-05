import React from 'react';
import '../css/Navigation.css';
import {Link} from 'react-router-dom';
import Goverment from './Goverment';
import { Route, Routes } from 'react-router-dom';

const MoveToPage = e => {
    console.log(e.target.id);
    const Nav_Id = e.target.id;
    switch(Nav_Id){
        case 1 : {<div>i</div>}
    }
}

const Navigation = () => {
    return(
        <>
        <div className='Navigation'>
            <div className='logobox'></div>
            <div className='navigationbox'>
                <div id='1' className='btn navigationbox-govermentbtn'><Link to='/goverment24'>정부24</Link></div>
                <div id='2' className='btn navigationbox-kioskbtn' onClick={MoveToPage}>키오스크</div>
                <div id='3' className='btn navigationbox-ecommercebtn' onClick={MoveToPage}>이커머스</div>
                <div id='4' className='btn navigationbox-postbtn' onClick={MoveToPage}>게시글</div>
            </div>
            <div className='mypagebox'>
                <button className='btn mypagebox-loginbtn'>로그인</button>
                <button className='btn mypagebox-mypagebtn'>마이페이지</button>
            </div>
        </div>
        <Routes>
            <Route path='/goverment24' element={<Goverment/>}/>
        </Routes>
        </>
    )
}

export default Navigation;