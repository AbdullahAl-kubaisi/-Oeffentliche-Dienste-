import React, { useState, useEffect } from 'react';
import PersonService from '../services/PersonService';
import { Link } from 'react-router-dom';

const ListPersonComponent = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAllPersons();
  }, []);

  const getAllPersons = () => {
    PersonService.getAllPersons()
      .then((response) => {
        setPersons(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePerson = (personId) => {
    PersonService.deletePerson(personId)
      .then((response) => {
        getAllPersons();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> Liste alle Benutzern </h2>
      <Link to="/add-person" className="btn btn-primary mb-2">
        Person hinzufügen
      </Link>
      <Link to="/roles" className="btn btn-primary mb-2">
        Rolen-Liste zeigen
      </Link>
      <Link to="/add-role" className="btn btn-primary mb-2">
        Role hinzufügen
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id </th>
          <th> Title </th>
          <th> Firstname </th>
          <th> Lastname </th>
          <th> Email </th>
          <th> Dienst </th>
          <th> Role </th>
          <th> Aktion </th>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td> {person.id} </td>
              <td> {person.titl} </td>
              <td> {person.firstname} </td>
              <td> {person.lastname} </td>
              <td> {person.email} </td>
              <td> {person.service} </td>
              <td> {person.role.rolename} </td>
              <td>
                <Link className="btn btn-info" to={`/edit-person/${person.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePerson(person.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPersonComponent;
