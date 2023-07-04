import React from 'react'
import './components.css' 

import { motion } from "framer-motion";




export default function Magazine() {

    const mgzData= [
        {
          id: 'mgz01',
          image: process.env.PUBLIC_URL+'/img/mgz01.jpg',
          title: 'ACC For MY First Court',
        },
        {
            id: 'mgz02',
            image: process.env.PUBLIC_URL+'/img/mgz02.jpg',
            title: 'TENNIS SUMMER SHOES',
          },
          {
            id: 'mgz03',
            image: process.env.PUBLIC_URL+'/img/mgz03.gif',
            title: 'DRIFER TUBE THONG',
          },
          {
            id: 'mgz04',
            image: process.env.PUBLIC_URL+'/img/mgz04.jpg',
            title: 'STAY COOL W/BALL CAP',
          },
       
      ]
    
  return (
    <div>
        
        <div className="mgz_wrap">
            {
                mgzData.map((val,idx)=>{
                    return(
                    <motion.div whileHover={{ scale: 1.06 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='mgz_ex' key={idx}>
                      <div className="mgz_box">
                        <img src={val.image} alt="img" />
                        <p>{val.title}</p>
                      </div>
                    </motion.div>
                    )
                        
                })
            }
        </div>

    </div>
  )
}
