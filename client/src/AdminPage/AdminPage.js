import React from "react";
import fakeLessons from "../fakeLessons.json";
import VolunteersTable from "./VolunteersTable";
import UpcomingLessons from "./UpcomingLessons";
import LessonsTable from "./LessonsTable";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Admin_Page from "../Images/Admin_Page.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//const lessons = fakeLessons.lessons;
const AdminPage = ({ RolesButtonHandler }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cyf-finalproject-class-planner.herokuapp.com/api/lesson"
      );
      const data = await response.json();
      //	console.log(data.data);
      setLessons(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header />

      <img className="imgAdmin d-inline" src={Admin_Page}></img>

      <div className="text-right createClass d-inline">
        <Link to="/CreateClassPage">
          <button className="btn btn-danger">Create Class</button>
        </Link>
      </div>

      <div className="ULPage">
        <h3 className="text-left mt-0">
          <strong>All Classes</strong>
        </h3>
        <iframe name="hiddenFrame" className="hide"></iframe>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Module</th>
              <th>Lesson</th>
              <th>Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((el) => (
              <LessonsTable el={el} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="clear"></div>
      <Footer />
    </div>
  );
};

export default AdminPage;
