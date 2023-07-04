import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from '../pages/store'


const Button = styled.button`

    width: calc(50% - 30px);
    margin-left: 20px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 18px;
    background-color: transparent;
    transition: .3s;
    &:hover{
        background-color: #002053;
        color:#fff;
        box-shadow: 0 0 10px black;
        border: 1px solid #002053;
    }
    &:nth-child(2){
        margin-right: 20px;
    }
 `

export default function Recommand() {

    const dispatch = useDispatch()

    const recommandData= [
        {
          id: 'rec01',
          image: process.env.PUBLIC_URL+'/img/main/recommand/13.jpg',
          price: 69000,
          title: '아치 로고 맨투맨',
        },
        {
            id: 'rec02',
            image: process.env.PUBLIC_URL+'/img/main/recommand/14.jpg',
            price: 79000,
            title: '휠라 레이드 N3 2.0',
          },
          {
            id: 'rec03',
            image: process.env.PUBLIC_URL+'/img/main/recommand/15.jpg',
            price: 45000,
            title: '스포츠 5부 레깅스',
          },
          {
            id: 'rec04',
            image: process.env.PUBLIC_URL+'/img/main/recommand/16.jpg',
            price: 149000,
            title: '오버핏 인터내셔널 아노락',
          },
        
          
      ]

  return (
    <div>
        
        <div className="recommand_wrap">
            {
                recommandData.map((val,idx)=>{
                    return(
                        <div className="rec_box" key={idx}>
                            <img src={val.image}  alt="img" />
                                <p className='rec_title'>{val.title}</p>
                                <p className='rec_price'>{(val.price).toLocaleString('ko-KR')}원</p>
                                <Button onClick={()=>{dispatch(addItem({id:val.id, img:val.image, title:val.title, price:val.price , count:1}),alert('장바구니에 담았습니다.'))}}>장바구니</Button>
                                <Button  onClick={()=>{dispatch(addItem({id:val.id, img:val.image, title:val.title, price:val.price , count:1}),alert('장바구니를 확인하세요.'))}}>구매하기</Button>

                                <div className="hover_wrap">
                                    <div className="hover_box">
                                        <p>{val.title}</p>
                                        <p>{(val.price).toLocaleString('ko-KR')}원</p>
                                        <Button style={{fontSize:14,borderRadius:'10px'}} onClick={()=>{dispatch(addItem({id:val.id, img:val.image, title:val.title, price:val.price , count:1}),alert('장바구니에 담았습니다.'))}}>장바구니</Button>
                                        <Button style={{fontSize:14,borderRadius:'10px'}} onClick={()=>{dispatch(addItem({id:val.id, img:val.image, title:val.title, price:val.price , count:1}),alert('장바구니를 확인하세요.'))}}>구매하기</Button>  
                                    </div>
                                    <div className="circle">+</div>
                                </div>
                               
                        </div>
                    )
                })
            }
        
            


        </div>

    </div>
  )
}
