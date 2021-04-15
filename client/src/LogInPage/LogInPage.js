import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RegisterButton from "../RegisterButton/RegisterButton";
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
      <div>
      <Header/> 
      <div className="container">
  <div className="info">
    <h4>Login To Class Planner</h4>
  </div>
</div>

<div className="form">
  
  <form className="login-form">
    <input type="text" placeholder="email"/>
    <input type="password" placeholder="password"/>
    <Link to="/UpcomingLessons">
    <button>login</button>
   </Link>
     <p className="messageForgot"> <a href="#">Forgot password?</a></p>
    <p className="message">Don't have an account? <a href="#">Create an account</a></p>
  </form>
</div>
      <Footer/>
      </div>
  )
};

export default LogInPage;