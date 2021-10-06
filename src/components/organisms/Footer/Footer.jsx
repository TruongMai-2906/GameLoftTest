import React from "react";
import Follow from "../../molecules/Follow/Follow";
import FooterList from "../../molecules/FooterList/FooterList";
import ChangeLanguage from "../../molecules/ChangeLanguage/ChangeLanguage";
import CustomTag from "../../atoms/CustomTag/CustomTag";
import container from "./Footer.module.scss";
import { Container } from "react-bootstrap";
import logofooter from "../../../assets/imgs/footerlogo.png";

const Footer = (props) => {
  const list1 = {
    title: "VISIT",
    data: [
      {
        link: "/",
        text: "Gameloft Games",
      },
      {
        link: "/",
        text: "Gameloft Careers",
      },
      {
        link: "/",
        text: "Gameloft News",
      },
      {
        link: "/",
        text: "Gameloft Forum",
      },
      {
        link: "/",
        text: "Gameloft Corporation",
      },
      {
        link: "/",
        text: "Gameloft Advertising",
      },
      {
        link: "/",
        text: "Gameloft Support",
      },
      {
        link: "/",
        text: "Gameloft Games",
      },
    ],
  };
  const list2 = {
    title: "LEGAL",
    data: [
      {
        link: "/",
        text: "Terms of Use",
      },
      {
        link: "/",
        text: "Privacy Policy",
      },
      {
        link: "/",
        text: "Cookie Policy",
      },
      {
        link: "/",
        text: "EULA",
      },
      {
        link: "/",
        text: "Lagal Notices",
      },
      {
        link: "/",
        text: "Event Rules",
      },
      {
        link: "/",
        text: "Business Contact",
      },
    ],
  };
  return (
    <section className={container.container}>
      <div>
        <Container className="p-0">
          <div className={container["container__inner"]}>
            <div className={container["container__left"]}>
              <div className={`${container["container__left-logo"]} ${container["container__left-logo-pc"]}`}>
                <a href="/">
                  <img src={logofooter} alt="logo" />
                </a>
              </div>
              <Follow></Follow>
              <div className={`${container["container__left-logo"]} ${container["container__left-logo-mb"]}`}>
                <a href="/">
                  <img src={logofooter} alt="logo" />
                </a>
              </div>
              <ChangeLanguage></ChangeLanguage>
            </div>
            <div className={container["container__right"]}>
              <FooterList
                className={container["container__right-item"]}
                list={list1}
              ></FooterList>
              <FooterList
                className={container["container__right-item"]}
                list={list2}
              ></FooterList>
            </div>
          </div>
        </Container>
        <div className={container["container__bottom"]}>
          <CustomTag
            is="p"
            content="©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries."
            className={container["container__bottom-text"]}
          ></CustomTag>
          <CustomTag
            is="p"
            content="All other trademarks are the property of their respective owners."
            className={container["container__bottom-text"]}
          ></CustomTag>
        </div>
      </div>
    </section>
  );
};

export default Footer;
