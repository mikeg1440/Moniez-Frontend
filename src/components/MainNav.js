import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {endUserSession} from '../actions/UserActions';
import {connect} from 'react-redux';

class MainNav extends Component {
  state = {
    navigate: false
  }

  handleLogout = () => {
    let logout = window.confirm('You are about to be logged out!')
    if (logout){
      this.props.endUserSession()
      localStorage.removeItem('token')
      localStorage.removeItem('current_budget_id')
      this.setState({
        navigate: true
      })
    }
  }

  renderBackButton = () => (
    <NavLink to='/dashboard' className='btn btn-info'>Dashboard</NavLink>
  )

  renderBudgetButton = () => (
    <NavLink to='/budgets' className='btn btn-success mr-5 float-left' >Budgets</NavLink>
  )

  render() {
    if (this.state.navigate){
      return <Redirect to='/' push={true} />
    }
    return (
      <nav className='text-center'>
        <div className='row'>
          <div className='col'>
            {this.props.location.pathname !== '/budgets' && this.renderBudgetButton()}
            {this.props.children}
            {this.props.location.pathname !== '/dashboard' ? this.renderBackButton() : null}
            <button className='btn btn-warning float-right' onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
    );
  }

}

export default connect(null, {endUserSession})(MainNav);
