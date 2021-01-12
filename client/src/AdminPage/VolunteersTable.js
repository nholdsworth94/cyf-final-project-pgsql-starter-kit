import React from "react"
import moment from 'moment';


const VolunteersTable = ({el,RolesButtonHandler}) =>{
    
 const currentDate = moment().format("DD MM YY");
   

   return(
   
<tr>
      <td>{el.id}</td>
      <td>{el.full_name}</td>
      <td>{el.email}</td>
      <td>{el.role_id}</td>
      <td><button type="button" class="nav_Home rolesBTN"  onClick={()=>RolesButtonHandler(el.id)}>View Details</button></td> 
    </tr>
        

    );
}

 



export default VolunteersTable;