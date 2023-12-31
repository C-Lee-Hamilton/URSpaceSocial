import Logo from "../../media/miniLogo.png";
import MenuIcon from "../../media/menu-icon.png";
import LogoutButton from "../../media/logoutButton.png";
import userImage from "../../media/userImage.png";
import { Link } from "wouter";
import { UserInfo } from "../../context/context";
import { useContext } from "react";

import React, { useState } from "react";
import "./Header.css";

function Header() {
  const { information } = useContext(UserInfo);
  const useName = information.username;
  const [open, setOpen] = useState(false);
  const menuAction = () => {
    setOpen(!open);
  };

  return (
    <header className="Header-component">
      <img className="HeaderImg" src={Logo} alt=""></img>
      <div className="menu-container">
        <div onClick={menuAction} className="menu-trigger">
          <img alt="" src={MenuIcon}></img>
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>
            <h1 className="menuHeader">Menu</h1>

            <img className="userImage" src={userImage} alt=""></img>
            <br />
            <span>{useName}</span>
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
