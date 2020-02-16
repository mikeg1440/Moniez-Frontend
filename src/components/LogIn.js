import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/UserActions';
import {Redirect} from 'react-router-dom';
import AlertMessage from './AlertMessage';



const initialState = {
  email: '',
  password: ''
}


class LogIn extends Component {

  state = initialState

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
    this.setState(initialState)
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  render() {
    return localStorage.getItem('token') ? (
      <Redirect to='/dashboard' />
    ) : (
      <div className='container p-5 form-group'>

        <div className='text-center'>
          <h2>User Login</h2>
          {this.props.errors ? (
            <AlertMessage errors={this.props.errors} />
          ) : null}
        </div>


        <form onSubmit={this.handleSubmit}>

          <label>Email:</label>
          <input
            type='email'
            className='form-control text-center'
            name='email'
            placeholder='Email'
            onChange={this.handleChange}
            value={this.state.email} />

          <label>Password:</label>
          <input type='password'
            className='form-control text-center'
            name='password'
            placeholder='Password'
            onChange={this.handleChange}
            value={this.state.password} />

          <div className='text-center pt-5'>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, currentProps) => {
  return {
    login: userInfo => dispatch(loginUser(userInfo, currentProps)),
    clearErrors: () => dispatch({type: 'CLEAR_ERRORS'})
  }
}

const mapStateToProps = state => {
  if (state.currentUser.errors){
    return {errors: state.currentUser.errors}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
