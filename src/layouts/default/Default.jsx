import React from "react";
import Footer from "../../components/organisms/Footer/Footer";
import Header from "../../components/organisms/Header/Header";
import SocialIcon from "../../components/organisms/SocialIcon/SocialIcon";
import HomePage from "../../pages/HomePage/HomePage";
import '../default/Default.scss'
const DefaultLayout = (props) => {

  const name = "truong"

  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
      <SocialIcon/>
    </div>
  );
};

export default DefaultLayout;
