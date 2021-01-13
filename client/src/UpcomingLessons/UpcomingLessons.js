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
 const [school, setSchool] = useState([]);
	useEffect(() => {
    fetchData();
    fetchSchool();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('https://cyf-finalproject-class-planner.herokuapp.com/api/lesson');
			const data = await response.json();
			console.log(data.data);
			setLessons(data.data);
		} catch (error) {
			console.log(error.message);
		}
  };
  const fetchSchool = async () => {
		try {
			const response = await fetch('https://cyf-finalproject-class-planner.herokuapp.com/api/school');
			const data = await response.json();
			console.log(data.data);
			setSchool(data.data);
		} catch (error) {
			console.log(error.message);
		}
	};

    return(
      <div>
<Header />
      <div class="dropdown text-right my-1 mx-4">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Cohort
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {school.map(el =>
    <a class="dropdown-item" href="#">{el.name}</a>
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
 <div class="clear"></div>
<Footer />
      </div>
      
    
    );
}


export default UpcomingLessons;