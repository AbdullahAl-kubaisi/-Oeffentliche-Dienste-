import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocationService from '../services/LocationService';

const ListRole = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getAllLocations();
  }, []);

  const getAllLocations = () => {
    LocationService.getAllLocations()
      .then((response) => {
        setLocations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteLocations = (locationId) => {
    LocationService.deleteLocation(locationId)
      .then((response) => {
        getAllLocations();
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> Adressen-Liste </h2>
      <Link to="/add-location" className="btn btn-primary mb-2">
        Adresse hinzufügen
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Id </th>
          <th> Strasse </th>
          <th> Postleitzahl </th>
          <th> Kanton </th>
          <th> Action </th>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td> {location.id} </td>
              <td> {location.street} </td>
              <td>
                {location.plz}
                &nbsp;{location.place}
              </td>
              <td> {location.canton} </td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-location/${location.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteLocations(location.id)}
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
