import React from "react";
import SocialPost from "../../molecules/Social/SocialPost/SocialPost";
import SocialStories from "../../molecules/Social/SocialStories/SocialStories";
import { Container } from "react-bootstrap";
import container from "./Community.module.scss";
const Community = (props) => {
  return (
    <section className={container.container} data-aos="fade-up">
      <Container className="p-0">
        <SocialStories></SocialStories>
      </Container>
      <SocialPost></SocialPost>
    </section>
  );
};

export default Community;
