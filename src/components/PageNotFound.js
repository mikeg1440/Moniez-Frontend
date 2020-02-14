import React from 'react';
import logo from '../images/dollar-logo.png'

const PageNotFound = () => (
  <div>
    <h1 className='text-center'>Whoa never seen that page before!</h1>
    <div className='text-center'>
      <img style={{width: '10rem'}} src={logo} alt='logo' /><br/>
    </div>

  </div>
);

export default PageNotFound;
