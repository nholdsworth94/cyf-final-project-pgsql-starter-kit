import React from "react";

const CreateRoles = () =>{



    return (
    <div className="row-10 ">
        <h4 className="container col-8 my-1 mt-1"><strong>Create a new class</strong></h4>
            <form class=" container col-10 mt-1" method="POST" action="http://localhost:3000/api/CreateClass">
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
    <input type="date" class="form-control col-12" name="date"  placeholder="Date"/>
  </div>
  <div class="form-group ml-5  ">
    <label for="staticEmail2" class="m-1">Material</label>
    <input type="text" class="form-control col-11" name="material" placeholder="Material"/>
  </div>
  <div class="form-group  col-2">
    <label for="staticEmail2" class="m-1">Start Time</label>
    <input type="time" class="form-control col-12" name="startTime" placeholder="Start Time"/>
  </div>
  <div class="form-group   col-2">
    <label for="staticEmail2" class="m-1">End Time</label>
    <input type="time" class="form-control col-12" name="endTime" placeholder="End Time"/>
  </div>
  </div>
  <h4 className="container text-left "><strong>Roles:</strong></h4>
  <label class="form-check-label inline mr-5 col-12 text-right " for="quantity"> Needed &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Needed </label>
<div className="row  ml-4">
  
      <div className="col mx-4">
                <div class="form-check ">
  <input class="form-check-input position-static" type="checkbox" name="leadTeacher"  value="Lead Teacher" aria-label="..."/>
   <label class="form-check-label col-7" for="inlineRadio1">Lead Teacher</label>
    
  <input class="ml-3 " type="number" id="quantity" name="leadTeacherQuantity" min="1" max="10"></input>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="assistantLeadTeacher"  value="Assistant Lead Teacher" aria-label="..."/>
  <label class="form-check-label col-7" for="inlineRadio1">Assistant Lead Teacher</label>
  <input class="ml-3 " type="number" id="quantity" name="assistantLeadTeacherQuantity" min="1" max="10"></input>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="teachingAssistant"  value="Teaching Assistant" aria-label="..."/>
  <label class="form-check-label col-7" for="inlineRadio1">Teaching Assistant</label>
  <input class="ml-3 " type="number" id="quantity" name="teachingAssistantQuantity" min="1" max="10"></input>
</div>
     
</div>

 <div className="col">
   <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="coordinator"  value="Coordinator" aria-label="..."/>
  <label class="form-check-label col-9" for="inlineRadio1">Coordinator</label>
  <input class="ml-3 " type="number" id="quantity" name="coordinatorQuantity" min="1" max="10"></input>
</div>
 <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="zoomMaster" value="Zoom Master (Host)" aria-label="..."/>
  <label class="form-check-label col-9" for="inlineRadio1">Zoom Master (Host)</label>
  <input class="ml-3 " type="number" id="quantity" name="zoomMasterQuantity" min="1" max="10"></input>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="personalDevelopment" value="Personal Development Rep" aria-label="..."/>
  <label class="form-check-label col-9" for="inlineRadio1">Personal Development Rep</label>
  <input class="ml-3 " type="number" id="quantity" name="personalDevelopmentQuantity" min="1" max="10"></input>
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