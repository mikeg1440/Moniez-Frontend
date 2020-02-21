import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import appLogo from '../images/moniez-green-logo.png';

const LoginOptions = () =>{


  return localStorage.getItem('token') ? (
    <Redirect to='/dashboard' />
  ) : (
    <div className='container text-center p-5'>

      <div className='text-center pb-5'>
        <img src={appLogo} style={{width: '15rem'}} alt='Dollar Sign Logo' />
      </div>

      <Link to='/sign-up' className='btn btn-primary mr-5'>Sign Up</Link>

      <Link to='/login' className='btn btn-primary'>Login</Link>

    </div>
  );
}
export default LoginOptions;
