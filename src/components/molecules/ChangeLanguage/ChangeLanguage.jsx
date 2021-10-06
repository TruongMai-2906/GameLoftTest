import React, { useState } from "react";
import CustomTag from "../../atoms/CustomTag/CustomTag";
import container from "./ChangeLanguage.module.scss";
import { Container,Dropdown } from "react-bootstrap";

const ChangeLanguage = (props) => {
	const [lang, setLang] = useState("english")
	const [isShow, setIsShow] = useState(false)

	const doChangeLanguage = (lang) => {setLang(lang); setIsShow(!isShow)}
	const showPropDown = () => console.log('here');
  return (
    <div className={container.container}>
      <Dropdown>
        <Dropdown.Toggle style={{backgroundColor: '#fff'}} variant="" id="dropdown-basic">
          <i className="fas fa-globe-asia"></i>English
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Tieng Viet</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ChangeLanguage;
