import React from "react"
import moment from 'moment';
import { Link } from "react-router-dom";
import {  useLocation } from "react-router-dom";


const LessonsTable = ({el}) =>{
    
 const currentDate = moment(el.date).format("DD-MM-YY");
  var deleteId;

   
   

   return(
   
<tr>
      <td>{currentDate}</td>
      <td>{el.module}</td>
      <td>{el.week_number}</td>
      <td>{el.starttime+"-"+el.endtime}</td>
      <td><Link to={{ pathname: "/AdminLessonPage", state:{id:el.id,
lesson:el.week_number,
date:currentDate,
time:`${el.starttime}-${el.endtime}`,
module:el.name,
link:el.syllabus_link }  }}><button type="button" className="nav_Home rolesBTN "  >View Details</button></Link></td>
<td><div className="d-none ">{deleteId=el.id}</div><form method="GET" action={`https://cyf-finalproject-class-planner.herokuapp.com/api/lesson/delete/${deleteId}`}>
  
  <button type="submit" value="submit" className="nav_Home AdminRolesBTN mx-1"  >Delete Class</button></form></td> 
    </tr>
        

    );
}

 



export default LessonsTable;