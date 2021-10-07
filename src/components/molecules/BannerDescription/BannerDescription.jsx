import React from "react";
import Article from "../../atoms/Article/Article";
import CustomTag from "../../atoms/CustomTag/CustomTag";
import RateStar from "../../atoms/RateStar/RateStar";
import container from "./BannerDescription.module.scss";
const BannerDescription = (props) => {
  const data = props.bannerDescription;

  return (
    <div className={container.container}>
      <CustomTag
        is="p"
        content={data.title}
        className={container["container__title"]}
      ></CustomTag>
      <div className={container["container__sub-title"]}>
        <Article articleList={data.articleList} /> |{" "}
        <RateStar stars={data.stars} />
      </div>
      <CustomTag
        is="p"
        content={data.description}
        className={container["container__description"]}
      ></CustomTag>
    </div>
  );
};

export default BannerDescription;
