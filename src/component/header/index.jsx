import React from "react";
import Logo from "../../asset/logo.svg";
import "./header.css";
const Header = () => {
  return (
    <header className="header-style">
      <img src={Logo} alt="Logo" className="header-logo-style" />
    </header>
  );
};

export default Header;
