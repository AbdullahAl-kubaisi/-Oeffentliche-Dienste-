import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../Header';
import Home from '../../screens/Home';
import Login from '../Login';
import React from 'react';
import Weather from '../../screens/Weather';
import { useCookies } from 'react-cookie';
import ListPersonComponent from '../ListPersonComponent';
import AddPerson from '../AddPerson';
import AddRole from '../AddRole';
import ListRole from '../ListRole';
import AddRoster from '../AddRoster';
import ListRoster from '../ListRoster';
import ListLocation from '../ListLocation';
import AddLocation from '../AddLocation';

const Content = (): JSX.Element => {
const [cookies, setCookie] = useCookies(['userIsLoggedIn']); //eslint-disable-line

  return (
    <Router>
      <Header />
      {!(cookies.userIsLoggedIn as boolean) && <Login />}
      <Routes>
        <Route
          path="/"
          element={(cookies.userIsLoggedIn as boolean) && <Home />}
        />

        <Route
          path="/weather"
          element={(cookies.userIsLoggedIn as boolean) && <Weather />}
        />
        <Route path="/persons" element={<ListPersonComponent />} />
        <Route path="/add-person" element={<AddPerson />} />
        <Route path="/edit-person/:id" element={<AddPerson />} />
        <Route path="/roles" element={<ListRole />} />
        <Route path="/add-role" element={<AddRole />} />
        <Route path="/edit-role/:id" element={<AddRole />} />
        <Route path="/rosters" element={<ListRoster />} />
        <Route path="/add-roster" element={<AddRoster />} />
        <Route path="/edit-roster/:id" element={<AddRoster />} />
        <Route path="/locations" element={<ListLocation />} />
        <Route path="/add-location" element={<AddLocation />} />
        <Route path="/edit-location/:id" element={<AddLocation />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
};

export default Content;
