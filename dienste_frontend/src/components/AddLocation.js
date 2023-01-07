import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LocationService from '../services/LocationService';

const AddLocation = () => {
  const [street, setStreet] = useState('');
  const [plz, setPlz] = useState('');
  const [place, setPlace] = useState('');
  const [canton, setCanton] = useState('');
  const history = useNavigate();
  const { id } = useParams();
  const saveOrUpdateLocation = (e) => {
    e.preventDefault();

    const location = {
      street,
      plz,
      place,
      canton,
    };

    if (id) {
      LocationService.updateLocation(id, location)
        .then((response) => {
          console.log(response.data);
          history('/locations');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      LocationService.createLocation(location)
        .then((response) => {
          console.log(response.data);
          history('/locations');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    LocationService.getLocationById(id)
      .then((response) => {
        setStreet(response.data.street);
        setPlz(response.data.plz);
        setPlace(response.data.place);
        setCanton(response.data.canton);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Adresse aktualisieren</h2>;
    } else {
      return <h2 className="text-center">Adresse hinzufügen</h2>;
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
                  <label className="form-label"> Strasse :</label>
                  <input
                    type="text"
                    placeholder="Strasse eingeben"
                    name="street"
                    className="form-control"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Postleitzahl :</label>
                  <input
                    type="text"
                    placeholder="Postleitzahl eingeben"
                    name="plz"
                    className="form-control"
                    value={plz}
                    onChange={(e) => setPlz(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Stadt :</label>
                  <input
                    type="text"
                    placeholder="Stadt eingeben"
                    name="place"
                    className="form-control"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Kanton :</label>
                  <input
                    type="text"
                    placeholder="Kanton eingeben"
                    name="canton"
                    className="form-control"
                    value={canton}
                    onChange={(e) => setCanton(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateLocation(e)}
                >
                  Hinzufügen
                </button>
                <Link to="/location" className="btn btn-danger">
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

export default AddLocation;
