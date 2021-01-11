import React from "react";

const CreateRoles = () =>{
   

    return (
    <div className="row-10 ">
        <h5 className="container col-10 text-left"><strong>Create a new class</strong></h5>
            <form class=" container col-10 mt-1" method="POST" action="https://cyf-finalproject-class-planner.herokuapp.com/api/CreateClass">
              <div className="form-inline ">
                <div class="form-group mx-1 mb-1">
    <label class="m-1 "> Cohort</label>
<input list="cohorts"  class="form-control col-11" name="cohort" placeholder="Cohort" />
<datalist id="cohorts">
  <option value="West Midlands Class 1"/>
  <option value="West Midlands Class 2"/>
  <option value="West Midlands Class 3"/>
  <option value="West Midlands Class 4"/>
  <option value="West Midlands Class 5"/>
  <option value="West Midlands Class 6"/>
</datalist>
  </div>
  <div>
    <div class="form-group mx-1 mb-1">
  <label class="m-1 "> Module</label>
<input list="modules"  class="form-control col-11" name="module" placeholder="Module" />
<datalist id="modules">
  <option value="Intro To Coding"/>
  <option value="Fundamentals"/>
  <option value="Induction"/>
  <option value="Git and Github"/>
  <option value="HTML-CSS"/>
  <option value="JavaScript Core 1"/>
  <option value="JavaScript Core 2"/>
  <option value="JavaScript Core 3"/>
  <option value="React"/>
  <option value="Node"/>
  <option value="SQL"/>
  <option value="MongoDB"/>
  <option value="Final Projects"/>
</datalist>
  </div>
  </div>
      <div class="form-group mx-1 mb-1">
    <label class="m-1 "> Lesson</label>
<input list="lessons"  class="form-control col-11" name="lesson" placeholder="Lesson" />
<datalist id="lessons">
  <option value="Week 1"/>
  <option value="Week 2"/>
  <option value="Week 3"/>
  <option value="Week 4"/>
</datalist>
  </div>
  </div>
  <div className="form-inline ">
             
  <div class="form-group ml-2 ">
    <label for="staticEmail2" class="m-1">Date</label>
    <input type="date" class="form-control col-12" name="date"/>
  </div>
  <div class="form-group ml-5  ">
    <label for="staticEmail2" class="m-1">Material</label>
    <input type="text" class="form-control col-11" name="material" placeholder="Material"/>
  </div>
  <div class="form-group  col-2">
    <label for="staticEmail2" class="m-1">Start Time</label>
    <input type="time" class="form-control col-12" name="startTime" placeholder="Start Time" defaultValue="11:00"/>
  
  </div>
  <div class="form-group   col-2">
    <label for="staticEmail2" class="m-1">End Time</label>
    <input type="time" class="form-control col-12" name="endTime" placeholder="End Time" defaultValue="17:00"/>
  </div>
  </div>
  <h5 className=" text-left "><strong>Roles:</strong></h5>
<div className="row ">
  
      <div className="col-5 ">
                <div class="form-check ">
   <label class="form-check-label col-7" for="inlineRadio1">Lead Teacher</label>
    
  <input class=" col-4" type="number" id="quantity" name="leadTeacherQuantity" min="0" max="10" placeholder="quantity"></input>
</div>
      <div class="form-check">
  <label class="form-check-label col-7" for="inlineRadio1">Assistant Lead Teacher</label>
  <input class=" col-4" type="number" id="quantity" name="assistantLeadTeacherQuantity" min="0" max="10" placeholder="quantity"></input>
</div>
      <div class="form-check">
  <label class="form-check-label col-7" for="inlineRadio1">Teaching Assistant</label>
  <input class=" col-4" type="number" id="quantity" name="teachingAssistantQuantity" min="0" max="10" placeholder="quantity"></input>
</div>
     
</div>

 <div className="col-5">
   <div class="form-check">
  <label class="form-check-label col-8" for="inlineRadio1">Coordinator</label>
  <input class=" col-4" type="number" id="quantity" name="coordinatorQuantity" min="0" max="10" placeholder="quantity"></input>
</div>
 <div class="form-check">
  <label class="form-check-label col-8" for="inlineRadio1">Zoom Master (Host)</label>
  <input class=" col-4" type="number" id="quantity" name="zoomMasterQuantity" min="0" max="10" placeholder="quantity"></input>
</div>
      <div class="form-check ">
  <label class="form-check-label col-8" for="inlineRadio1">Personal Development Rep</label>
  <input class=" col-4" type="number" id="quantity" name="personalDevelopmentQuantity" min="0" max="10" placeholder="quantity"></input>
</div>
      
      
</div>
</div>
<div className="container col-5 mt-2 m-auto">
  <button type="submit" value="Submit" class="btn btn-danger col-8 mt-2 ">Create Class</button>
  </div>
</form>


        </div>
    )
}

export default CreateRoles;