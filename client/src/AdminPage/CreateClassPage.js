import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Admin_Page from "../Images/Admin_Page.jpg";
import CreateRoles from "./CreateRoles";


const CreateClassPage = () => {
  return (
    <div>
      <Header />
      <img className="imgAdmin d-inline" src={Admin_Page}></img>
      <CreateRoles />
      <div className="clear"></div>
      <Footer />
    </div>
  );
};

export default CreateClassPage;
