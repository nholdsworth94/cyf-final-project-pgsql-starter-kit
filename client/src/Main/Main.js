import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminPage from "../AdminPage/AdminPage";
import LandingPage from "../LandingPage/LandingPage";
import CreateClassPage from "../AdminPage/CreateClassPage";
import LogInPage from "../LogInPage/LogInPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import UpcomingLessons from "../UpcomingLessons/UpcomingLessons";
import LessonPage from "../LessonPage/LessonPage";
import AdminLessonPage from "../AdminPage/AdminLessonPage";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/AdminPage" component={AdminPage}></Route>
      <Route exact path="/CreateClassPage" component={CreateClassPage}></Route>
      <Route exact path="/LogInPage" component={LogInPage}></Route>
      <Route exact path="/RegisterPage" component={RegisterPage}></Route>
      <Route exact path="/UpcomingLessons" component={UpcomingLessons}></Route>
      <Route exact path="/LessonPage" component={LessonPage}></Route>
      <Route exact path="/AdminLessonPage" component={AdminLessonPage}></Route>
    </Switch>
  );
};

export default Main;
