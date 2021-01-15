import React from "react";
import { useState, useEffect } from "react";

const AvailableRoles = ({
  lessonId,
  leadTeacher,
  assistantLeadTeacher,
  teachingAssistant,
  coordinator,
  zoomMaster,
  personalDevelopment,
}) => {
  //state variables created
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
 //fetching the api
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers/${lessonId}`
      );
      const data = await response.json();
      //	console.log(data.data);
      setLessons(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //logic to hide the roles if all the vacancies are filled.
  let b = [];
  let a = lessons.map((el) => {
    b.push(el.role_id);
  });
 
  let n;
  let o;
  let p;
  let q;
  let r;
  let s;
  let leadLength = [];
  let assistLeadLength = [];
  let teachLength = [];
  let coLength = [];
  let zoLength = [];
  let perLength = [];
  for (let i = 0; i < b.length; i++) {
    let s1 = b[i].toString();
    let s2 = "Lead Teacher";
    let s3 = "Assistant Lead Teacher";
    let s4 = "Teaching Assistant";
    let s5 = "Coordinator";
    let s6 = "Zoom Master (Host)";
    let s7 = "Personal Development Rep";
    n = s1.trim().localeCompare(s2.trim());
    o = s1.trim().localeCompare(s3.trim());
    p = s1.trim().localeCompare(s4.trim());
    q = s1.trim().localeCompare(s5.trim());
    r = s1.trim().localeCompare(s6.trim());
    s = s1.trim().localeCompare(s7.trim());
    if (n === 0) {
      leadLength.push(n);
    }
    if (o === 0) {
      assistLeadLength.push(o);
    }
    if (p === 0) {
      teachLength.push(p);
    }
    if (q === 0) {
      coLength.push(q);
    }
    if (r === 0) {
      zoLength.push(r);
    }
    if (s === 0) {
      perLength.push(s);
    }
  }
 //email validation function 
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
   //state variables created
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  //submit button validation and logic
  function SubmitButton() {
    if (fullName && validateEmail(email) && role) {
      return (
        <button
          type="submit"
          data-toggle="modal"
          data-target="#signUpModal"
          value="submit"
          className="btn btn-danger mx-2 mb-2"
        >
          Class Sign Up
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          data-toggle="modal"
          data-target="#signUpModal"
          value="submit"
          className="btn btn-danger mx-2 mb-2"
          disabled
        >
          Class Sign Up
        </button>
      );
    }
  }

  return (
    <div className="row-10">
      <h4 className="container col-8 my-2">
        <strong>Available Roles:</strong>
      </h4>
      <label className="vl">Vacancies</label>{" "}
      <label className="vr">Vacancies</label>
      <iframe name="hiddenFrame" className="hide"></iframe>
      <form
        className=" container col-8"
        target="hiddenFrame"
        method="POST"
        action="https://cyf-finalproject-class-planner.herokuapp.com/api/signed_volunteers"
      >
        <div className="row">
          <div className="col mx-4">
            <div className="form-check ">
              <input
                className="form-check-input position-static"
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setRole("Lead Teacher")}
                disabled={leadTeacher === 0}
                disabled={leadLength.length >= leadTeacher}
                required
              />
              <label className="form-check-label">Lead Teacher </label>
              <label className="lt"> {leadTeacher}</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input position-static"
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setRole("Assistant Lead Teacher")}
                disabled={assistantLeadTeacher === 0}
                disabled={assistLeadLength.length >= assistantLeadTeacher}
                required
              />
              <label className="form-check-label">
                Assistant Lead Teacher{" "}
              </label>
              <label className="alt">{assistantLeadTeacher}</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input position-static"
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setRole("Teaching Assistant")}
                disabled={teachingAssistant === 0}
                disabled={teachLength.length >= teachingAssistant}
                required
              />
              <label className="form-check-label">Teaching Assistant </label>
              <label className="ta">{teachingAssistant}</label>
            </div>
          </div>
          <div className="col mx-4">
            <div className="form-check">
              <input
                className="form-check-input position-static"
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setRole("Coordinator")}
                disabled={coordinator === 0}
                disabled={coLength.length >= coordinator}
                required
              />
              <label className="form-check-label">Coordinator </label>
              <label className="c"> {coordinator}</label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input position-static"
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setRole("Zoom Master (Host)")}
                disabled={zoomMaster === 0}
                disabled={zoLength.length >= zoomMaster}
                required
              />
              <label className="form-check-label">Zoom Master (Host) </label>
              <label className="zm">{zoomMaster}</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input position-static"
                type="radio"
                name="role"
                value={role}
                onChange={(e) => setRole("Personal Development Rep")}
                disabled={personalDevelopment === 0}
                disabled={perLength.length >= personalDevelopment}
                required
              />
              <label className="form-check-label">
                Personal Development Rep{" "}
              </label>{" "}
              <label className="pd">{personalDevelopment}</label>
            </div>
          </div>
        </div>
        <div className="form-inline mt-2">
          <div className="form-group mx-2 mb-2 ">
            <label className="sr-only">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mx-2 mb-2">
            <label className="sr-only">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input type="hidden" name="lesson_id" value={lessonId} />
          </div>
          <SubmitButton />
        </div>
      </form>
      <div className="modal" tabIndex="-1" role="dialog" id="signUpModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              You have successfully signed up for class. Thanks
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={() => window.location.reload()}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoles;
