import React from "react";

const LessonPage_Info = ({lessonId,lesson,module,time,date,link}) => {


  return (
    <div className="">
      <h3 className="text-center"><strong>Westmidlands Class 1 </strong></h3>
      <ul className="list-unstyled bg-light row my-2 mx-3">
        <div className="col mx-2 my-2">
        <li><strong>Module: </strong><span>{module}</span></li>
        <li><strong>Date: </strong><span>{date}</span></li>
        <li><strong>Time: </strong><span>{time}</span></li>
        </div>
        <div className="col mx-2 my-2">
        <li><strong>Lesson: </strong><span>{lesson}</span></li>
        <li><strong>Material: </strong><span><a href={link} target="_blank">{link}</a></span></li>
     </div>
      </ul>
    </div>
  );
};

export default LessonPage_Info;