import React from 'react'
import { Container } from 'react-bootstrap';
import CustomTag from '../../atoms/CustomTag/CustomTag'
import container from './ExclusiveContent.module.scss'
import ImageSlide from '../../molecules/ImageSlide/ImageSlide'
const ExclusiveContent = (props) => {
  return (
    <section>
        <div className={container.container} data-aos="fade-up">
          <Container>
            <CustomTag is="p" content="Exclusive Game Content" className={container['container__title']}></CustomTag>
            <CustomTag is="p" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos." className={container['container__sub-title']}></CustomTag>
          </Container>
          <ImageSlide></ImageSlide>
        </div>
    </section>
  )
}
 
export default ExclusiveContent
 