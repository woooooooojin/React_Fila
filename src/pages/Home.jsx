import React from 'react'
import VisualMain from '../components/VisualMain'
import PopSwiper from '../components/PopSwiper'
import './style.css' 
import Magazine from '../components/Magazine'
import Sns from '../components/Sns'

import { useDispatch } from 'react-redux';
import { addItem } from '../pages/store';
import Recommand from '../components/Recommand'


export default function Home() {
  return (
    <div>
      <VisualMain/>
      

    
      <div className="home_wrap">
        <div className="home_title">
          <h4>지금 많이 찾는 상품</h4>
        </div>

        <PopSwiper />

        <div className="home_title">
          <h4>MAGAZINE</h4>
        </div>

        <Magazine /> 
        
        
        <div className="home_title">
          <h4>추천스타일</h4>
        </div>
        <Recommand/>


        <div className="home_title">
          <h4>SNS</h4>
        </div>

        <Sns/>

       

      </div>

      

    </div>
  )
}
