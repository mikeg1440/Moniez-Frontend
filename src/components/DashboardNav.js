import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class DashboardNav extends Component {

  // handleLogout = () => {
  //   alert('Loggin user out!')
  // }


  render() {
    return (
      <>
      <NavLink to='/earnings' className='btn btn-info mr-5' >Earnings</NavLink>
      <NavLink to='/expenses' className='btn btn-info mr-5' >Expenses</NavLink>
      <NavLink to='/bills' className='btn btn-info' >Bills</NavLink>
      </>
    );
  }

}

export default DashboardNav;

// return (
//   <div className='row'>
//     <div className='col'>
//       <NavLink to='/earnings' className='btn btn-info mr-5' >Earnings</NavLink>
//       <NavLink to='/expenses' className='btn btn-info mr-5' >Expenses</NavLink>
//       <NavLink to='/bills' className='btn btn-info' >Bills</NavLink>
//     </div>
//   </div>
// );
