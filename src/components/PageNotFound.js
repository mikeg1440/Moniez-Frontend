import React from 'react';
import logo from '../images/moniez-green-logo.png'

const PageNotFound = () => (
  <div className='page-not-found'>
    <h1 className='text-center'>Whoa never seen that page before!</h1>
    <div className='text-center'>
      <img src={logo} alt='logo' /><br/>
    </div>

  </div>
);

export default PageNotFound;
