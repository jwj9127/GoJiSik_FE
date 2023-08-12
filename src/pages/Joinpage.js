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
    const [fontsize, setFontsize] = useState(24);
    
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
    
    const userInfo = new FormData();
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
    
    const selectSize = e => {
        setFontsize(e.target.value)
    }

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
    // 유효성 검사를 수행하는 함수
    {/*const validateInputs = () => {
        if (name && id && pw.length <= 4 && pwchk && birthday && verifi) {
            return true;
        }
        return false;
    }*/}
    // const selectAgency = e => {
    //     setAgency(e.target.value);
    // }
    {/*const Verification = e => {
        e.preventDefault()
        const min = 100000; // 최소값 (6자리 수 중 가장 작은 값)
        const max = 999999; // 최대값 (6자리 수 중 가장 큰 값)
        // Math.random() 함수는 0 이상 1 미만의 난수를 반환합니다.
        // min 이상 max 미만의 난수 범위를 생성한 후, Math.floor로 소수점을 버리고 정수로 만듭니다.
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setVerifi(randomNumber);
    }*/}
    // function onClickCertification() {
    //     /* 1. 가맹점 식별하기 */
    //     const { IMP } = window;
    //     IMP.init('imp88508343');

    //     const data = {
    //         merchant_uid: `mid_${new Date().getTime()}`,  // 주문번호
    //         company: '고지식',                           // 회사명 또는 URL
    //         carrier: {agency},                              // 통신사
    //         name: {name},                                // 이름
    //         phone: {id},                        // 전화번호
    //       };
    //     IMP.certification(data, callback);
    // }
    // function callback(response) {
    //     const {
    //       success,
    //       merchant_uid,
    //       error_msg,
    //     } = response;
  
    //     if (success) {
    //       alert('본인인증 성공');
    //     } else {
    //       alert(`본인인증 실패: ${error_msg}`);
    //     }
    //   }
  
    const Joincomplete = e => {
        e.preventDefault();
        userInfo.append('name', name);
        userInfo.append('phone_num', id);
        userInfo.append('password', pw);
        userInfo.append('birthday', birthday);
        userInfo.append('font_size', fontsize);
        console.log(userInfo.get('name'));
        console.log(userInfo.get('phone_num'));
        console.log(userInfo.get('password'));
        console.log(userInfo.get('birthday'));
        console.log(userInfo.get('font_size'));
        axios({
            method:'post',
            url: '/users',
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
         <h1 className="jointext">회원가입</h1>
         <form className="joinform">
            <div className="joinform-box">
                <label htmlFor="inputname" className="joinform-nametext">이름 : </label>
                <input required type="text" id="inputid" placeholder="이름을 입력해주세요" onChange={inputName}/>
                {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
            </div>
            <div className="joinform-box">
                <select className="selectfontsize" onChange={selectSize} value={fontsize}>\
                    {fontsizelist.map((item) => (
                        <option value={item} key={item}>
                            {item}
                         </option>
                    ))}
                </select>
            </div>
            <div className="joinform-box">
                <label htmlFor="inputpw" className="joinform-pwtext">비밀번호 : </label>
                <input required type='password' id="inputpw" className="joinform-inputpw" placeholder="숫자 4자리를 입력해주세요" maxLength={4} onChange={inputPw}/>
                {pw.length > 0 && (
                 <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>
                )}
            </div>
            <div className="joinform-box">
                <label htmlFor="inputpwchk" className="joinform-pwchktext">비밀번호 확인 : </label>
                <input required type='password' id="inputpwchk" className='joinform-inputpwchk' placeholder="비밀번호를 다시 입력해주세요" maxLength={4} onChange={inputPwchk}/>
                {pwchk.length > 0 && (
                    <span className={`message ${isPwConfirm ? 'success' : 'error'}`}>{pwchkMessage}</span>
                )}
            </div>
            <div className="joinform-box">
                <lable htmlFor='inputbirth' className='joinform-birthtext'>생년월일 : </lable>
                <input required type="date" className="joinform-inputbirth" onChange={inputBirth}/>
            </div>
            <div className="joinform-box">
                <label htmlFor='inputid' className="joinform-idtext">전화번호 : </label>
                <input required type="tel" id="inputid" className="joinform-inputid" placeholder="전화번호를 입력해주세요(010-1234-5678)" onChange={inputId} maxLength={11} minLength={11}/>
                {id.length > 0 && (
                    <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>
                )}
            </div>
            <div>
                {/*<label htmlFor='selectagency' className="joinform-selectagenytext">통신사</label>
                <select className="joinform-selectagency" >
                    {Agencylist.map(((item) => (
                            <option value={item} key={item}>
                                    {item}
                            </option>
                        )))}
                    </select>*/}
                {/* <button onClick={Verification} disabled={!isValid}>본인인증 하기</button> */}
                {/* <input required type="text" value={verifi}/> */}
            </div>
            <input type="submit" value={'회원가입'} disabled={!(isName && isId && isPw && isPwConfirm)} onClick={Joincomplete}/>
         </form>
        </div>
    )
}