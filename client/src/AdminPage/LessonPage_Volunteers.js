import React from "react";
import { useEffect, useState } from "react";



const LessonPage_Volunteers = ({lessonId}) => {
 console.log(lessonId+"  landed on lesson page volunteer component")
const [lessons, setLessons] = useState([]);

	useEffect(() => {
    fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(`https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers/${lessonId}`);
			const data = await response.json();
		//	console.log(data.data);
			setLessons(data.data);
		} catch (error) {
			console.log(error.message);
		}
  };

  return (
    <div>
      <h4 className="text-center"><strong>Volunteers at this Lesson:</strong></h4>
      <div className="mx-3 bg-light">
              <div className="d-flex p-2 flex-wrap  mx-5 ">
            
      {lessons.map(el => 
            
           <div className="d-inline-flex bg-light text-secondary p-1 justify-content-between col-4 mx-5 "><span className="text-dark"><strong>{el.role_id}</strong></span>{el.full_name}</div>
           )}
      </div>
    </div>
    </div>

  );
};

export default LessonPage_Volunteers;