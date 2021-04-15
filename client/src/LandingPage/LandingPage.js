import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home_Page from"../Images/Home_Page.jpg";
import LogInButton from "../LoginButton/LogInButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
      <div>
      <Header/>
      <Link to="/RegisterPage">
      <RegisterButton/>
      </Link>
      <Link to="/LogInPage">
      <LogInButton/>
      </Link>
        <div className="landingPageBackground">
          <div className="titleLP">
            
            <div className="mainTitleLP">
           
    <strong >Volunteer with CodeYourFuture</strong>
</div>
    <img className="imageLP" src={Home_Page}></img>
</div>
 <div className="subTitleLP">Together, we can help disadvantaged adults find meaningful work.</div>
     
      </div>
     
      <Footer/>
      </div>
  )
};

export default LandingPage;