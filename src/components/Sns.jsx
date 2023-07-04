import React from 'react'
import './components.css' 
import styled from 'styled-components'

const SnsBox = styled.div`

    width: calc(20% - 24px);
    /* height: 335px; */
    height: auto;
    cursor: pointer;
    font-size: 16px;
    background-color: transparent;
    transition: .3s;
    margin-left: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    &:nth-child(5n){
        margin-right: 20px;
    }
 `



export default function Sns() {

    const snsData= [
        {
          id: 'sns01',
          image: process.env.PUBLIC_URL+'/img/main/instagram/01.jpg',
        },
        {
            id: 'sns02',
            image: process.env.PUBLIC_URL+'/img/main/instagram/02.jpg',
          },
          {
            id: 'sns03',
            image: process.env.PUBLIC_URL+'/img/main/instagram/03.jpg',
          },
          {
            id: 'sns04',
            image: process.env.PUBLIC_URL+'/img/main/instagram/04.jpg',
          },
          {
            id: 'sns05',
            image: process.env.PUBLIC_URL+'/img/main/instagram/05.jpg',
          },
       
          {
            id: 'sns06',
            image: process.env.PUBLIC_URL+'/img/main/instagram/06.jpg',
          },
          {
            id: 'sns07',
            image: process.env.PUBLIC_URL+'/img/main/instagram/07.jpg',
          },
          {
            id: 'sns08',
            image: process.env.PUBLIC_URL+'/img/main/instagram/08.jpg',
          },
          {
            id: 'sns09',
            image: process.env.PUBLIC_URL+'/img/main/instagram/09.jpg',
          },
          {
            id: 'sns10',
            image: process.env.PUBLIC_URL+'/img/main/instagram/10.jpg',
          },
          
       
       
      ]


   

  return (
    <div>

        <div className="sns_wrap">

            {
                snsData.map((val,idx)=>{
                    return(

                        <SnsBox key={idx}>
                            <img src={val.image} alt="img" />
                        </SnsBox>


                    )

                })
            }

        </div>

    </div>
  )
}
