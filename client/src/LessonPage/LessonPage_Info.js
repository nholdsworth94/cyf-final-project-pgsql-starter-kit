import React from "react";

const LessonPage_Info = () => {
  return (
    <div className="">
      <h3 className="text-center"><strong>Westmidlands Class 1</strong></h3>
      <ul className="list-unstyled bg-light row my-2 mx-3">
        <div className="col mx-2 my-2">
        <li><strong>Module: </strong><span>HTML - CSS</span></li>
        <li><strong>Date: </strong><span>12-01-2020</span></li>
        <li><strong>Material: </strong><span><a href="https://syllabus.codeyourfuture.io/html-css/week-1/lesson" target="_blank">https://syllabus.codeyourfuture.io/html-css/week-1/lesson</a></span></li>
        </div>
        <div className="col mx-2 my-2">
        <li><strong>Lead Teacher: </strong><span>Emile Pafford-Wray</span></li>
        <li><strong>Time: </strong><span>11:00 - 17:00</span></li>
        <li><strong>Lesson: </strong><span>Week 1</span></li>
     </div>
      </ul>
    </div>
  );
};

export default LessonPage_Info;