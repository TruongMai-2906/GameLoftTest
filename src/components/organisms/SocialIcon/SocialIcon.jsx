import React from "react";

import container from "./SocialIcon.module.scss";
const SocialIcon = (props) => {
  return (
    <section className={container.container}>
      <a href="/" target="_blank">
        <i className="fas fa-share-alt"></i>
      </a>
      <a href="/" target="_blank">
        <i className="fas fa-headphones"></i>
      </a>
      <a href="/" target="_blank">
        <i className="far fa-envelope"></i>
      </a>
    </section>
  );
};

export default SocialIcon;
