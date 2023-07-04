import React from 'react'
import{Routes, Route, Link} from 'react-router-dom';
import './components.css' 
import { useSelector } from 'react-redux';

export default function Header() {

    const list = useSelector ((state)=>state.cart)

  return (
    <div>

        <div className="head_wrap">
            <div className="blank">
                {/* <Link to={'/login'}>
                    <div className="login">로그인</div>
                </Link> */}
            </div>
            <div className="logo">
                <Link to='/'>
                    <img src ={process.env.PUBLIC_URL + '/img/LOGO/logo02.png'} alt="img" />
                </Link>
            </div>
            <div className="cart">
                {/* <Link to='/cart'>
                    <div className="cart_icon_wrap">
                        <img src={process.env.PUBLIC_URL + '/img/cart.png'} alt="cart" />
                        <p>{list.length}</p>
                    </div>
                   
                </Link> */}
            </div>
        </div>


    </div>
  )
}
