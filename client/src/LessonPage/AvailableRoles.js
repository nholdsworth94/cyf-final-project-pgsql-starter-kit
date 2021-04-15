import React from "react";

const AvailableRoles = () =>{
    return (
    <div className="row-10">
        <h4 className="container col-8 my-2"><strong>Available Roles:</strong></h4>
            <form class=" container col-8">
<div className="row">
      <div className="col mx-4">
                <div class="form-check ">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
   <label class="form-check-label" for="inlineRadio1">Lead Teacher</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Assistant Teacher</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Coordinator</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Zoom Admin</label>
</div>
</div>
 <div className="col mx-4">
   <div class="form-check ">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
   <label class="form-check-label" for="inlineRadio1">Host</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Personal Development</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Zoom Assistant</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">General Assistant</label>
</div>
</div>
</div>
<div className="form-inline mt-2">
                <div class="form-group mx-2 mb-2 ">
    <label for="inputPassword2" class="sr-only">Full Name</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Full Name"/>
  </div>
  <div class="form-group mx-2 mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" class="form-control" id="staticEmail2" placeholder="Email"/>
  </div>
  <button type="submit" class="btn btn-danger mx-2 mb-2">Class Sign Up</button>
  </div>
</form>
        </div>
    )
}

export default AvailableRoles;