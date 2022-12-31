import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import ListPersonComponent from './components/ListPersonComponent';
import AddRole from './components/AddRole';
import ListRole from './components/ListRole';
import AddPerson from './components/AddPerson';

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
