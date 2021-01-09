import React from "react";
import fakeLessons from "../fakeLessons.json"





const SigningUpTable = () => {
  const signUps = [
  {Role:"Lead Teacher",         Capacity:"1", Vacancies:"0",Volunteers:"Natalie Dean"},
  {Role:"Assistant Lead Teacher",Capacity:"1", Vacancies:"1",Volunteers:"Ahmed Mire"},
  {Role:"PD",                   Capacity:"1", Vacancies:"1",Volunteers:"Neill Bogie"},
  {Role:"Zoom Admin",           Capacity:"0", Vacancies:"0",Volunteers:"Yevhen Sydorov"},
  {Role:"Coordinator",           Capacity:"8", Vacancies:"6",Volunteers:"Ahmad Ali"},
  {Role:"Teaching Assistant",    Capacity:"1", Vacancies:"1",Volunteers:"Bob Bryer"}
 

] 
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
    {signUps.map(el =>
    <tr>
      <td>{el.Role}</td>
      <td>{el.Capacity}</td>
      <td>{el.Vacancies}</td>
      <td>{el.Volunteers}</td>
      <td><button type="button" class="nav_Home rolesBTN"  >volunteer!</button></td> 
    </tr>
    )}
  </tbody>
  </table>
    </div>
  );
};

export default SigningUpTable;