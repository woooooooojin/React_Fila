import React, { useCallback, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Join() {
    const navigate = useNavigate()
    const goLoin = () => {
        navigate('/login');
      };


    const [joinId, setJoinId] = useState('')
    const [joinPw, setJoinPw] = useState('')
    const [pwChk, setPwChk] = useState('')
    const [joinMail, setJoinMail] = useState('')

    //메세지 출력
    const [idMsg, setIdMsg] = useState('')
    const [pwMsg, setPwMsg] = useState('')
    const [pwChkMsg, setPwChkMsg] = useState('')
    const [mailMsg, setMailMsg] = useState('')


    //유효성검사
    const testEmail = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const testPw = /^[A-Za-z0-9]{6,12}$/
    const testId = /^[A-Za-z0-9]{6,12}$/

    //email
    const emailCheck = (joinMail) => {//형식에 맞을 경우, true 리턴
      return testEmail.test(joinMail); 
    }
    const userMailCheck = (joinMail) => {
      if(emailCheck(joinMail)==false) { 
        setMailMsg('이메일 형식에 맞지 않습니다.')
        return;
      }else{ // 맞을 경우 출력
        setMailMsg('이메일 형식에 적합합니다.')
      }
    }



    //id
    const idCheck = (joinId) => {
      return testId.test(joinId); 
    }
    const userIdCheck = (joinId) => {
      if(idCheck(joinId)===false) { 
        setIdMsg('아이디 형식에 맞지 않습니다.')
        return;
      }else{ // 맞을 경우 출력
        setIdMsg('아이디 형식에 적합합니다.')
      }
    }




    //passwd
    const pwCheck = (joinPw) => {
      return testPw.test(joinPw); 
    }

    const userPasswordCheck = (joinPw) => {
      if(pwCheck(joinPw)==false) { 
        setPwMsg('비밀번호 형식에 맞지않습니다');
        return;
      }else{ // 맞을 경우 출력
        setPwMsg('비밀번호 형식에 적합합니다');
      }
    }


    const pwDoubleChk = (joinPw,pwChk) =>{
      if(joinPw !== pwChk){
        setPwChkMsg('비밀번호가 다릅니다.');
        return;
      }else{
        setPwChkMsg('비밀번호가 동일합니다');
      }
    }







  return (
    <div>
        <div className="join_wrap">
        <div className="category_tit">
          <h2>회원가입</h2>
        </div>


        <input 
        type="text" 
        placeholder="아이디 입력"
        id="join_id"
        className="join_id"
        onChange={(e)=>{setJoinId(e.target.value); userIdCheck(e.target.value)}}
       />
       <p>{idMsg}</p>

      <input 
        type="password" 
        placeholder="비밀번호 입력"
        id="join_pw"
        className="join_pw" 
        onChange={(e)=>{setJoinPw(e.target.value); userPasswordCheck(e.target.value)}}
        />
        <p>{pwMsg}</p>

      <input 
        type="password" 
        placeholder="비밀번호 확인"
        id="check_pw"
        className="check_pw" 
        onChange={(e)=>{pwDoubleChk(joinPw,e.target.value); setPwChk(e.target.value)}}
        />
        <p>{pwChkMsg}</p>

        <input 
        type="text" 
        placeholder="이메일 주소"
        id="check_email"
        className="check_email" 
        onChange={(e)=>{setJoinMail(e.target.value); userMailCheck(e.target.value)}}
        />
        <p>{mailMsg}</p>


      <button
        type='button'
        className="joinButton"
        onClick={() => {
          let joinState = false;
          if (
            emailCheck(joinMail)===true &&
            idCheck(joinId)===true &&
            pwCheck(joinPw) === true 
          ) {
            joinState = true;
          }else{

            joinState = false;

          }
        
          if (joinState) {
            alert('회원가입 성공');
            goLoin()
          } else {
            alert('양식을 확인하세요.');
          }
        }}>
        가입하기
      </button>
      </div>
    </div>
  )
}
