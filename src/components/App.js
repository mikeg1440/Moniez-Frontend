import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Nav from '../components/Nav';


function App() {
  return (
    <Router className="App text-center">
      Moniez
      <Nav />
    </Router>
  );
}

export default App;
