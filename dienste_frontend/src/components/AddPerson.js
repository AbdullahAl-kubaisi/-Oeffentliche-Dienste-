import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PersonService from '../services/PersonService';

const AddPerson = () => {
  const [titl, setTitl] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [service, setService] = useState('');
  const history = useNavigate();
  const { id } = useParams();
  const saveOrUpdatePerson = (e) => {
    e.preventDefault();

    const person = { title, firstname, lastname, email, password, service };

    if (id) {
      PersonService.updatePerson(id, person)
        .then((response) => {
          history.push('/persons');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      PersonService.createPerson(person)
        .then((response) => {
          console.log(response.data);
          history.push('/persons');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    PersonService.getPersonById(id)
      .then((response) => {
        setTitl(response.data.titl);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setService(response.data.service);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Person aktualisieren</h2>;
    } else {
      return <h2 className="text-center">Person hinzufügen</h2>;
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
                  <label className="form-label"> Title :</label>
                  <input
                    type="text"
                    placeholder="Title eingeben"
                    name="titl"
                    className="form-control"
                    value={titl}
                    onChange={(e) => setTitl(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Vorname :</label>
                  <input
                    type="text"
                    placeholder="Vorname eingeben"
                    name="firstname"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Nachname :</label>
                  <input
                    type="text"
                    placeholder="Nachname eingeben"
                    name="lastname"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email :</label>
                  <input
                    type="email"
                    placeholder="Email eingeben"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Passwort :</label>
                  <input
                    type="text"
                    placeholder="Password eingeben"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Tätigkeit :</label>
                  <input
                    type="text"
                    placeholder="Tätigkeit eingeben"
                    name="service"
                    className="form-control"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdatePerson(e)}
                >
                  Hinzufügen
                </button>
                <Link to="/persons" className="btn btn-danger">
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

export default AddPerson;
