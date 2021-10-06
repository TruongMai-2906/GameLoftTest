import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import container from "./SocialStories.module.scss";
import asphalt from '../../../../assets/imgs/asphalt8.jpg'
import leftArrow from '../../../../assets/imgs/leftarrow.png'
import rightArrow from '../../../../assets/imgs/rightarrow.png'
import CustomTag from '../../../atoms/CustomTag/CustomTag'
import { Container } from 'react-bootstrap';
const SocialStories = (props) => {

  const NextArrow = ({ onClick }) => {
    return (
      <div className={container["container__slide-right-arrow"]} onClick={onClick}>
        <img src={rightArrow} alt="arrow" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={container["container__slide-left-arrow"]} onClick={onClick}>
        <img src={leftArrow} alt="arrow" />
      </div>
    );
  };

  let settings = {
    className: "container__slide",
    centerMode: false,
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 6,
    swipeToSlide: true,
    speed: 500,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {setIndex(next);console.log(next);},
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        }
      }
    ]
  };

  const list = [
    {
      img: asphalt,
      title: "asphalt 1",
    },
    {
      img: asphalt,
      title: "asphalt 2",
    },
    {
      img: asphalt,
      title: "asphalt 3",
    },
    {
      img: asphalt,
      title: "asphalt 4",
    },
    {
      img: asphalt,
      title: "asphalt 5",
    },
    {
      img: asphalt,
      title: "asphalt 6",
    },
    {
      img: asphalt,
      title: "asphalt 7",
    },
    {
      img: asphalt,
      title: "asphalt 8",
    },
    {
      img: asphalt,
      title: "asphalt 9",
    },
  ];

  const [index, setIndex] = useState(0)
  return (
    <Container className={container.container}>
      <CustomTag is="p" content="Game Community Hub" className={container['container__title']}></CustomTag>
      <CustomTag is="p" content="Live Game Updates" className={container['container__sub-title']}></CustomTag>
      <Slider {...settings} >
        {list.map((e,i) =>
          <div className={i === index ? `${container["container__slide-item"]} ${container["container__active"]}` : `${container["container__slide-item"]}`}>
            <a href="/" target="_blank"><img src={e.img} alt={e.title} /></a>
            <CustomTag is="p" content={e.title} className={container['container__item-title']}></CustomTag>
          </div>
        )}
      </Slider>
    </Container>
  );
};

export default SocialStories;
