import React from 'react'
import BannerDescription from '../../molecules/BannerDescription/BannerDescription'
import Store from '../../molecules/Store/Store'

import container from './Banner.module.scss'

const Banner = (props) => {
  return (
    <section>
        <div className={container.container}>
          <BannerDescription bannerDescription={props.bannerDescription}></BannerDescription>
        </div>
        <Store />
    </section>
  )
}
 
export default Banner
 