import React from "react";
import { useState } from 'react';

const AvailableRoles = ({lessonId,leadTeacher,assistantLeadTeacher,teachingAssistant,coordinator,zoomMaster,personalDevelopment}) =>{

  function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  function SubmitButton(){
    if (fullName && validateEmail(email) && role ){
      return <button type="submit" data-toggle="modal" data-target="#signUpModal"   value="submit" className="btn btn-danger mx-2 mb-2">Class Sign Up</button>
    } else {
      return <button type="submit" data-toggle="modal" data-target="#signUpModal"  value="submit" className="btn btn-danger mx-2 mb-2" disabled>Class Sign Up</button>
    };
  };

 
    return (
    <div className="row-10">
        <h4 className="container col-8 my-2"><strong>Available Roles:</strong></h4>
        <iframe name="hiddenFrame" className="hide"></iframe>
            <form class=" container col-8" target="hiddenFrame" method="POST" action="https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers">
<div className="row">
      <div className="col mx-4">
                <div class="form-check ">
  <input className="form-check-input position-static" type="radio" name="role" value={role} onChange={ e => setRole("Lead Teacher")} required/>
   <label className="form-check-label" for="inlineRadio1">Lead Teacher    {leadTeacher}</label>
</div>
      <div className="form-check">
  <input className="form-check-input position-static" type="radio" name="role" value={role} onChange={ e => setRole("Assistant Lead Teacher")} required/>
  <label className="form-check-label" for="inlineRadio1">Assistant Lead Teacher {assistantLeadTeacher}</label>
</div>
      <div className="form-check">
  <input className="form-check-input position-static" type="radio" name="role" value={role} onChange={ e => setRole("Teaching Assistant")} required/>
  <label className="form-check-label" for="inlineRadio1">Teaching Assistant   {teachingAssistant}</label>
</div>
     
</div>
 <div className="col mx-4">
    <div className="form-check">
  <input className="form-check-input position-static" type="radio" name="role" value={role} onChange={ e => setRole("Coordinator")}   required/>
  <label className="form-check-label" for="inlineRadio1">Coordinator  {coordinator}</label>
</div>
   <div className="form-check ">
  <input className="form-check-input position-static" type="radio" name="role"  value={role} onChange={ e => setRole("Zoom Master (Host)")} required/>
   <label className="form-check-label" for="inlineRadio1">Zoom Master (Host)  {zoomMaster}</label>
</div>
      <div className="form-check">
  <input className="form-check-input position-static" type="radio" name="role" value={role} onChange={ e => setRole("Personal Development Rep")} required/>
  <label className="form-check-label" for="inlineRadio1">Personal Development Rep   {personalDevelopment}</label>
</div>    
</div>
</div>
<div className="form-inline mt-2">
                <div className="form-group mx-2 mb-2 ">
    <label for="inputPassword2" className="sr-only" >Full Name</label>
    <input type="text" className="form-control" placeholder="Full Name" name="fullName" value={fullName} onChange={ e => setFullName(e.target.value)} required/>
  </div>
  <div className="form-group mx-2 mb-2">
    <label for="staticEmail2" className="sr-only">Email</label>
    <input type="email" className="form-control" placeholder="Email" name="email"  value={email} onChange={ e => setEmail(e.target.value)} required/>
    <input type="hidden" name="lesson_id" value={lessonId}/>
  </div>
  <SubmitButton/>
  </div>
</form>
        



 <div class="modal" tabindex="-1" role="dialog" id="signUpModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Sign Up</h5>
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
              You have successfully signed up for class. Thanks
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


    </div>




    )
}



export default AvailableRoles;