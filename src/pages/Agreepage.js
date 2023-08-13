import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Agreepage() {
    //유효성 검사
    // const [isAllChecked, setIsAllChecked] =  useState(false);
    // const [agreements, setAgreements] = useState({
    //     isChecked1 : false,
    //     isChecked2 : false,
    // })

    // const allChecked = e => {
    //     const {checked} = e.target;
    //     setAgreements(prevAgreements =>
    //         Object.keys(prevAgreements).reduce((newAgreements, agreementKey)=>({
    //             ...newAgreements,
    //             [agreementKey] : checked,
    //         }),
    //         {}
    //         )
    //     );
    //         setIsAllChecked(checked);
    // }
    // const isChecked = e=>{
    //     const {name, checked} = e.target;

    //     setAgreements(prevAgreements => ({...prevAgreements, [name] : checked}))
    //     const allChecked = Object.values({...agreements, [name] : checked}).every(
    //         value=>value===true
    //     );
    //     setIsAllChecked(allChecked);
    // };

    const [isAllChecked, setIsAllChecked] = useState(false)
    const [isChecked1, setIsChecked1] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [isChecked3, setIsChecked3] = useState(false)
    const [isChecked4, setIsChecked4] = useState(false)
    const [isChecked5, setIsChecked5] = useState(false)
    const [isvision, setIsVision] = useState(false)

    const agreetextlist = [
        ''
    ]

    const navigate = useNavigate();
    const onAllCheck = e => {
        if(isAllChecked === false){
            setIsAllChecked(true)
            setIsChecked1(true)
            setIsChecked2(true)
            setIsChecked3(true)
            setIsChecked4(true)
            setIsChecked5(true)
        }else{
            setIsAllChecked(false)
            setIsChecked1(false)
            setIsChecked2(false)
            setIsChecked3(false)
            setIsChecked4(false)
            setIsChecked5(false)
        }
    }
    const onCheck1 = e => {
        setIsChecked1(isChecked1 => !isChecked1)
    }
    const onCheck2 = e => {
        setIsChecked2(isChecked2 => !isChecked2)
    }
    const onCheck3 = e => {
        setIsChecked3(isChecked3 => !isChecked3)
    }
    const onCheck4 = e => {
        setIsChecked4(isChecked4 => !isChecked4)
    }
    const onCheck5 = e => {
        setIsChecked5(isChecked5 => !isChecked5)
    }
    
    useEffect(()=>{
        if(isChecked1 === true && isChecked2 === true && isChecked3 === true){
            setIsVision(true);
        }else{
            setIsVision(false);
        }
        if(isChecked1 === true && isChecked2 === true && isChecked3 === true && isChecked4 === true &&isChecked5 === true){
            setIsAllChecked(true)
        } else{
            setIsAllChecked(false)
        }
    }, [isChecked1, isChecked2, isChecked3, isChecked4, isChecked5])

    const MoveToJoin = e =>{
        e.preventDefault()
        navigate('/joinpage')
    }

    return(
        <>
            <h3>약관동의</h3>
            <div>
                <div className="agreebox">
                    <label htmlFor="checkallagree">전체동의</label>
                    <input type="checkbox" id="checkallagree" className="agreebox-allagreecheckbox" onChange={onAllCheck} checked={isAllChecked}/>
                    <div className="agreetextbox"></div>
                </div>
                <div className="agreebox">
                    <label htmlFor="checkagree1">약관 1 [필수]</label>
                    <input type="checkbox" id="checkagree1" className="agreebox-agreecheckbox" onChange={onCheck1} checked={isChecked1}/>
                </div>
                <div className="agreebox">
                    <label htmlFor="checkagree2">약관 2 [필수]</label>
                    <input type="checkbox" id="checkagree2" className="agreebox-agreecheckbox" onChange={onCheck2} checked={isChecked2}/>
                </div>
                <div className="agreebox">
                    <label htmlFor="checkagree3">약관 3 [필수]</label>
                    <input type="checkbox" id="checkagree3" className="agreebox-agreecheckbox" onChange={onCheck3} checked={isChecked3}/>
                </div>
                <div className="agreebox">
                    <label htmlFor="checkagree4">약관 4 [선택]</label>
                    <input type="checkbox" id="checkagree4" className="agreebox-agreecheckbox" onChange={onCheck4} checked={isChecked4}/>
                </div>
                <div className="agreebox">
                    <label htmlFor="checkagree5">약관 5 [선택]</label>
                    <input type="checkbox" id="checkagree5" className="agreebox-agreecheckbox" onChange={onCheck5} checked={isChecked5}/>
                </div>
                <button className="gotojoin" disabled={!isvision} onClick={MoveToJoin}>회원가입 하기</button>
            </div>
        </>
    )
}