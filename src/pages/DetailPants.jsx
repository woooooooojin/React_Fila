import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import {useDispatch, useSelector} from 'react-redux'
import { addItem, deleteReivew } from './store';
import styled from 'styled-components'

const Button = styled.button`

    width: calc(50% - 30px);
    margin-left: 20px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 30px;
    margin-top: 60px;
    cursor: pointer;
    font-size: 18px;
    background-color:  #002053;
    color: #fff;
    transition: .3s;
    &:hover{
        background-color: #fff;
        color:#002053;
        box-shadow: 0 0 10px black;
        /* border: 1px solid #002053; */
    }
    &:nth-child(2){
        margin-right: 20px;
    }
 `


export default function DetailPants(props) {


  const {pants} = props
  const {id} = useParams()
  const dispatch = useDispatch()

  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionChange = (event) => {setSelectedOption(event.target.value)}
  const colorChange = (optionValue) =>{
    if(selectedOption === optionValue){
      return {backgroundColor : '#002053', color:'#fff'};

    }
    return{};
  }

  //댓글구현
  // const [userName, setUserName] = useState('') 
  // const [nameList, setNameList] = useState([])

  const [userDesc, setUserDesc] = useState('') //리뷰내용
  const [reviewList, setReviewList] = useState([])//리뷰리스트



  let post = e =>{
    const copyReviewList = [...reviewList] //리뷰리스트 내용 받아옴

    copyReviewList.push(userDesc)// 유저리뷰내용을 푸시

    setReviewList(copyReviewList) // 그 푸시된 내용을 setreviewlist로 변경

    setUserDesc('')//리뷰내용칸 초기화


    // const copyNameList = [...nameList]
    // copyNameList.push(userName) 
    // setNameList(copyNameList)
    // setUserName('')
  }



  //리뷰삭제
  const removeComment = (id) => {
    return setReviewList(reviewList.filter((comment) => comment.id == id)) ;
  };
  // !== console로는 담기긴하는데,,,
  //console.log(reviewList.filter((comment) => comment.id !== id))


  //   // user.id와 id가 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //   // user.id === id인 원소만 제거함. true인 원소들만 반환,,,

  // const onRemove = (id) => {
  //   let remove = reviewList.filter((review) => review.id !== id);
  //   setReviewList(remove)
  // };

 
  return (
    <div>


        <div className="detail_wrap">

            <div className="detail_left">
              <img src={pants[id].image} alt="img" />
            </div>
            <div className="detail_right">
              <div className="detail_tit">{pants[id].title}</div>
              <div className="detail_desc">{pants[id].desc}</div>
              <div className="detail_price">{(pants[id].price).toLocaleString('ko-KR')}원</div>
              <div className="detail_option">

                <div className="opt_wrap">
                <label className='lab01' style={colorChange('M')}>
                <input
                className='opt01'
                name="radio_opt"
                type="radio"
                value="M"
                checked={selectedOption === 'M'}
                onChange={handleOptionChange}
                />
                M
                </label>

                <label className='lab02' style={colorChange('L')}>
                    <input
                    className='opt02'
                    name="radio_opt"
                    type="radio"
                    value="L"
                    checked={selectedOption === 'L'}
                    onChange={handleOptionChange}
                    />
                    L
                </label>

                <label className='lab03' style={colorChange('XL')}>
                    <input
                    className='opt03'
                    name="radio_opt"
                    type="radio"
                    value="XL"
                    checked={selectedOption === 'XL'}
                    onChange={handleOptionChange}
                    />
                    XL
                </label>
                </div>

              </div>



              <Button onClick={()=>{dispatch(addItem({id: pants[id].id, img: pants[id].image, title: pants[id].title, option: selectedOption,price : pants[id].price ,count: 1}),alert('장바구니에 담겼습니다.'))}}>장바구니</Button>
              <Button onClick={()=>{dispatch(addItem({id: pants[id].id, img: pants[id].image, title: pants[id].title, option: selectedOption,price : pants[id].price ,count: 1}),alert('장바구니를 확인해주세요.'))}}>구매하기</Button>

              <div className="delivery_desc">
                <ul>
                  <li>배송안내</li>
                  <li>· CJ택배 1588-1255</li>
                  <li>· 결제 후 대략 영업일 3~5일 이내 배송이 완료됩니다.</li>
                  <li>· 상품의 배송 진행 상황은 [주문배송조회] 에서 확인하실 수 있습니다.</li>
                  <li>· 특정 상품의 경우 재고 상황에 따라 도착일이 지연될 수 있습니다.</li>
                  <li>· 전국배송가능 (해외배송 서비스는 현재 제공되지 않습니다.)</li>
                  <li>· 휠라 온라인스토어는 무료 배송 서비스를 제공하고 있습니다.</li>

                </ul>
              </div>

            </div>






        </div>

            <div className="category_tit">
            <h2>Review</h2>
            </div>
            <div className="review_wrap">

            <div className="review_box_img">
              <img src={pants[id].image} alt="img" />
            </div>

            <div className="review_box">

              <div className="review_tit">
                <input className="title_input"
                  type='text'
                    placeholder='제목'
                    name='title'
                  // onChange={e=>{
                  //   setUserName(e.target.value)
                  // }}
                  readOnly
                  value={pants[id].title}
                />
              </div>

              <div className="review_desc">
                <textarea className="desc_input"
                    type='text'
                    placeholder='리뷰를 입력하세요.'
                    name='desc'
                    onChange={e=>{
                      setUserDesc(e.target.value)
                    }}
                  
                  
                    value={userDesc}

                      
                />
              </div>

              <button className={userDesc.length > 0 ? 'review_submit' : 'btn_disable'} onClick={post} disabled={userDesc.length > 0 ? false : true} >리뷰등록</button>



            </div>

              

            </div>

           


            <ul className='review_list_box'>

            {/* {
              nameList.map((name,idx)=>{
                return(
                  <div key={idx}>
                    <p>{name}</p>
                  </div>
                )
              })
            
            } */}
            {
              reviewList.map((review,idx)=>{
                return(
                  <li key={idx}>
                    {idx + 1}) {review}<span className='li_span' onClick={removeComment}>X</span>
                    
                  </li>
                )
              })
            }

            {/* {
              reviews.map((val,idx)=>{
                return(
                  <li key={idx} className='asdf'>
                    <p className='r_list'>{val}</p>
                  </li>
                )
              })
            } */}


            </ul>



    </div>
  )
}
