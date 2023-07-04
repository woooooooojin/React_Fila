import React from 'react'
import './style.css' 
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import {useState} from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux';
import { addItem } from '../pages/store';
import pantsData from './pantsData';
import { motion } from "framer-motion";

const Button = styled.button`

    width: calc(50% - 30px);
    margin-left: 20px;
    height: 40px;
    border: 1px solid #002053;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    background-color: transparent;
    transition: .3s;
    background-color: #002053;
    color:#fff;
    margin-bottom: 20px;
    &:hover{
        background-color: #fff;
        color:#000;
        border: 1px solid #ccc;
    }
    &:nth-child(2){
        /* margin-right: 20px; */
    }
 `

export default function Pants() {
  const [pants] = useState(pantsData)
  const dispatch = useDispatch()

  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };



  return (
    <div>

<div className="category_tit">
        <h2>Pants</h2>
      </div>

      <motion.div className="itembox_wrap" variants={list} initial="hidden" animate="visible">

        {
          pants.map((val,idx) => {
            return(

              <motion.div className="item_box" key={idx} variants={item}>
                <Link to={`/detailpants/${idx}`}>
                  <div className="item_img_wrap">
                    <img src={val.image} alt="img"/>
                  </div>
                  <h4 className='item_tit'>{val.title}</h4>
                  <p className='item_tag'>{val.tag}</p>
                  <p className='item_price'>{(val.price).toLocaleString('ko-KR')}원</p>
                </Link>

                
                
                
                <Button onClick={()=>{dispatch(addItem({id: val.id, img: val.image, title: val.title, price : val.price ,count: 1}), alert('장바구니에 담겼습니다.'))}}>장바구니</Button>
                <Button onClick={()=>{dispatch(addItem({id: val.id, img: val.image, title: val.title, price : val.price ,count: 1}), alert('장바구니를 확인해주세요.'))}}>구매하기</Button>
              </motion.div>

            )
          })
        }

          



      </motion.div>




    </div>
  )
}
