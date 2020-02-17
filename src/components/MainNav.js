import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {

  handleLogout = () => {
    alert('Loggin user out!')
  }


  render() {
    return (
      <nav className='text-center'>
        <div className='row'>
          <div className='col'>
            <NavLink to='/budgets' className='btn btn-success mr-5 float-left' >Budgets</NavLink>
            {this.props.children}
            <button className='btn btn-warning float-right' onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
    );
  }

}

export default MainNav;
