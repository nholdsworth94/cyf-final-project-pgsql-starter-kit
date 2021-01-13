import React from "react";

const AvailableRoles = ({lessonId}) =>{

   console.log(lessonId+" landed on available roles component")
    return (
    <div className="row-10">
        <h4 className="container col-8 my-2"><strong>Available Roles:</strong></h4>
            <form class=" container col-8" method="POST" action="https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers">
<div className="row">
      <div className="col mx-4">
                <div class="form-check ">
  <input class="form-check-input position-static" type="radio" name="role" value="Lead Teacher" required/>
   <label class="form-check-label" for="inlineRadio1">Lead Teacher</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="role" value="Assistant Lead Teacher" required/>
  <label class="form-check-label" for="inlineRadio1">Assistant Lead Teacher</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="role" value="Teaching Assistant" required/>
  <label class="form-check-label" for="inlineRadio1">Teaching Assistant</label>
</div>
     
</div>
 <div className="col mx-4">
    <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="role" value="Coordinator" required/>
  <label class="form-check-label" for="inlineRadio1">Coordinator</label>
</div>
   <div class="form-check ">
  <input class="form-check-input position-static" type="radio" name="role" value="Zoom Master (Host)" required/>
   <label class="form-check-label" for="inlineRadio1">Zoom Master (Host)</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="role" value="Personal Development Rep" required/>
  <label class="form-check-label" for="inlineRadio1">Personal Development Rep</label>
</div>    
</div>
</div>
<div className="form-inline mt-2">
                <div class="form-group mx-2 mb-2 ">
    <label for="inputPassword2" class="sr-only" >Full Name</label>
    <input type="text" class="form-control" placeholder="Full Name" name="fullName" required/>
  </div>
  <div class="form-group mx-2 mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" class="form-control" placeholder="Email" name="email" required/>
    <input type="hidden" name="lesson_id" value={lessonId}/>
  </div>
  <button type="submit" value="submit" class="btn btn-danger mx-2 mb-2">Class Sign Up</button>
  </div>
</form>
        </div>
    )
}

export default AvailableRoles;