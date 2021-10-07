import React from "react";
import CustomTag from "../../atoms/CustomTag/CustomTag";
import container from "./FooterList.module.scss";

const FooterList = (props) => {
  const list = props.list;
  return (
    <div className={container.container}>
      <CustomTag
        is="p"
        content={list.title}
        className={container["container__title"]}
      ></CustomTag>
      {list.data.map((e, i) => (
        <a className={container["container__text"]} href={e.link} key={`footer${i}`}>
          {e.text}
        </a>
      ))}
    </div>
  );
};

export default FooterList;
