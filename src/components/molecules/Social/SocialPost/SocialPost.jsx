import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import CustomTag from "../../../atoms/CustomTag/CustomTag";
import container from "./SocialPost.module.scss";
import facebook from "../../../../assets/imgs/facebook.png";
import twitter from "../../../../assets/imgs/twitter.png";
import instagram from "../../../../assets/imgs/instagram.png";
import share from "../../../../assets/imgs/share.png";
import search from "../../../../assets/imgs/search.png";
import leftArrow from "../../../../assets/imgs/leftarrow2.png";
import rightArrow from "../../../../assets/imgs/rightarrow2.png";

SwiperCore.use([Navigation]);
const SocialPost = (props) => {
  const { register, handleSubmit } = useForm();

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

  const [filterList, setFilterList] = useState(
    list.filter((item, index) => index < 10)
  );
  const onSubmit = (data) => {
    setFilterList(doFilterList(data.search));
    setMobileList(doFilterList(data.search));
  };

  const doFilterList = (data) =>
    list.filter((item, index) => item.title.includes(data) && index < 10);

  const [countItem, setCountItem] = useState(3);

  const [mobileList, setMobileList] = useState(
    filterList.filter((item, index) => index < countItem)
  );
  const loadMore = () => {
    setCountItem(countItem + 3);
    setMobileList(filterList.filter((item, index) => index < countItem));
  };
  const [currentPost, setCurrentPost] = useState(0);

  return (
    <div className={container.container}>
      <Container className={container["container-top"]}>
        <CustomTag
          is="p"
          content="All Posts"
          className={container["container-top__title"]}
        ></CustomTag>
        <div className={container["container-top__right"]}>
          <div className={container["container-top__right-social"]}>
            <a href="/" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="/" target="_blank">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div
            className={`${container["container-top__right-search-bar"]} ${container["container-top__right-search-bar-pc"]}`}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
                {...register("search", {})}
              />
              <button type="submit">
                <img src={search} alt="search" />
              </button>
            </form>
          </div>
        </div>
      </Container>
      <div className="container">
        <div
          className={`${container["container-top__right-search-bar"]} ${container["container-top__right-search-bar-mb"]}`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
              {...register("search", {})}
            />
            <button type="submit">
              <img src={search} alt="search" />
            </button>
          </form>
        </div>
      </div>
      <div className={container["container-bottom"]}>
        <Swiper
          className={container["container-bottom-pc"]}
          spaceBetween={50}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation={{
            prevEl: ".preButton",
            nextEl: ".nextButton",
          }}
          onInit={(swiper) => {
            setCurrentPost(swiper.activeIndex);
          }}
          freeMode={true}
          autoplay={true}
          onSlideChange={(swiper) => {
            console.log(swiper.activeIndex);
            setCurrentPost(swiper.activeIndex);
          }}
        >
          {filterList.map((e, i) => (
            <SwiperSlide className={container["container-bottom__item"]} key={`pcpost${i}`}>
              <a href="/" target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/" target="_blank">
                <i className="fas fa-share-alt"></i>
              </a>
              <CustomTag
                is="p"
                content={e.content}
                className={container["container-bottom__item-content"]}
              ></CustomTag>
            </SwiperSlide>
          ))}
          <div className={container["container-bottom__group"]}>
            <div
              className={`preButton ${container["container-bottom__prev-button"]}`}
            >
              <img src={leftArrow} alt="arrow" />
            </div>
            <div className={container["container-bottom__pagination"]}>
              {currentPost + 1} / {filterList.length}
            </div>
            <div
              className={`nextButton ${container["container-bottom__next-button"]}`}
            >
              <img src={rightArrow} alt="arrow" />
            </div>
          </div>
        </Swiper>
        <div className={container["container-bottom-mb"]}>
          {mobileList.map((e, i) => (
            <div className={container["container-bottom__item"]} key={`mbpost${i}`}>
              <a href="/" target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/" target="_blank">
                <img src={share} alt="share" />
              </a>
              <CustomTag
                is="p"
                content={e.content}
                className={container["container-bottom__item-content"]}
              ></CustomTag>
            </div>
          ))}
          <div className={container["container-bottom-mb-button"]}>
            <button onClick={loadMore}>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;
