import React from "react"
import moment from 'moment';
import { useEffect, useState } from "react";


const VolunteersTable = ({lessonId}) =>{
    
 const currentDate = moment().format("DD MM YY");

   const [lessons, setLessons] = useState([]);
 
	useEffect(() => {
    fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(`https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers/${lessonId}`);
			const data = await response.json();
			//console.log(data.data);
			setLessons(data.data);
		} catch (error) {
			console.log(error.message);
		}
  };

   

   return(
   


     <div className="ULPage">
        <h3 className="mt-0"><strong>Signed Volunteers</strong></h3>
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th></th>
    </tr>
  </thead>
  <tbody >
    {lessons.map(el =>
<tr>
      <td>{el.full_name}</td>
      <td>{el.email}</td>
      <td>{el.role_id}</td>
      <td><a target="_blank"  href={`mailto:${el.email}`}>    <i className="fa fa-envelope envelopeSize" > Send Email</i></a></td> 
    </tr>
  
  
     
  )}
  </tbody>
  </table>
</div>  

        

    );
}

 



export default VolunteersTable;