import React from 'react';
import { Link } from 'react-router-dom'
import appLogo from '../images/moniez-green-logo.png';

const LoginOptions = () => (
  <div className='container text-center p-5'>

    <div className='text-center pb-5'>
      <img src={appLogo} style={{width: '15rem'}} alt='Dollar Sign Logo' />
    </div>

    <Link to='/sign-up' className='btn btn-primary mr-5'>Sign Up</Link>

    <Link to='/login' className='btn btn-primary mr-5'>Login</Link>

    {/* <Link to='/dashboard' className='btn btn-primary'>Dashboard</Link> */}
  </div>
);

export default LoginOptions;
