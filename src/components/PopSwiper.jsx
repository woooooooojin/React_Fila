import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper';
// import { EffectCoverflow } from 'swiper';

import { useDispatch } from 'react-redux';
import { addItem } from '../pages/store';

import 'swiper/css';
import './components.css' 
import styled from 'styled-components'

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion } from "framer-motion";



const Button = styled.button`

    width: calc(50% - 30px);
    margin-left: 20px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    background-color: transparent;
    transition: .3s;
    &:hover{
        background-color: #002053;
        color:#fff;
    }
    &:nth-child(2){
        margin-right: 20px;
    }
 `




export default function PopSwiper() {

    const dispatch = useDispatch()
  

    const popData= [
        {
          id: 'pop01',
          image: process.env.PUBLIC_URL+'/img/main/recommand/01.jpg',
          price: 119000,
          title: 'FILA 자켓',
        },
        {
            id: 'pop02',
            image: process.env.PUBLIC_URL+'/img/main/recommand/02.jpg',
            price: 89000,
            title: 'FILA 로고 바람막이',
          },
          {
            id: 'pop03',
            image: process.env.PUBLIC_URL+'/img/main/recommand/03.jpg',
            price: 56000,
            title: 'FILA 크롭 후드티',
          },
          {
            id: 'pop04',
            image: process.env.PUBLIC_URL+'/img/main/recommand/04.jpg',
            price: 89000,
            title: 'FILA 로고 아노락',
          },
          {
            id: 'pop05',
            image: process.env.PUBLIC_URL+'/img/main/recommand/05.jpg',
            price: 119000,
            title: '스트링 조거팬츠',
          },
       
          {
            id: 'pop06',
            image: process.env.PUBLIC_URL+'/img/main/recommand/07.jpg',
            price: 129000,
            title: '베이직 로고 후드티',
          },
          
       
       
        
      ]

  return (
    <div>

        <Swiper
        className='pop_swiper'
        spaceBetween={50}
        slidesPerView={5}
        modules={[Navigation, A11y, Autoplay]}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        // centeredSlides={true}
        // effect={'coverflow'}
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch : 0,
        //   depth: 50,
        //   modifier: 1,
        //   // slideShadows: true,
        // }}
        >
            <div className="pop_swiper_cont">
                {
                    popData.map((val,idx)=>{
                        return(
                        <SwiperSlide key={idx} className='pop_slide'>
                            <div className="pop_box" >
                                <motion.img src={val.image} alt="img" whileHover={{ scale: 1.07 }} transition={{ type: "spring", damping: 3 }}  />
                                <p className='pop_tit'>{val.title}</p>
                                <p className='pop_price'>{val.price.toLocaleString('kr-KR') + '원'}</p>
                                <div className="btn_wrap">
                                    <Button onClick={()=>{dispatch(addItem({id:val.id, img:val.image, title:val.title, price:val.price , count:1}),alert('장바구니에 담았습니다.'))}}>장바구니</Button>
                                    <Button onClick={()=>{dispatch(addItem({id:val.id, img:val.image, title:val.title, price:val.price , count:1}),alert('장바구니를 확인하세요.'))}}>구매하기</Button>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                        )
                       
                        
                    })
                }
            </div>
           
        </Swiper>
    </div>
  )
}
