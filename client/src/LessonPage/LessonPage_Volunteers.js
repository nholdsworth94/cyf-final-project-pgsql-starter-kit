import React from "react";

const LessonPage_Volunteers = () => {
  return (
    <div>
      <h4 className="text-center"><strong>Volunteers at this Lesson:</strong></h4>
      <table className="  container table-lg table-striped table-hover table-condensed  col-10">
        <tbody className=" h-50 container  row d-flex justify-content-center overflow-auto">
          <tr className="  row col-md-6 table-danger border border-danger rounded bg-danger">
            <td className=" col-md-6">Claire Bickley</td>
            <td className=" col-md-6">Regional Manager</td>
          </tr>
          <tr className=" row col-md-6 table-primary border border-primary rounded bg-primary">
            <td className="col-md-6">Emile Pafford-Wray</td>
            <td className="col-md-6">Lead Teacher</td>
          </tr>
          <tr className="row col-md-6 table-success border border-success rounded bg-success">
            <td className="col-md-6">Nadir</td>
            <td className="col-md-6">Teaching Assistant</td>
          </tr>
          <tr className="row col-md-6 table-success border border-success rounded bg-success">
            <td className="col-md-6">Nick Holdsworth</td>
            <td className="col-md-6">Teaching Assistant</td>
          </tr>
          <tr className="row col-md-6 table-success border border-success rounded bg-success">
            <td className="col-md-6">Wahab Rahman</td>
            <td className="col-md-6">Teaching Assistant</td>
          </tr>
          <tr className="row col-md-6 table-warning border border-warning rounded bg-warning">
            <td className="col-md-6">Edgar Endiulis</td>
            <td className="col-md-6">Personal Development</td>
          </tr>
          <tr className="row col-md-6 table-info border border-info rounded bg-info">
            <td className="col-md-6">Shukri</td>
            <td className="col-md-6">Zoom Admin</td>
          </tr>
          <tr className="row col-md-6 table-secondary border border-secondary rounded bg-secondary">
            <td className="col-md-6">Atanas Kozarev</td>
            <td className="col-md-6">Host</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LessonPage_Volunteers;