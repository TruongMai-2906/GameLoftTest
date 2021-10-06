import React from "react";
import Logo from "../../atoms/Logo/Logo"
import CustomTag from '../../atoms/CustomTag/CustomTag'
import ContactForm from '../../molecules/Form/ContactForm'
import container from "./Contact.module.scss"
import minion from '../../../assets/imgs/minion.png'

const Contact = (props) => {
  return (
    <section className={container.container} data-aos="fade-up">
      <div className={container["container-left"]}>
        <Logo
          src={minion}
          alt="minion"
          className={container["container-left__image"]}
        ></Logo>
      </div>
      <div className={container['container-right']}>
        <CustomTag is="p" content="Stay in the Know!" className={container['container-right__title']}></CustomTag>
        <CustomTag is="p" content="Don't get left behind!" className={container['container-right__sub-title']}></CustomTag>
        <CustomTag is="p" content="Subscribe to our newsletters today!" className={container['container-right__sub-title']}></CustomTag>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
