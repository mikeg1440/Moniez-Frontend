import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class DashboardNav extends Component {

  handleLogout = () => {
    alert('Loggin user out!')
  }


  render() {
    return (
      <div className='col'>
        <NavLink to='/budgets' className='btn btn-success mr-5 float-left' >Budgets</NavLink>
        <NavLink to='/earnings' className='btn btn-info mr-5' >Earnings</NavLink>
        <NavLink to='/expenses' className='btn btn-info mr-5' >Expenses</NavLink>
        <NavLink to='/bills' className='btn btn-info' >Bills</NavLink>
        <button className='btn btn-warning float-right' onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }

}

export default DashboardNav;
