import React, { useEffect } from "react";
import Banner from "../../components/organisms/Banner/Banner";
import Community from "../../components/organisms/Community/Community";
import Contact from "../../components/organisms/Contact/Contact";
import EventsAndPromotions from "../../components/organisms/EventsAndPromotions/EventsAndPromotions";
import ExclusiveContent from "../../components/organisms/ExclusiveContent/ExclusiveContent";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = (props) => {
  const bannerDescription = {
    title: "Gameloft game",
    articleList: ["Racing", "Action"],
    stars: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit...",
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Banner bannerDescription={bannerDescription} />
      <Contact />
      <Community />
      <EventsAndPromotions />
      <ExclusiveContent />
    </div>
  );
};

export default HomePage;
