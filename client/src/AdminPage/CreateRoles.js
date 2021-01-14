import React from "react";
import { useState } from 'react';

const CreateRoles = () =>{
  const [cohort, setCohort] = useState('');
  const [module, setModule] = useState('');
  const [lesson, setLesson] = useState('');
  const [date, setDate] = useState('');
  const [material, setMaterial] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [leadTeacherQuantity, setLeadTeacherQuantity] = useState('');
  const [assistantLeadTeacherQuantity, setAssistantLeadTeacherQuantity] = useState('');
  const [teachingAssistantQuantity, setTeachingAssistantQuantity] = useState('');
  const [coordinatorQuantity, setCoordinatorQuantity] = useState('');
  const [zoomMasterQuantity, setZoomMasterQuantity] = useState('');
  const [personalDevelopmentQuantity, setPersonalDevelopmentQuantity] = useState('');



  function SubmitButton(){
    if (cohort && module && lesson && date && material  && leadTeacherQuantity
      && assistantLeadTeacherQuantity && teachingAssistantQuantity && coordinatorQuantity && zoomMasterQuantity
      && personalDevelopmentQuantity ){
      return <button type="submit"  data-toggle="modal" data-target="#signUpModal" value="Submit" className="btn btn-danger col-8 mt-2 mb-5">Create Class</button>
    } else {
      return  <button type="submit"  data-toggle="modal" data-target="#signUpModal" value="Submit" className="btn btn-danger col-8 mt-2 mb-5" disabled>Create Class</button>
    };
  };
   

    return (
    <div className="row-10 ">
        <h5 className="container col-10 text-left"><strong>Create a new class</strong></h5>
        <iframe name="hiddenFrame" className="hide"></iframe>
            <form className=" container col-10 mt-1" target="hiddenFrame" method="POST" action="https://cyf-finalproject-class-planner.herokuapp.com/api/CreateClass">
              <div className="form-inline ">
                <div className="form-group mx-1 mb-1">
    <label className="m-1 "> Cohort</label>
<input list="cohorts"  className="form-control col-11" name="cohort" placeholder="Cohort" value={cohort} onChange={ e => setCohort(e.target.value)} required/>
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
    <div className="form-group mx-1 mb-1">
  <label className="m-1 "> Module</label>
<input list="modules"  className="form-control col-11" name="module" value={module} onChange={ e => setModule(e.target.value)} placeholder="Module" required/>
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
      <div className="form-group mx-1 mb-1">
    <label className="m-1 "> Lesson</label>
<input list="lessons"  className="form-control col-11" value={lesson} onChange={ e => setLesson(e.target.value)} name="lesson" placeholder="Lesson" required/>
<datalist id="lessons">
  <option value="Week 1"/>
  <option value="Week 2"/>
  <option value="Week 3"/>
  <option value="Week 4"/>
</datalist>
  </div>
  </div>
  <div className="form-inline ">
             
  <div className="form-group ml-2 ">
    <label for="staticEmail2" className="m-1">Date</label>
    <input type="date" className="form-control col-12" name="date" value={date} onChange={ e => setDate(e.target.value)} required/>
  </div>
  <div className="form-group ml-5  ">
    <label for="staticEmail2" className="m-1">Material</label>
    <input type="text" className="form-control col-11" name="material" value={material} onChange={ e => setMaterial(e.target.value)} placeholder="Material" required/>
  </div>
  <div className="form-group  col-2">
    <label for="staticEmail2" className="m-1">Start Time</label>
    <input type="time" className="form-control col-12" name="startTime"  placeholder="Start Time" defaultValue="11:00" required/>
  
  </div>
  <div className="form-group   col-2">
    <label for="staticEmail2" className="m-1">End Time</label>
    <input type="time" className="form-control col-12" name="endTime"  placeholder="End Time" defaultValue="17:00" required/>
  </div>
  </div>
  <h5 className=" text-left "><strong>Roles:</strong></h5>
<div className="row ">
  
      <div className="col-5 ">
                <div className="form-check ">
   <label className="form-check-label col-7" for="inlineRadio1">Lead Teacher</label>
    
  <input className=" col-4" type="number"  name="leadTeacherQuantity" value={leadTeacherQuantity} onChange={ e => setLeadTeacherQuantity(e.target.value)} min="0" max="10" placeholder="quantity" required></input>
</div>
      <div className="form-check">
  <label className="form-check-label col-7" for="inlineRadio1">Assistant Lead Teacher</label>
  <input className=" col-4" type="number"  name="assistantLeadTeacherQuantity" value={assistantLeadTeacherQuantity} onChange={ e => setAssistantLeadTeacherQuantity(e.target.value)} min="0" max="10" placeholder="quantity" required></input>
</div>
      <div className="form-check">
  <label className="form-check-label col-7" for="inlineRadio1">Teaching Assistant</label>
  <input className=" col-4" type="number"  name="teachingAssistantQuantity" value={teachingAssistantQuantity} onChange={ e => setTeachingAssistantQuantity(e.target.value)} min="0" max="10" placeholder="quantity" required></input>
</div>
     
</div>

 <div className="col-5">
   <div className="form-check">
  <label className="form-check-label col-8" for="inlineRadio1">Coordinator</label>
  <input className=" col-4" type="number"  name="coordinatorQuantity" value={coordinatorQuantity} onChange={ e => setCoordinatorQuantity(e.target.value)} min="0" max="10" placeholder="quantity" required></input>
</div>
 <div className="form-check">
  <label className="form-check-label col-8" for="inlineRadio1">Zoom Master (Host)</label>
  <input className=" col-4" type="number"  name="zoomMasterQuantity" value={zoomMasterQuantity} onChange={ e => setZoomMasterQuantity(e.target.value)} min="0" max="10" placeholder="quantity" required></input>
</div>
      <div className="form-check ">
  <label className="form-check-label col-8" for="inlineRadio1">Personal Development Rep</label>
  <input className=" col-4" type="number"  name="personalDevelopmentQuantity" value={personalDevelopmentQuantity} onChange={ e => setPersonalDevelopmentQuantity(e.target.value)} min="0" max="10" placeholder="quantity" required></input>
</div>
      
      
</div>
</div>
<div className="container col-5 mt-2 m-auto">
  <SubmitButton/>
  </div>
</form>



<div class="modal" tabindex="-1" role="dialog" id="signUpModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Create Class</h5>
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
              You have successfully created the class. Thanks
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
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

export default CreateRoles;