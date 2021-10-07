import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import container from "./ImageSlide.module.scss";
import leftArrow from "../../../assets/imgs/leftarrow2.png";
import rightArrow from "../../../assets/imgs/rightarrow2.png";
import asphalt9 from "../../../assets/imgs/asphalt9.jpg";
SwiperCore.use([Navigation])
const ImageSlide = (props) => {

  const list = [
    {
      src: "",
      alt: "",
      title: "title1",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title2",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title3",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title4",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title5",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title6",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title7",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title8",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title9",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title10",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title11",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
  ];

  const [filterList, setFilterList] = useState(list);

  const doFilterList = (data) =>
    list.filter((item) => item.title.includes(data));
  
  const [currentPost, setCurrentPost] = useState(0);
  return (
    <div className={container.container}>
      <div className={container["container-bottom"]}>
        <Swiper  
          spaceBetween={0}
          slidesPerView={'auto'}
          centeredSlides={true}
          navigation={{
            prevEl: '.preButton',
            nextEl: '.nextButton'
          }}
          onInit={(swiper) => {
            setCurrentPost(swiper.activeIndex)
          }}
          freeMode={true}
          onSlideChange={(swiper) => {console.log(swiper.activeIndex); setCurrentPost(swiper.activeIndex)}}
        >
          {filterList.map((e,i) =>
            <SwiperSlide key={`slide${i}`} className={i !== currentPost ? `${container['container-bottom__item']}`: `${container['container-bottom__item']} ${container['container-bottom__item-active']}`}>
              <img src={asphalt9} alt="" />
              <a href={asphalt9} download="asphalt9.jpg" ><i className="far fa-arrow-alt-circle-down"></i></a>
            </SwiperSlide>
          )}
          <div className={container['container-bottom__group']}>
            <div className={`preButton ${container['container-bottom__prev-button']}`}><img src={leftArrow} alt="arrow" /></div>
            <div className={container['container-bottom__pagination']}>{currentPost + 1} / {filterList.length}</div>
            <div className={`nextButton ${container['container-bottom__next-button']}`}><img src={rightArrow} alt="arrow" /></div>
          </div>
        </Swiper>
      
      </div>
    </div>
  );
};

export default ImageSlide;
