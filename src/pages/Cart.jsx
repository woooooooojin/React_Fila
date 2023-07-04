import React from 'react'
import './style.css' 
import {useDispatch, useSelector} from 'react-redux'
import { addCount, deleteAll, deleteItem, minCount } from './store'

export default function Cart() {

  const state = useSelector((state)=>state)
  const dispatch = useDispatch()

  let result = 0;
  state.cart.map((val,idx)=>{
    return(
      result += (state.cart[idx].price * state.cart[idx].count)
    )
  })

  return (
    <div>

      <div className="cart_wrap">
        <h4>장바구니</h4>
        <ul className='cart_tit'>
          <li>순서</li>
          <li>품번</li>
          <li>주문상품</li>
          <li>가격</li>
          <li>상품개수</li>
          <li>수량</li>
          <li>삭제</li>
        </ul>

        <ul className='maplist'>
          
          {
            state.cart.map((item,i)=>{
              return(
                <li className='cartlist' key={item}>
                  <div className="cart_idx">{i + 1}</div>
                  <div className="cart_id">{state.cart[i].id}</div>
                  <div className="cart_img">
                    <img src={state.cart[i].img} alt="img"/> 
                  </div>
                  <div className="cart_title">{state.cart[i].title} <span> {state.cart[i].option}</span></div>
                  <div className="cart_price">{(state.cart[i].price * state.cart[i].count).toLocaleString('ko-KR')}원</div>
                  <div className="cart_count">{state.cart[i].count}</div>
                  <div className="cart_btns">
                    <button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                    <button onClick={()=>dispatch(minCount(state.cart[i].id))}>-</button>
                  </div>
                  <div className="cart_delete">
                    <button onClick={()=>dispatch(deleteItem(state.cart[i].id))}>삭제</button>
                  </div>
                </li>
              )
            })
          }


        </ul>
        
        <div className="total_btn_wrap">
          <div className='all_del' onClick={()=>dispatch(deleteAll())}>전체삭제</div>
          <div className='order_btn' onClick={()=>{alert('주문금액은 ' + result.toLocaleString('ko-KR')+'원 입니다.')}}>주문하기</div>
        </div>
        
        <p className='total_price'> 합계 :{result.toLocaleString('ko-KR')} 원</p>
        
      </div>

    </div>
  )
}
