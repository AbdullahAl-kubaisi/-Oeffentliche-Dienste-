import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import ListPersonComponent from './components/ListPersonComponent';
import AddRole from './components/AddRole';
import ListRole from './components/ListRole';
import AddPerson from './components/AddPerson';
import AddRoster from './components/AddRoster';
import ListRoster from './components/ListRoster';
import ListLocation from './components/ListLocation';
import AddLocation from './components/AddLocation';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListPersonComponent />} />
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
      </Router>
    </div>
  );
};

export default App;
