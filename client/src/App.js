import React, { useEffect, useState } from "react";

import "./App.css";

// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import { getMessage } from "./service";
import logo from "./logo.svg";
import UpcomingLessons from "./UpcomingLessons/UpcomingLessons";
import LessonPage from "./LessonPage/LessonPage";
import LandingPage from "./LandingPage/LandingPage";
import LogInPage from "./LogInPage/LogInPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import AdminPage from "./AdminPage/AdminPage";
import VolunteersTable from "./AdminPage/VolunteersTable";
import AvailableRoles from "./LessonPage/AvailableRoles";
import CreateClassPage from "./AdminPage/CreateClassPage";
import CreateRoles from "./AdminPage/CreateRoles";
import Main from "./Main/Main";
export function App() {

	{/*const [viewRolesButtonClicked, setViewRolesButtonClicked] = useState(false);
	const [lessonId, setLessonId] = useState();
  const RolesButtonHandler = (id) =>{
		setViewRolesButtonClicked(true);
		setLessonId(id);
		console.log(lessonId);
    } 

*/}

	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		getMessage().then((message) => setMessage(message));
	}, []);

	return (
		<main role="main">
	<div>
			{/*	 {!viewRolesButtonClicked? (<UpcomingLessons RolesButtonHandler={RolesButtonHandler}/>) : null}
				  {viewRolesButtonClicked? (<LessonPage lessonId={lessonId}/>) : null}
	*/}

	{/*	 {!viewRolesButtonClicked? (<AdminPage RolesButtonHandler={RolesButtonHandler}/>) : null}
				  {viewRolesButtonClicked? (<CreateClassPage lessonId={lessonId}/>) : null}
*/}
       <Main/>
	 
	  
			</div>

   

	

    
	

	
			
		</main>
	);
}

export default App;
