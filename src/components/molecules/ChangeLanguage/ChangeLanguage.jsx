import React from "react";
import container from "./ChangeLanguage.module.scss";
import { Dropdown } from "react-bootstrap";

const ChangeLanguage = (props) => {

  return (
    <div className={container.container}>
      <Dropdown>
        <Dropdown.Toggle style={{backgroundColor: '#fff', color: "#2699FB"}} variant="" id="dropdown-basic">
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
