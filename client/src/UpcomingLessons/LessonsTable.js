import React from "react"
import moment from 'moment';
import { Link } from "react-router-dom";


const LessonsTable = ({el}) =>{
    
 const currentDate = moment(el.date).format("DD-MM-YY");
   

   return(
   
<tr>
      <td>{el.id}</td>
      <td>{el.name}</td>
      <td>{el.week_number}</td>
      <td>{currentDate}</td>
      <td>{el.starttime+"-"+el.endtime}</td>
      <td><Link to={{ pathname: "/LessonPage", state:{id:el.id,
lesson:el.week_number,
date:currentDate,
time:`${el.starttime}-${el.endtime}`,
module:el.name,
link:el.syllabus_link }  }}><button type="button" class="nav_Home rolesBTN"  >View Vacancies</button></Link></td> 
    </tr>
        

    );
}

 



export default LessonsTable;