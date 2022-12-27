import { React, useState } from 'react';

const ListPersonComponent = () => {
  const [persons, setPersons] = useState([]);

  return (
    <div className="container">
      <h2 className="text-center"> Liste alle Benutzern </h2>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id </th>
          <th>  Title </th>
          <th>  Firstname </th>
          <th>  Lastname </th>
          <th>  Email  </th>
          <th>  Dienst  </th>

        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={persons.id}>
              <td> {persons.id} </td>
              <td> {persons.title} </td>
              <td> {persons.firstname} </td>
              <td> {persons.lastname} </td>
              <td> {persons.email} </td>
              <td> {persons.service} </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPersonComponent;
