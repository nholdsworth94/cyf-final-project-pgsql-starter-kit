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
      <td><Link to={{ pathname: "/LessonPage", state:{id:el.id,
lesson:el.week_number,
date:currentDate,
time:`${el.starttime}-${el.endtime}`,
module:el.module,
link:el.syllabus_link,
cohort: el.cohort }  }}><button type="button" className="nav_Home rolesBTN"  >View Vacancies</button></Link></td> 
    </tr>
        

    );
}

 



export default LessonsTable;