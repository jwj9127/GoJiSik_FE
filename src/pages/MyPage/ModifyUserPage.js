import { useCallback, useEffect, useState } from "react";
import "../../css/MyPage/ModifyUserPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ModifyUserPage() {
    
    const [id, setId] = useState([]);
    const [modifyToken, setModifyToken] = useState();

    const navigate = useNavigate();
    //이름, 전화번호, 비밀번호, 생년월일, fornsize 확인
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [pwchk, setPwchk] = useState('');
    const [birthday, setBirthday] = useState('');
    
    //에러메시지 상태
    const [nameMessage, setNameMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [pwchkMessage, setPwchkMessage] = useState('');
    // 유효성 검사
    const [isName, setIsName] = useState(false);
    const [isPw, setIsPw] = useState(false);
    const [isPwConfirm, setIsPwConfirm] = useState(false);
    const [buttonColor, setButtonColor] = useState('#B4B4B4');
    const userInfo = {}

    const inputName = useCallback(e => {
        setName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
            setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
            setIsName(false)
          } else {
            setNameMessage('올바른 이름 형식입니다 :)')
            setIsName(true)
          }
        }, [])
    
    const inputPw = useCallback(e => {
        const passwordRegex = /^[0-9]{4,4}$/;     //비밀번호 패턴
        const passwordCurrent = e.target.value  //입력한 비밀번호를 변수에 저장  
        setPw(passwordCurrent)    // 변수에 저장된 비밀번호를 현재의 비밀번호로 set

        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자 4 자리를 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('올바른 형식입니다.')
            setIsPw(true)
        }
    },[])

    const inputPwchk = useCallback(e => {
        const pwconfirmcurrent = e.target.value
        setPwchk(pwconfirmcurrent)

        if(pw === pwconfirmcurrent){
            setPwchkMessage('설정한 비밀번호와 같습니다.')
            setIsPwConfirm(true)
        }else{
            setPwchkMessage('설정한 비밀번호와 다릅니다.')
            setIsPwConfirm(false)
        }
    },[pw])
    const inputBirth = e => {
        setBirthday(e.target.value)
    }
    useEffect(()=>{
        const storedId = window.localStorage.getItem("phonenum");
        const storedToken = window.localStorage.getItem("token");
        setId(storedId);
        setModifyToken(storedToken);
        console.log(isName)
        console.log(isPw)
        console.log(isPwConfirm)

        if(isName&&isPw&&isPwConfirm === true){
            setButtonColor('#E3EEDE')
        } else{
            setButtonColor('#B4B4B4')
        }
   }, [isName, isPw, isPwConfirm])
    const Modifycomplete = e => {
        e.preventDefault();
        userInfo['username'] = name;
        userInfo['password'] = pw;
        userInfo['birthday'] = new Date(birthday);
        axios({
            method:'put',
            url: `//localhost:8080/users/${id}`,
            headers : {
                "Content-Type": `application/json`,
                Authorization: `Bearer ${modifyToken}`
            },
            data:userInfo,
        })
        .then(result => {console.log(result)
        console.log(result)
        alert('정보수정 완료!');
        alert('다시 로그인 해주세요');
        window.localStorage.removeItem('token');
        navigate('/login');
    })
        .catch(error => {console.log('요청실패')
        navigate('/modifyUserPage')
    })
    }
    return(
        <div className="modifybox">
         <h3 className="modifytext">정보수정</h3>
         <form className="modifyform">
            <div className="modifyform-body">
                <div className="modifyform-box">
                    <div className='modifyform-boxtobox'>
                        <label htmlFor="inputname" className="modifyform-label">이름</label>
                        <input required type="text" className="input-info" id="inputname" placeholder="이름을 입력해주세요" onChange={inputName}/>
                    </div>
                    {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                </div>
                <div className="modifyform-box">
                    <div className='modifyform-boxtobox'>
                        <label htmlFor="inputpw" className="modifyform-label">비밀번호</label>
                        <input required type='password' id="inputpw" className="input-info" placeholder="숫자 4자리를 입력해주세요" maxLength={4} onChange={inputPw}/>
                    </div>
                    {pw.length > 0 && (
                    <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>
                    )}
                </div>
                <div className="modifyform-box">
                    <div className='modifyform-boxtobox'>
                        <label htmlFor="inputpwchk" className="modifyform-label">비밀번호 확인</label>
                        <input required type='password' id="inputpwchk" className='input-info' placeholder="비밀번호를 다시 입력해주세요" maxLength={4} onChange={inputPwchk}/>
                    </div>
                    {pwchk.length > 0 && (
                        <span className={`message ${isPwConfirm ? 'success' : 'error'}`}>{pwchkMessage}</span>
                    )}
                </div>
                <div className="modifyform-box">
                    <div className='modifyform-boxtobox'>
                        <lable htmlFor='inputbirth' className='modifyform-label'>생년월일   </lable>
                        <input required type="Date" id="inputdate" className="input-info" onChange={inputBirth}/>
                    </div>
                </div>
            </div>
            <input className="modifyjoinbtn" type="submit" style={{backgroundColor : buttonColor}} value={'정보수정'} disabled={!(isName && isPw && isPwConfirm)} onClick={Modifycomplete}/>
         </form>
        </div>
    )
}