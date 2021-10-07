import React from "react";
import Logo from "../../atoms/Logo/Logo";
import container from "./Header.module.scss";
import logoSrc from "../../../assets/imgs/logo.png";
const Header = (props) => {
  return (
    <header className={container.wrapper}>
      <div className={container.container}>
        <div className={container["container-left"]}>
          <Logo
            src={logoSrc}
            alt="gameloft"
            className={container["container-left__image"]}
          ></Logo>
        </div>
        <div className={container["container-right"]}>
          <div className={container["container-right__hamburger"]}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
