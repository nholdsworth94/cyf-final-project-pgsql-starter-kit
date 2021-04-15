import React from "react";

// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Header/Header";
import LessonPage_Info from "./LessonPage_Info";
import SigningUpTable from "./SigningUpTable";
import Footer from "../Footer/Footer";



const LessonPage = ({lessonId}) => {
    return (
        <div className="App">
            <Header />
            <LessonPage_Info />
            <SigningUpTable />
            <Footer />
        </div>
    );
}
  
export default LessonPage; 