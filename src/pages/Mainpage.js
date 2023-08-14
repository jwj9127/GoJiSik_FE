import {React, useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/Mainpage.css';
import { RiSchoolFill } from "react-icons/ri";
import {SlScreenDesktop} from 'react-icons/sl';
import {FaInternetExplorer} from 'react-icons/fa'
 
export default function Main() {
    const navigate = useNavigate();
    const [postdata, setPostdata] = useState([]);
    useEffect(()=>{
        const BestPost = async () => {
            try{
                const response = await axios.get('/questions')
                setPostdata(response)
            } catch(error){
                console.error('Error fetching data:', error);
            }
        };

        BestPost();
    }, [])
    const MoveToGover = e => {
        navigate('/goverment24')
    }
    const MoveToKiosk = e => {
        navigate('/movie');
    }
    const MoveToEcor = e => {
        navigate('/ecommerce');
    }
    return(
        <div className="Mainbody">
         <div className="mainbox">
            <div className="mainbox-categorybox">
                <h3 className="categorytext">게시글 카테고리</h3>
                <div className="mainbox-categorybox-box">
                    <div className="mainbox-categorybox__goverment24box" onClick={MoveToGover}>
                        <RiSchoolFill size={50}/>
                        정부24
                        <span>바로가기</span>
                    </div>
                    <div className="mainbox-categorybox__kioskbox" onClick={MoveToKiosk}>
                        <SlScreenDesktop size={50}/>
                        키오스크
                        <span>바로가기</span>
                    </div>
                    <div className="mainbox-categorybox__ecommercebox" onClick={MoveToEcor}>
                        <FaInternetExplorer size={50}/>
                        전자상거래
                        <span>바로가기</span>
                    </div>
                </div>
            </div>
            <div className="main-postbox">
                <h3>인기 게시글 목록</h3>
                <div className="mainbox-bestpostbox">
                    <ul>
                       <li className="postlistbox">
                        <h4 className="titlepost">제목입니다.</h4>
                        <span className="posttext">작성자 : 조아빈, 조회수 : 1111</span>
                       </li>
                       <li className="postlistbox">
                        <h4 className="titlepost">제목입니다.</h4>
                        <span className="posttext">작성자 : 조아빈, 조회수 : 1111</span>
                       </li>
                       <li className="postlistbox">
                        <h4 className="titlepost">제목입니다.</h4>
                        <span className="posttext">작성자 : 조아빈, 조회수 : 1111</span>
                       </li>
                    </ul>
                    {/* {postdata.map(((item) => (
                        <li value={item} key={item}>
                             {item}
                        </li>
                    )))} */}
                </div>
            </div>
         </div>
        </div>    
    )
}