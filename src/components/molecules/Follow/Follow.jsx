import React from 'react'
import CustomTag from '../../atoms/CustomTag/CustomTag'
import container from './Follow.module.scss'

const Follow = (props) => {

  return (
    <div className={container.container}>
        <CustomTag is="p" content="Follow Us" className={container['container__title']}></CustomTag>
        <div className={container['container__social']}>
            <a href="https://facebook.com" ><i className="fab fa-facebook-square"></i></a>
            <a href="https://linkedin.com" ><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" ><i className="fab fa-twitter-square"></i></a>
            <a href="https://youtube.com" ><i className="fab fa-youtube-square"></i></a>
        </div>
    </div>
  )
}
 
export default Follow
 