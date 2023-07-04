import React from 'react'
import './components.css' 
import styled from 'styled-components'



export default function Footer() {
  return (
    <div>

        <div className="foot_wrap">

            <div className="foot_logo">
                <img src= {process.env.PUBLIC_URL+'/img/LOGO/logo01.png'} alt="img" />
            </div>
            <div className="foot_desc">
                <ul className='desc_ul1'>
                    <li>매장안내</li>
                    <li>공지사항</li>
                    <li>FILA Membership</li>
                    <li>대리점 개설문의</li>
                    <li>FILA 입찰참여 안내</li>
                </ul>
                <p>서울시 강동구 천호대로 1077 이스트센트럴타워 15층 ~ 18층 휠라코리아(주)    대표이사 : 김지헌
                    사업자등록번호 : 716-81-01573  사업자정보확인    통신판매업신고 : 제 2020-서울강동-0160 호
                    개인정보 관리책임자 : 이학우
                    <br />
                    <br />
                    본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.
                    콘텐츠산업진흥법에 의한 콘텐츠보호안내 
                </p>
                <ul className='desc_ul2'>
                    <li>통합회원 이용약관</li>
                    <li>개인정보 처리방침</li>
                    <li>제보센터</li>
                </ul>
            </div>
            <div className="foot_cscenter">

                <div className="cs_box">CS CENTER</div>
                <div className="cs_desc">
                    <p>1577-3472<br />filaonline@fila.com</p>
                    <p>평일 월 - 금 : 09시 - 18시 (공휴일 제외)</p>
                </div>
                

            </div>

        </div>


    </div>
  )
}
