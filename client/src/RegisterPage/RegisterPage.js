import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const RegisterPage = () => {
  return (
      <div>
      <Header/> 
      <div className="container">
  <div className="info">
    <h4>Create a new account</h4>
  </div>
</div>
<div className="form">
  <form className="login-form">
    <input type="text" placeholder="first name"/>
    <input type="text" placeholder="last name"/>
    <input type="text" placeholder="email"/>
    <input type="password" placeholder="password"/>
    <button>Register</button>
    <p className="message">Already on CodeYourFuture? <a href="#">Log In</a></p>
  </form>
</div>
      <Footer/>
      </div>
  )
};

export default RegisterPage;