import React from "react";
import CYF_Brand from"../Images/cyf_brand.png";
import LogInButton from "../LoginButton/LogInButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import Register from "../RegisterButton/RegisterButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  
        <div className="navigation">
          <a href="/">        <img className="logo" src={CYF_Brand} alt="CodeYourFuture logo" />
        <strong className="nav_Home">Home</strong>  </a>
        <Link to="/AdminPage">
        <strong className="nav_Home ml-2">Admin Side</strong>
        </Link>
      </div>
  )
};

export default Header;