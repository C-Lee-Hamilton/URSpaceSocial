import Logo from "../media/miniLogo.png";
import MenuIcon from "../media/menu-icon.png";
import LogoutButton from "../media/logoutButton.png";
import userImage from "../media/userImage.png";
import { Link } from "wouter";
import App from "../App";

import React, { useState } from "react";
import "../App.css";

function Header() {
  const [open, setOpen] = useState(false);
  const menuAction = () => {
    setOpen(!open);
  };

  return (
    <header className="Header-component">
      <img
        className="HeaderImg"
        style={{ width: "50px", height: "50px" }}
        src={Logo}
        alt=""
      ></img>
      <div className="menu-container">
        <div onClick={menuAction} className="menu-trigger">
          <img alt="" src={MenuIcon}></img>
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            Greetings...
            <br />
            <img className="userImage" src={userImage} alt=""></img>
            <br />
            <span>Designer</span>
          </h3>
          <ul>
            <DropdownItem link="/" img={LogoutButton} text={"Log Out"} />
          </ul>
        </div>
      </div>
    </header>
  );
}

function DropdownItem(props) {
  return (
    <Link to={props.link}>
      {" "}
      <li className="dropdownItem">
        <img src={props.img} alt=""></img>
        <a>{props.text}</a>
      </li>
    </Link>
  );
}

export default Header;
