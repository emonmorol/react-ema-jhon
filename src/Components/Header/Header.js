import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header-content">
      <img src={logo} alt="" />
      <div className="link-content">
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventioris">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
