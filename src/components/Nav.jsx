import React from 'react'
import{Routes, Route, Link, NavLink} from 'react-router-dom';
import './components.css' 

export default function Nav() {

    const activeColor= {
        color:'#002053',
        backgroundColor:'#fff',
        border:'1px solid #002053'
    }

  return (
    <div>
            <nav>
                <ul className='nav_wrap'>
                    <li><NavLink to='/' style={({isActive})=>(isActive ? activeColor : {})}>Home</NavLink></li>
                    <li><NavLink to='/shirts' style={({isActive})=>(isActive ? activeColor : {})}>Shirts</NavLink></li>
                    <li><NavLink to='/pants' style={({isActive})=>(isActive ? activeColor : {})}>Pants</NavLink></li>
                    <li><NavLink to='/shoes' style={({isActive})=>(isActive ? activeColor : {})}>Shoes</NavLink></li>
                    <li><NavLink to='/tennis' style={({isActive})=>(isActive ? activeColor : {})}>Tennis</NavLink></li>
                    <li><NavLink to='/cart' style={({isActive})=>(isActive ? activeColor : {})}>장바구니</NavLink></li>
                    <li><NavLink to='/login' style={({isActive})=>(isActive ? activeColor : {})}>로그인</NavLink></li>
                </ul>
            </nav>

            

       
    </div>
  )
}
