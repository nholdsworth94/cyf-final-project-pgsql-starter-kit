import React from "react";

// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Header/Header";
import LessonPage_Info from "./LessonPage_Info";
import LessonPage_Volunteers from "./LessonPage_Volunteers";
import Footer from "../Footer/Footer";
import AvailableRoles from "./AvailableRoles";
import {  useLocation } from "react-router-dom";
 


const LessonPage = () => {

    let lessonId= useLocation().state.id;
    let lesson= useLocation().state.lesson;
    let module= useLocation().state.module;
    let time= useLocation().state.time;
    let date = useLocation().state.date;
    let link=useLocation().state.link;
    let cohort=useLocation().state.cohort;
    let leadTeacher=useLocation().state.leadTeacher;
    let assistantLeadTeacher=useLocation().state.assistantLeadTeacher;
    let teachingAssistant=useLocation().state.teachingAssistant;
    let coordinator=useLocation().state.coordinator;
    let zoomMaster=useLocation().state.zoomMaster;
    let personalDevelopment=useLocation().state.personalDevelopment;
    
    return (
        <div className="App">
            <Header />
            <LessonPage_Info lessonId={lessonId} lesson={lesson} module={module} time={time} date={date} link={link} cohort={cohort}/>
            <AvailableRoles lessonId={lessonId} leadTeacher={leadTeacher} assistantLeadTeacher={assistantLeadTeacher}
            teachingAssistant={teachingAssistant} coordinator={coordinator} zoomMaster={zoomMaster} personalDevelopment={personalDevelopment}/>
            <LessonPage_Volunteers lessonId={lessonId} />
            <div className="clear"></div>
            <Footer />
        </div>
    );
}
  
export default LessonPage; 