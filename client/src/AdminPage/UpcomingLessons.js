import React from "react";
import fakeLessons from "../fakeLessons.json"
import LessonsTable from "./LessonsTable"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

 //const lessons = fakeLessons.lessons;
const UpcomingLessons =({RolesButtonHandler})=>{
 const [lessons, setLessons] = useState([]);

	useEffect(() => {
    fetchData();
  
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('https://cyf-finalproject-class-planner.herokuapp.com/api/lesson');
			const data = await response.json();
		//	console.log(data.data);
			setLessons(data.data);
		} catch (error) {
			console.log(error.message);
		}
  };
 

    return(
      <div>
<Header />
      <div className="dropdown text-right my-1 mx-4">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Cohort
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {school.map(el =>
    <a className="dropdown-item" href="#">{el.name}</a>
    )}
  </div>
</div>
      <div className="ULPage">
        <h3 className="mt-0"><strong>Upcoming Classes</strong></h3>
  <table>
    <thead>
    <tr>
      <th>Date</th>
      <th>Module</th>
      <th>Lesson</th>
      <th>Time</th>
      <th></th>
    </tr>
  </thead>
  <tbody className="firstRow">
    {lessons.map(el =>
  
<LessonsTable el={el} RolesButtonHandler={RolesButtonHandler}/>
  
  
     
  )}
  </tbody>
  </table>
</div>  
 <div className="clear"></div>
<Footer />
      </div>
      
    
    );
}


export default UpcomingLessons;