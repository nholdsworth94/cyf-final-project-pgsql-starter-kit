import React from "react"
import moment from 'moment';
import { Link } from "react-router-dom";


const LessonsTable = ({el}) =>{
    
 const currentDate = moment(el.date).format("DD-MM-YY");


   
   

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
link:el.syllabus_link }  }}><button type="button" class="nav_Home rolesBTN"  >View Details</button></Link></td>
<td><form method="DELETE" action={`https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers/${el.id}`}><button type="submit" value="submit" class="nav_Home rolesBTN"  >Delete Class</button></form></td> 
    </tr>
        

    );
}

 



export default LessonsTable;