import React, { useEffect } from 'react'
import yellowStar from '../../../assets/imgs/yellowstar.png'
import whiteStar from '../../../assets/imgs/whitestar.png'
import container from './RateStar.module.scss'
const RateStar = (props) => {

  const starCount = parseInt(props.stars);

  const renderStar = () => {
    const starList = [];
    for (let i = 0; i < starCount; i++) {
      starList.push(
        <img className={container['container']} src={yellowStar} alt={i}></img>
      )
    }
    if (starCount < 5) {
      for (let i = 0; i < 5-starCount; i++) {
        starList.push(
          <img className={container['container']} src={whiteStar} alt="white star"></img>
        )
      }
    }
    return starList
  }
  useEffect(() => {
    
  }) 

  return (
    <span className="rate-star">
      {renderStar()}
    </span>
  )
}
 
export default RateStar
 