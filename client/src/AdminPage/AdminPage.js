import React from "react";
import fakeLessons from "../fakeLessons.json"
import VolunteersTable from "./VolunteersTable"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Admin_Page from"../Images/Admin_Page.jpg";
import { Link } from "react-router-dom";

 const lessons = fakeLessons.lessons;
const AdminPage =({RolesButtonHandler})=>{
 

    return(
      <div>
<Header />

    <img className="imgAdmin d-inline" src={Admin_Page}></img>

      <div class="text-right createClass d-inline">
      <Link to="/CreateClassPage">
       <button class="btn btn-danger">
         Create Class
       </button>
     </Link>
  </div>

      <div className="ULPage">
        <h3 className="text-left mt-0"><strong>Signed Volunteers</strong></h3>
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
  <tbody>
    {lessons.map(el =>
  
<VolunteersTable el={el} RolesButtonHandler={RolesButtonHandler}/>
  
  
     
  )}
  </tbody>
  </table>
</div>  
<Footer />
      </div>
      
    
    );
}


export default AdminPage;