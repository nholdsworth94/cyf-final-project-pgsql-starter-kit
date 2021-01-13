import React from "react"
import moment from 'moment';
import { Link } from "react-router-dom";


const LessonsTable = ({el}) =>{
    
 const currentDate = moment(el.date).format("DD-MM-YY");


   
   

   return(
   
<tr>
      <td>{currentDate}</td>
      <td>{el.name}</td>
      <td>{el.week_number}</td>
      <td>{el.starttime+"-"+el.endtime}</td>
      <td><Link to={{ state:{id:el.id,
lesson:el.week_number,
date:currentDate,
time:`${el.starttime}-${el.endtime}`,
module:el.name,
link:el.syllabus_link }  }}><button type="button" class="nav_Home rolesBTN"  >View Details</button></Link></td>
<td><Link to={{ pathname: "AdminPage", state:{id:el.id,
lesson:el.week_number,
date:currentDate,
time:`${el.starttime}-${el.endtime}`,
module:el.name,
link:el.syllabus_link }  }}><form method="DELETE" action={`http://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers/${el.id}`} ><button type="submit" value="submit" class="nav_Home rolesBTN"  >Delete Class</button></form></Link></td> 
    </tr>
        

    );
}

 



export default LessonsTable;