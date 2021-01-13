import React from "react";
import AdminVolunteersTable from "./AdminVolunteersTable";

// import bootstrap css file here
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../Header/Header";
import LessonPage_Info from "../LessonPage/LessonPage_Info";
import Footer from "../Footer/Footer";

const AdminLessonPage = ({ lessonId }) => {
  return (
    <div className="App">
      <Header />
      <LessonPage_Info />
       <AdminVolunteersTable /> 
      <Footer />
    </div>
  );
};

export default AdminLessonPage;
