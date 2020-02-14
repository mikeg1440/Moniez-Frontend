import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends PureComponent {

  render() {
    return (
      <nav className='text-center'>
        <NavLink to='/expenses' className='btn btn-info mr-5'>Expenses</NavLink>
        <NavLink to='/bills' className='btn btn-info mr-5'>Bills</NavLink>
        <NavLink to='/earnings' className='btn btn-info mr-5'>Earnings</NavLink>
      </nav>
    );
  }

}

export default Nav;
