import React from "react";
import fakeLessons from "../fakeLessons.json"
import VolunteersTable from "./VolunteersTable"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Admin_Page from"../Images/Admin_Page.jpg";
import AvailableRoles from "../LessonPage/AvailableRoles";
import CreateRoles from "./CreateRoles";

 const lessons = fakeLessons.lessons;
const CreateClassPage =({RolesButtonHandler})=>{
 

    return(
      <div>
    <Header />
    <img className="imgAdmin d-inline" src={Admin_Page}></img>
    <CreateRoles/>
    <Footer />
      </div>
      
    
    );
}


export default CreateClassPage;