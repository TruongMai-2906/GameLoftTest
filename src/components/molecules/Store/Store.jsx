import React from 'react'
import CustomTag from '../../atoms/CustomTag/CustomTag'
import Logo from '../../atoms/Logo/Logo'
import nitendo from '../../../assets/imgs/nitendo.png'
import microsoft from '../../../assets/imgs/microsoft.png'
import steam from '../../../assets/imgs/steam.png'
import container from './Store.module.scss'

const Store = (props) => {

  return (
    <div className={container.container}>
      <CustomTag is="p" content="Download latest version" className={container['container__title']}></CustomTag>
      <div className={container['container__group-store']}>
        <Logo src={nitendo} alt="nitendo" className={container['container__image']}></Logo>
        <Logo src={microsoft} alt="microsoft" className={container['container__image']}></Logo>
        <Logo src={steam} alt="steam" className={container['container__image']}></Logo>
      </div>
    </div>
  )
}
 
export default Store
 