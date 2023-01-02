import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RosterService from '../services/RosterService';

const ListRoster = () => {
  const [rosters, setRosters] = useState([]);

  useEffect(() => {
    getAllRosters();
  }, []);

  const getAllRosters = () => {
    RosterService.getAllRosters()
      .then((response) => {
        setRosters(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteRoster = (rosterId) => {
    RosterService.deleteRoster(rosterId)
      .then((response) => {
        getAllRosters();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> Liste alle Dienstpläne </h2>
      <Link to="/add-roster" className="btn btn-primary mb-2">
        Dienstplan hinzufügen
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Tätigkeit </th>
          <th> Diensthabende Person </th>
          <th> Dienst Von </th>
          <th> Dienst Bis </th>
          <th> Bemerkung </th>
          <th> Aktion </th>
        </thead>
        <tbody>
          {rosters.map((roster) => (
            <tr key={roster.id}>
              <td> {roster.person.service} </td>
              <td>
                {roster.person.titl}
                .&nbsp;&nbsp;{roster.person.firstname}
                &nbsp;{roster.person.lastname}
              </td>
              <td> {roster.rosterFrom} </td>
              <td> {roster.rosterTo} </td>
              <td> {roster.comment} </td>
              <td>
                <Link className="btn btn-info" to={`/edit-roster/${roster.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRoster(roster.id)}
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

export default ListRoster;
