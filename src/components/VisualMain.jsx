import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import './components.css' 

import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function VisualMain() {

    const visualData= [
        {
          id: 'visual01',
          image: process.env.PUBLIC_URL+'/img/main/visualmain/visualmain02.jpg',
          desc: 'descdesc',
          title: 'FILA TENNIS COLLECTION',
        },
        {
            id: 'visual02',
            image: process.env.PUBLIC_URL+'/img/main/visualmain/visualmain03.jpg',
            desc: 'descdesc',
            title: 'FILA SPORTS LIFE',
          },
          {
            id: 'visual03',
            image: process.env.PUBLIC_URL+'/img/main/visualmain/visualmain01.jpg',
            desc: 'descdesc',
            title: 'FILA FLOAT ELITE',
          },
       
        
      ]
    


  return (
    <div>
        <Swiper
        className='visual_swiper'
        // spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
            <div className="swiper_cont">
                {
                    visualData.map((val,idx)=>{
                        return(
                        <SwiperSlide key={idx} className='visual_slide'>
                            <img src={val.image} alt="img" />
                            <p className='visual_tit'>{val.title}</p>
                            <div className="visual_btn">컬렉션보기</div>
                        </SwiperSlide>
                        )
                       
                        
                    })
                }
            </div>
           
        </Swiper>
    </div>
  )
}
