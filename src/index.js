import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './CSS/index.css';
import App from './App';
import AppLayout from './layouts/AppLayout';

ReactDOM.render(
  <AppLayout>
    <App />
  </AppLayout>
  , document.getElementById('root'));
