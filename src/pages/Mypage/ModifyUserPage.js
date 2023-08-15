import { useCallback, useEffect, useState } from "react";
import "../../css/MyPage/ModifyUserPage.css";
import { useSelector } from "react-redux";

export default function ModifyUserPage() {
//     const token = useSelector(state => state.Auth.token);
//     const [errorMessage, setErrorMessage] = useState({
//       idError: "",
//       pwdError: "",
//       confirmPwdError: "",
//     });
//     const { idError, pwdError, confirmPwdError, nowPwdError } = errorMessage;

//     const inputRegexs = {
//       idReg: /^01(?:0|1|[6-9])(?:\d{4})\d{4}$/,
//       pwdReg: /^[0-9]{4,4}$/,
//     };
//     const validationCheck = useCallback((input, regex) => {
//       let isValidate = false;
//       if (input === "") {
//         isValidate = false;
//       } else if (regex.test(input)) {
//         isValidate = true;
//       } else {
//         isValidate = false;
//       }
//       return isValidate;
//     }, []);

//     /* 아이디 체크 */
//     useEffect(() => {
//       const findUser = users.useSelector((user) => user.id === id);

//       if ((!findUser && validationCheck(id, inputRegexs.idReg)) || id === "") {
//         setErrorMessage({
//           ...errorMessage,
//           idError: "",
//         });
//       } else if (findUser !== undefined) {
//         setErrorMessage({
//           ...errorMessage,
//           idError: "이미 가입된 아이디입니다.",
//         });
//       } else if (!validationCheck(id, inputRegexs.idReg)) {
//         setErrorMessage({
//           ...errorMessage,
//           idError: "정확한 전화번호를 입력해주세요!",
//         });
//       }
//     }, [id]);

//     /* 현재 비밀번호 체크 */
//     useEffect(() => {
//       if (users.password === nowPwd || nowPwd === "") {
//         setErrorMessage({
//           ...errorMessage,
//           nowPwdError: "",
//         });
//       } else {
//         setErrorMessage({
//           ...errorMessage,
//           nowPwdError: "현재 비밀번호와 일치하지 않습니다.",
//         });
//       }
//     }, [nowPwd]);
//     /* 새 비밀번호 체크 */
//     useEffect(() => {
//       if (validationCheck(pwd, inputRegexs.pwdReg) || pwd === "") {
//         setErrorMessage({
//           ...errorMessage,
//           pwdError: "",
//         });
//       } else {
//         setErrorMessage({
//           ...errorMessage,
//           pwdError:
//             "비밀번호는 숫자로 최소 4자 이상이여야 합니다.",
//         });
//       }
//     }, [pwd]);
//     /* 새 비밀번호 확인 체크 */
//     useEffect(() => {
//       if (pwd === confirmPwd || confirmPwd === "") {
//         setErrorMessage({
//           ...errorMessage,
//           confirmPwdError: "",
//         });
//       } else {
//         setErrorMessage({
//           ...errorMessage,
//           confirmPwdError: "비밀번호 확인이 일치하지 않습니다.",
//         });
//       }
//     }, [confirmPwd]);

//     const onModify = () => {
//       if (!id || !pwd || !confirmPwd || !nowPwd) {
//         alert("모든 값을 정확하게 입력해주세요");
//         return;
//       }

//       if (idError) {
//         alert("아이디가 형식에 맞지 않습니다");
//         return;
//       } else if (nowPwdError) {
//         alert("현재 비밀번호와 일치하지 않습니다.");
//         return;
//       } else if (pwdError) {
//         alert("비밀번호가 형식에 맞지 않습니다");
//         return;
//       } else if (confirmPwdError) {
//         alert("비밀번호 확인이 일치하지 않습니다.");
//         return;
//       }
  
//       alert("수정을 완료했습니다.");
//       navigator('/MyPage');
//     };

    return (
        <>
            <div className="modifyUser_main">정보 수정
            
                {/* <div className="fix">}
                    {<div className="id" type="text" value={id}>아이디 : </div>
                    <div>{idError ? {idError} : ""}</div>

                    <div className="pw" type="password" value={nowPwd}>현재 비밀번호 : </div>
                    <div>{nowPwdError ? {nowPwdError} : ""}</div>

                    <div className="new_pw" type="password" value={pwd}>새 비밀번호 : </div>
                    <div>{pwdError ? {pwdError} : ""}</div>
                    
                    <div className="new_pw_check" type="password" value={confirmPwd}>새 비밀번호 확인: </div>
                    <div>{confirmPwdError ? {confirmPwdError} : ""}</div>
                </div>
                <button type="submit" value="수정 완료" onClick={onModify} /> */}
            </div>
        </>
    );
}