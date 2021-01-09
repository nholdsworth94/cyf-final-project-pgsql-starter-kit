import React from "react";
import fakeLessons from "../fakeLessons.json"
import LessonsTable from "./LessonsTable"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

 const lessons = fakeLessons.lessons;
const UpcomingLessons =({RolesButtonHandler})=>{
 

    return(
      <div>
<Header />
      <div class="dropdown text-right my-1 mx-4">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Cohort
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Westmidlands Class 1</a>
    <a class="dropdown-item" href="#">Westmidlands Class 2</a>
    <a class="dropdown-item" href="#">Westmidlands Class 3</a>
  </div>
</div>
      <div className="ULPage">
        <h3 className="mt-0"><strong>Upcoming Classes</strong></h3>
  <table>
    <thead>
    <tr>
      <th>No.</th>
      <th>Module</th>
      <th>Lesson</th>
      <th>Date</th>
      <th>Time</th>
      <th></th>
    </tr>
  </thead>
  <tbody className="firstRow">
    {lessons.map(el =>
  
<LessonsTable el={el} RolesButtonHandler={RolesButtonHandler}/>
  
  
     
  )}
  </tbody>
  </table>
</div>  
<Footer />
      </div>
      
    
    );
}


export default UpcomingLessons;