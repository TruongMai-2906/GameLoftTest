import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import CustomTag from "../../atoms/CustomTag/CustomTag";
import container from "./Events.module.scss";
import share from "../../../assets/imgs/share.png";

SwiperCore.use([Navigation, Autoplay, Pagination])
const Events = (props) => {

	const list = [
    {
      src: "",
      alt: "",
      title: "title1",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title2",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title3",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title4",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title5",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title6",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title7",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title8",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title9",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title10",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
    {
      src: "",
      alt: "",
      title: "title11",
      subTitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
    },
  ];
	const [currentEvent, setCurrentEvent] = useState(0);
  const ref = useRef(null) 
  return (
    <div className={container.container}>
      <Swiper
        ref={ref}
        spaceBetween={5}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{
          delay: 3000
        }}
        pagination = {
          {
            el: ".pagination",
            clickable: true,
          }
        }
        onInit={(swiper) => {
          setCurrentEvent(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => {
          setCurrentEvent(swiper.activeIndex);
        }}
      >
        {list.map((e, i) => (
          <SwiperSlide className={i !== currentEvent ? container["container__item"]: `${container["container__item"]} ${container["container__item-scale"]}`}>
            <div className={container["container__inner"]}>
              <a className={i !== currentEvent ? container['hide'] : ''} href="/" target="_blank">
                <i class="fas fa-share-alt"></i>
              </a>
              <CustomTag
                is="p"
                content={e.title}
                className={i !== currentEvent ? container["container__item-title-sub"] : container["container__item-title"]}
              ></CustomTag>
              <CustomTag
                is="p"
                content={e.subTitle}
                className={i !== currentEvent ? container['hide'] : container["container__item-subtitle"]}
              ></CustomTag>
              <button className={i !== currentEvent ? container['hide'] : container["container__item-button"]}>
                <CustomTag
                  is="p"
                  content="read more"
                ></CustomTag>
              </button>
            </div>
          </SwiperSlide>
        ))}

        <div className="pagination"></div>
      </Swiper>
    </div>
  );
};

export default Events;
