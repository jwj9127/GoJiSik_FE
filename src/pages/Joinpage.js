import React, { useEffect, useState } from "react";
import '../css/Joinpage.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
// IMP.init('imp88508343'); // 'imp00000000' 대신 발급받은 가맹점 식별코드를 사용합니다.
// const AgreePage=()=> {
//     const [isChecked, setIsChecked] = useState(false);
//     const [allChecked, setAllChecked] = useState({
//         isChecked : false
//     });

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked);
//     }

//     const handleAllCheckboxChange = () => {
//         setAllChecked(!allChecked);
//     }

//     return (
//         <div className="JoinBox">
//             <h1>약관동의</h1>
//             <form>
//                 전체동의
//                 <input type="checkbox" className="checkbox" checked={allChecked} onChange={handleAllCheckboxChange} />
//                 <label htmlFor="checkboxInput1">약관1 동의</label>
//                 <input required type="checkbox" id="checkboxInput1" className="checkbox" onClick={handleCheckboxChange} />
//                 <label htmlFor="checkboxInput2">약관2 동의</label>
//                 <input required type="checkbox" id="checkboxInput2" className="checkbox" onClick={handleCheckboxChange} />
//                 <label htmlFor="checkboxInput3">약관3 동의</label>
//                 <input required type="checkbox" id="checkboxInput3" className="checkbox" onClick={handleCheckboxChange} />
//                 <label htmlFor="checkboxInput4">약관4 동의</label>
//                 <input required type="checkbox" id="checkboxInput4" className="checkbox" onClick={handleCheckboxChange} />
//                 <input type="submit" value={'회원가입'}/>
//             </form>
//         </div>
//     );
// }

export default function Joinpage(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwchk, setPwchk] = useState(false);
    const [birthday, setBirthday] = useState('');
    const [fontsize, setFontsize] = useState(24);
    const [isValid, setIsValid] = useState(false);
    const [verifi, setVerifi] = useState('');
    const userInfo = new FormData();
    const Agencylist = ['SKT', 'LGU+', 'KT']
    // 입력값이 변경될 때마다 유효성 검사 수행 및 버튼 상태 업데이트
    useEffect(() => {
        setIsValid(validateInputs());
    }, [name, id, pw, pwchk, birthday]);

    const inputName = e => {
        setName(e.target.value);
    }
    const inputId = e => {
        setId(e.target.value)    
    }
    const inputPw = e => {
        setPw(e.target.value)
    }
    const inputPwchk = e => {
        if(pw !== e.target.value){
            setPwchk(true)
        }
    }
    const inputBirth = e => {
        setBirthday(e.target.value)
    }
    // 유효성 검사를 수행하는 함수
    const validateInputs = () => {
        if (name && id && pw.length <= 4 && pwchk && birthday && verifi) {
            return true;
        }
        return false;
    }
    // const selectAgency = e => {
    //     setAgency(e.target.value);
    // }
    const Verification = e => {
        e.preventDefault()
        const min = 100000; // 최소값 (6자리 수 중 가장 작은 값)
        const max = 999999; // 최대값 (6자리 수 중 가장 큰 값)
        // Math.random() 함수는 0 이상 1 미만의 난수를 반환합니다.
        // min 이상 max 미만의 난수 범위를 생성한 후, Math.floor로 소수점을 버리고 정수로 만듭니다.
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setVerifi(randomNumber);
    }
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
        console.log(error)
    })
    }
    return(
        <div className="joinbox">
         <h1 className="jointext">회원가입</h1>
         <form className="joinform">
            <div>
                <label htmlFor='inputname' className="joinform-nametext">이름 : </label>
                <input required type="text" id="inputname" className="joinform-inputname" placeholder="이름을 입력해주세요" onChange={inputName}/>
            </div>
            <div>
                <label htmlFor="inputpw" className="joinform-pwtext">비밀번호 : </label>
                <input required type='password' id="inputpw" className="joinform-inputpw" placeholder="숫자 4자리를 입력해주세요" minLength={4} maxLength={4} onChange={inputPw}/>
            </div>
            <div>
                <label htmlFor="inputpwchk" className="joinform-pwchktext">비밀번호 확인 : </label>
                <input required type='password' id="inputpwchk" className='joinform-inputpwchk' placeholder="비밀번호를 다시 입력해주세요" maxLength={4} onChange={inputPwchk}/>
            </div>
            <div>
                <lable htmlFor='inputbirth' className='joinform-birthtext'>생년월일 : </lable>
                <input required type="date" className="joinform-inputbirth" onChange={inputBirth}/>
            </div>
            <div>
                <label htmlFor='inputid' className="joinform-idtext">전화번호 : </label>
                <input required type="tel" id="inputid" className="joinform-inputid" placeholder="전화번호를 입력해주세요(010-1234-5678)" onChange={inputId} maxLength={11} minLength={11}/>
            </div>
            <div>
                <label htmlFor='selectagency' className="joinform-selectagenytext">통신사</label>
                <select className="joinform-selectagency" >
                    {Agencylist.map(((item) => (
                            <option value={item} key={item}>
                                    {item}
                            </option>
                        )))}
                </select>
                <button onClick={Verification} disabled={!isValid}>본인인증 하기</button>
                <input required type="text" value={verifi}/>
            </div>
            <input type="submit" value={'회원가입'} onClick={Joincomplete}/>
         </form>
        </div>
    )
}