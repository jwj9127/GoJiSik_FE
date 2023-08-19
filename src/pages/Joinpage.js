import React, { useCallback, useEffect, useState } from "react";
import '../css/Joinpage.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Joinpage(){
    const navigate = useNavigate();
    //이름, 전화번호, 비밀번호, 생년월일, fornsize 확인
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwchk, setPwchk] = useState('');
    const [birthday, setBirthday] = useState('');
    
    //에러메시지 상태
    const [nameMessage, setNameMessage] = useState('');
    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');
    const [pwchkMessage, setPwchkMessage] = useState('');
    // 유효성 검사
    const [isName, setIsName] = useState(false);
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false);
    const [isPwConfirm, setIsPwConfirm] = useState(false);
    const [buttonColor, setButtonColor] = useState('#B4B4B4');
    const userInfo = {}
    const fontsizelist = [24, 32, 40]
    {/*const Agencylist = ['SKT', 'LGU+', 'KT']*/}
    // 입력값이 변경될 때마다 유효성 검사 수행 및 버튼 상태 업데이트
    {/*useEffect(() => {
        setIsValid(validateInputs());
    }, [isValid.namevalid, isValid.idvalid, isValid.pwvalid, isValid.birthdayvalid]);*/}

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
    
    const inputId = useCallback(e => {
        const idRegex = /^01(?:0|1|[6-9])(?:\d{4})\d{4}$/
        const idCurrent = e.target.value
        setId(idCurrent)

        if(!idRegex.test(idCurrent)){
            setIdMessage('정확한 전화번호를 입력해주세요!')
            setIsId(false)
        }else{
            setIdMessage('정확히 입력하셨습니다!')
            setIsId(true)
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
        if(isName&&isId&&isPw&&isPwConfirm === true){
            setButtonColor('#E3EEDE')
        } else{
            setButtonColor('#B4B4B4')
        }
   }, [isName, isId, isPw, isPwConfirm])
    const Joincomplete = e => {
        e.preventDefault();
        userInfo['username'] = name;
        userInfo['phonenum'] = id;
        userInfo['password'] = pw;
        userInfo['birthday'] = new Date(birthday);
        axios({
            method:'post',
            url: '/users',
            headers : {
                "Content-Type": `application/json`,
            },
            data:userInfo,
        })
        .then(result => {console.log('요청성')
        console.log(result)
        alert('회원가입 완료!')
        navigate('/login')
    })
        .catch(error => {console.log('요청실패')
        alert('이미 가입한 정보가 있습니다!')
        navigate('/login')
    })
    }
    return(
        <div className="joinbox">
         <h3 className="jointext">회원가입</h3>
         <form className="joinform">
            <div className="joinform-body">
                <div className="joinform-box">
                    <div className='joinform-boxtobox'>
                        <label htmlFor="inputname" className="joinform-nametext">이름  </label>
                        <input required type="text" className="input-info joinform-inputname" id="inputname" placeholder="이름을 입력해주세요" onChange={inputName}/>
                    </div>
                    {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                </div>
                <div className="joinform-box">
                    <div className='joinform-boxtobox'>
                        <label htmlFor="inputpw" className="joinform-pwtext">비밀번호  </label>
                        <input required type='password' id="inputpw" className="input-info joinform-inputpw" placeholder="숫자 4자리를 입력해주세요" maxLength={4} onChange={inputPw}/>
                    </div>
                    {pw.length > 0 && (
                    <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>
                    )}
                </div>
                <div className="joinform-box">
                    <div className='joinform-boxtobox'>
                        <label htmlFor="inputpwchk" className="joinform-pwchktext">비밀번호 확인  </label>
                        <input required type='password' id="inputpwchk" className='input-info joinform-inputpwchk' placeholder="비밀번호를 다시 입력해주세요" maxLength={4} onChange={inputPwchk}/>
                    </div>
                    {pwchk.length > 0 && (
                        <span className={`message ${isPwConfirm ? 'success' : 'error'}`}>{pwchkMessage}</span>
                    )}
                </div>
                <div className="joinform-box">
                    <div className='joinform-boxtobox'>
                        <lable htmlFor='inputbirth' className='joinform-birthtext'>생년월일  </lable>
                        <input required type="date" className="input-info joinform-inputbirth" onChange={inputBirth}/>
                    </div>
                </div>
                <div className="joinform-box">
                    <div className='joinform-boxtobox'>
                        <label htmlFor='inputid' className="joinform-idtext">전화번호  </label>
                        <input required type="tel" id="inputid" className="input-info joinform-inputid" placeholder="전화번호를 입력해주세요(010-1234-5678)" onChange={inputId} maxLength={11} minLength={11}/>
                    </div>
                    {id.length > 0 && (
                        <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>
                    )}
                </div>
            </div>
            <input className="joinjoinbtn" type="submit" style={{backgroundColor : buttonColor}} value={'회원가입'} disabled={!(isName && isId && isPw && isPwConfirm)} onClick={Joincomplete}/>
         </form>
        </div>
    )
}