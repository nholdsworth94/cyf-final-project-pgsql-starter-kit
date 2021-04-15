import React from "react";

const SignUpTable = () => {
  return (
    <div>
      <h2 className="text-center">Lesson Sign Up</h2>
      <table className="container table table-striped table-hover table-condensed">
                 <thead>
    <tr>
      <th scope="col">Role</th>
      <th scope="col">Capacity</th>
      <th scope="col">Vacancies</th>
      <th scope="col">Volunteers</th>
      <th scope="col"></th>
    </tr>
  </thead>
        <tbody>
      
          <tr className="col-md-6 table-danger border border-danger rounded bg-danger">
            <td >Lead Teacher</td>
            <td>1</td>
            <td>0</td>
            <td>Natalie Dean</td>
            <td><button type="button" class="btn btn-success">volunteer!</button></td> 
          </tr>
           <tr className="col-md-6 table-primary border border-primary rounded bg-primary">
            <td >Assistant Lead Teacher</td>
            <td>1</td>
            <td>1</td>
            <td>Ahmed Mire</td>
            <td><button type="button" class="btn btn-success">volunteer!</button></td> 
          </tr>
           <tr className="col-md-6 table-success border border-success rounded bg-success">
            <td >PD</td>
            <td>1</td>
            <td>1</td>
            <td>Neill Bogie</td>
            <td><button type="button" class="btn btn-success">volunteer!</button></td> 
          </tr>
           <tr className="col-md-6 table-success border border-success rounded bg-success">
            <td >Zoom Admin</td>
            <td>0</td>
            <td>0</td>
            <td>Yevhen Sydorov</td>
            <td><button type="button" class="btn btn-success">volunteer!</button></td> 
          </tr>
           <tr className="col-md-6 table-warning border border-warning rounded bg-warning">
            <td >Coordinator</td>
            <td>8</td>
            <td>6</td>
            <td>Ahmad Ali</td>
            <td><button type="button" class="btn btn-success">volunteer!</button></td> 
          </tr>
            <tr className="col-md-6 table-info border border-info rounded bg-info">
            <td >Teaching Assistant</td>
            <td>1</td>
            <td>1</td>
            <td>Bob Bryer</td>
            <td><button type="button" class="btn btn-success">volunteer!</button></td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SignUpTable;