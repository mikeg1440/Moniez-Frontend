import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Nav from '../components/Nav';
import AppRoutesContainer from '../containers/AppRoutesContainer';


function App() {
  return (
    <Router className="App text-center">


      <AppRoutesContainer />
    </Router>
  );
}

export default App;
