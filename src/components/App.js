import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutesContainer from '../containers/AppRoutesContainer';


function App() {
  return (
    <Router className="App text-center">


      <AppRoutesContainer />
    </Router>
  );
}

export default App;
