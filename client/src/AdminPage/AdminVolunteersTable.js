import React from "react";


const AdminVolunteersTable = () => {
  

  const signedUpVolunteers = [
    {
      Role: "Lead Teacher",
      FullName: "Natalie Dean",
      Email: "Dean@example.com",
    },
    {
      Role: "Assistant Lead Teacher",
      FullName: "Ahmed Mire",
      Email: "Mire@example.com ",
    },
    { Role: "PD", FullName: "Neill Bogie", Email: "Bogie@example.com" },
    {
      Role: "Zoom Admin",
      FullName: "Yevhen Sydorov",
      Email: "Sydorov@example.com",
    },
    {
      Role: "Coordinator",
      FullName: "Ahmad Ali",
      Email: "Ali@example.com",
    },
    {
      Role: "Teaching Assistant",
      FullName: "Bob Bryer",
      Email: "Bryer@example.com",
    },
  ];
  return (
    <div>
      <h2 className="text-center">Signed Up Volunteers</h2>

      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Full name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="firstRow">
          {signedUpVolunteers.map((el) => (
            <tr>
              <td>{el.Role}</td>
              <td>{el.FullName}</td>
              <td>{el.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminVolunteersTable;
