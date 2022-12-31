import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoleService from '../services/RoleService';

const ListRole = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getAllRoles();
  }, []);

  const getAllRoles = () => {
    RoleService.getAllRoles()
      .then((response) => {
        setRoles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteRoles = (roleId) => {
    RoleService.deleteRole(roleId)
      .then((response) => {
        getAllRoles();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> Rollen-Liste </h2>
      <Link to="/add-role" className="btn btn-primary mb-2">
        Rolle hinzufügen
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id </th>
          <th> Rolename </th>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td> {role.id} </td>
              <td> {role.rolename} </td>
              <td>
                <Link className="btn btn-info" to={`/edit-role/${role.id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRoles(role.id)}
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

export default ListRole;
