import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RegisterButton from "../RegisterButton/RegisterButton";
import { Link } from "react-router-dom";
import { useState } from 'react';

const LogInPage = () => {

 function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SubmitButton(){
    if ( validateEmail(email) && password ){
      return <button className="btn btn-danger" type="submit" value="submit">login</button>
    } else {
      return <button className="btn btn-danger" type="submit" value="submit" disabled>login</button>
    };
  };





  return (
      <div>
      <Header/> 
      <div className="container">
  <div className="info">
    <h4>Login To Class Planner</h4>
  </div>
</div>

<div className="form">
  
  <form className="login-form" method="GET" action="https://cyf-finalproject-class-planner.herokuapp.com/UpcomingLessons">
    <input type="email" placeholder="email" value={email} onChange={ e => setEmail(e.target.value)}  name="email" required/>
    <input type="password" placeholder="password" value={password} onChange={ e => setPassword(e.target.value)} name="password" required/>
   
      <SubmitButton/>

     <p className="messageForgot"> <a href="#">Forgot password?</a></p>
    
  </form>

  
    <p className="message">Don't have an account? <span>  <Link to="/RegisterPage">Create an account </Link></span></p>
   
</div>
      <Footer/>
      </div>
  )
};

export default LogInPage;