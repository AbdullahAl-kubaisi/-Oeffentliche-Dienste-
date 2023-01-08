import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PersonService from '../services/PersonService';
import RosterService from '../services/RosterService';
import LocationService from '../services/LocationService';

const AddRoster = () => {
  const [rosterFrom, setRosterFrom] = useState('');
  const [rosterTo, setRosterTo] = useState('');
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);
  const [personname, setPersonname] = useState('');
  const [dataa, setDataa] = useState([]);
  const [adresse, setAdresse] = useState('');
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    PersonService.getAllPersons()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    LocationService.getAllLocations()
      .then((response) => {
        setDataa(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const saveOrUpdateRoster = (e) => {
    e.preventDefault();
    const roster = {
      rosterFrom,
      rosterTo,
      comment,
      person: {
        id: personname,
      },
      location: {
        id: adresse,
      },
    };

    if (id) {
      RosterService.updateRoster(id, roster)
        .then((response) => {
          console.log(response.data);
          history('/rosters');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      RosterService.createRoster(roster)
        .then((response) => {
          console.log(response.data);
          history('/rosters');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    RosterService.getRosterById(id)
      .then((response) => {
        setRosterFrom(response.data.rosterFrom);
        setRosterTo(response.data.rosterTo);
        setComment(response.data.comment);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Dienstplan aktualisieren</h2>;
    } else {
      return <h2 className="text-center">Dienstplan hinzufügen</h2>;
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
                  <label className="form-label"> Dienstplan von :</label>
                  <input
                    type="datetime-local"
                    placeholder="Title eingeben"
                    name="rosterFrom"
                    className="form-control"
                    value={rosterFrom}
                    onChange={(e) => setRosterFrom(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Dienstplan bis :</label>
                  <input
                    type="datetime-local"
                    placeholder="Vorname eingeben"
                    name="rosterTo"
                    className="form-control"
                    value={rosterTo}
                    onChange={(e) => setRosterTo(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Bemerkung :</label>
                  <input
                    type="text"
                    placeholder="Dienstplan eingeben"
                    name="comment"
                    className="form-control"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">
                    Person auswählen:
                    <select
                      value={personname}
                      onChange={(e) => setPersonname(e.target.value)}
                      className="form-control"
                      name="personidfs"
                    >
                      {data.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.titl}
                          .&nbsp;&nbsp;{item.firstname}
                          &nbsp;{item.lastname}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">
                    Adresse auswählen:
                    <select
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                      className="form-control"
                      name="locationidfs"
                    >
                      {dataa.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.plz}
                          .&nbsp;&nbsp;{item.place}
                          &nbsp;{item.canton}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateRoster(e)}
                >
                  Hinzufügen
                </button>
                <Link to="/rosters" className="btn btn-danger">
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

export default AddRoster;
