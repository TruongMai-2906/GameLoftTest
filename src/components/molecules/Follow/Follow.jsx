import React from 'react'
import CustomTag from '../../atoms/CustomTag/CustomTag'
import container from './Follow.module.scss'
import { Container } from 'react-bootstrap';

const Follow = (props) => {

  return (
    <div className={container.container}>
        <CustomTag is="p" content="Follow Us" className={container['container__title']}></CustomTag>
        <div className={container['container__social']}>
            <a href="/" target="_blank"><i className="fab fa-facebook-square"></i></a>
            <a href="/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="/" target="_blank"><i className="fab fa-twitter-square"></i></a>
            <a href="/" target="_blank"><i className="fab fa-youtube-square"></i></a>
        </div>
    </div>
  )
}
 
export default Follow
 