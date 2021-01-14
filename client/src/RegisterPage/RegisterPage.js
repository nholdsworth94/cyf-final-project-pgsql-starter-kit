import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from 'react';
import { Link } from "react-router-dom";


const RegisterPage = () => {

  function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SubmitButton(){
    if (firstName && lastName && validateEmail(email) && password ){
      return <button className="btn btn-danger" type="submit" data-toggle="modal" data-target="#signUpModal" value="submit">Register</button>
    } else {
      return <button className="btn btn-danger" type="submit" data-toggle="modal" data-target="#signUpModal" value="submit" disabled>Register</button>
    };
  };


  return (
      <div>
      <Header/> 
      <div className="container">
  <div className="info">
    <h4>Create a new account</h4>
    <iframe name="hiddenFrame" className="hide"></iframe>
  </div>
</div>
<div className="form">
  
  <form className="login-form" method="POST" target="hiddenFrame" action="https://cyf-finalproject-class-planner.herokuapp.com/api/register">
   <input type="text" placeholder="first name" name="fname" value={firstName} onChange={ e => setFirstName(e.target.value)} required/>
    <input type="text" placeholder="last name" name="lname" value={lastName} onChange={ e => setLastName(e.target.value)} required/>
    <input type="email" placeholder="email" name="email"  value={email} onChange={ e => setEmail(e.target.value)} required/>
    <input type="password" placeholder="password" name="password" value={password} onChange={ e => setPassword(e.target.value)} required/>

   
 <SubmitButton/>
 
  </form>
  <Link to="/LogInPage">
    <p className="message">Already on CodeYourFuture? <a href="#">Log In</a></p>
    </Link>




</div>


<div class="modal" tabindex="-1" role="dialog" id="signUpModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Register</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              You have successfully registered. Thanks
            </div>
            <div class="modal-footer">
                <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                onClick={()=>window.location.reload()}
              >
                OK
              </button>
             
            </div>
          </div>
        </div>
      </div>




      <Footer/>
      </div>
  )
};

export default RegisterPage;