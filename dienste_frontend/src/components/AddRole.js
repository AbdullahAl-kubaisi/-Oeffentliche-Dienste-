import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RoleService from '../services/RoleService';

const AddRole = () => {
  const [rolename, setRolename] = useState('');
  const history = useNavigate();
  const { id } = useParams();
  const saveOrUpdateRole = (e) => {
    e.preventDefault();

    const role = {
      rolename,
    };

    if (id) {
      RoleService.updateRole(id, role)
        .then((response) => {
          console.log(response.data);
          history('/roles');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      RoleService.createRole(role)
        .then((response) => {
          console.log(response.data);
          history('/roles');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    RoleService.getRoleById(id)
      .then((response) => {
        setRolename(response.data.rolename);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Role aktualisieren</h2>;
    } else {
      return <h2 className="text-center">Role hinzufügen</h2>;
    }
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Rolename :</label>
                  <input
                    type="text"
                    placeholder="Role eingeben"
                    name="rolename"
                    className="form-control"
                    value={rolename}
                    onChange={(e) => setRolename(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateRole(e)}
                >
                  Hinzufügen
                </button>
                <Link to="/roles" className="btn btn-danger">
                  Abbrechen
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRole;
