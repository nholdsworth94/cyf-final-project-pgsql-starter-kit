import React from "react";
import fakeLessons from "../fakeLessons.json"
import VolunteersTable from "./VolunteersTable"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Admin_Page from"../Images/Admin_Page.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
 //const lessons = fakeLessons.lessons;
const AdminPage =({RolesButtonHandler})=>{
  const [lessons, setLessons] = useState([]);
 
	useEffect(() => {
    fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers');
			const data = await response.json();
			console.log(data.data);
			setLessons(data.data);
		} catch (error) {
			console.log(error.message);
		}
  };

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
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
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
 <div class="clear"></div> 
<Footer />
      </div>
      
    
    );
}


export default AdminPage;