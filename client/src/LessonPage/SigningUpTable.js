import React, { useState } from "react";
import SignUpButton from "./SignUpButton";

const SigningUpTable = () => {

      const [input, setInput] = useState({ email: "", name: "" });
      const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
      };
      const submitHandler = () => {
        //for backend use
      };

  const signUps = [
    {
      Role: "Lead Teacher",
      Capacity: "1",
      Vacancies: "0",
      Volunteers: "Natalie Dean",
    },
    {
      Role: "Assistant Lead Teacher",
      Capacity: "1",
      Vacancies: "1",
      Volunteers: "Ahmed Mire",
    },
    { Role: "PD", Capacity: "1", Vacancies: "1", Volunteers: "Neill Bogie" },
    {
      Role: "Zoom Admin",
      Capacity: "0",
      Vacancies: "0",
      Volunteers: "Yevhen Sydorov",
    },
    {
      Role: "Coordinator",
      Capacity: "8",
      Vacancies: "6",
      Volunteers: "Ahmad Ali",
    },
    {
      Role: "Teaching Assistant",
      Capacity: "1",
      Vacancies: "1",
      Volunteers: "Bob Bryer",
    },
  ];
  return (
    <div>
      <h2 className="text-center">Lesson Sign Up</h2>

      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Capacity</th>
            <th>Vacancies</th>
            <th>Volunteers</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="firstRow">
          {signUps.map((el) => (
            <tr>
              <td>{el.Role}</td>
              <td>{el.Capacity}</td>
              <td>{el.Vacancies}</td>
              <td>{el.Volunteers}</td>
              <td>
               <SignUpButton isActive={Boolean(Number(el.Vacancies))} />
               
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*      popup modal
       */}
      <div class="modal" tabindex="-1" role="dialog" id="signUpModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Sign Up</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form className="login-form" onSubmit={submitHandler}>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  onChange={inputHandler}
                  value={input.email}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={inputHandler}
                  value={input.name}
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={submitHandler}
              >
                Submit
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigningUpTable;
