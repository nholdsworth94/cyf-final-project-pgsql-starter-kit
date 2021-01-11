import React from "react"
import moment from 'moment';
import { Link } from "react-router-dom";


const LessonsTable = ({el,RolesButtonHandler}) =>{
    
 const currentDate = moment(el.date).format("DD-MM-YY");
   

   return(
   
<tr>
      <td>{el.id}</td>
      <td>{el.name}</td>
      <td>{el.week_number}</td>
      <td>{currentDate}</td>
      <td>{el.starttime+"-"+el.endtime}</td>
      <td><Link to="/LessonPage"><button type="button" class="nav_Home rolesBTN"  onClick={()=>RolesButtonHandler(el.id)}>View Vacancies</button></Link></td> 
    </tr>
        

    );
}

 



export default LessonsTable;