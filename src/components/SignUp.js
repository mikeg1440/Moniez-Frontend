import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerUser} from '../actions/UserActions';
import {Redirect, Link} from 'react-router-dom';
import AlertMessage from './AlertMessage';


const initialState = {
  username: '',
  email: '',
  password: '',
  password_confirmation: ''
}



class SignUp extends Component {

  state = initialState

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signup(this.state)
    this.setState(initialState)
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }



  render() {

    return localStorage.getItem('token') ? (
      <Redirect to='/dashboard' />
    ) : (
      <div className='app-wrapper'>
        <div className='container p-5 form-group'>

          <div className='text-center'>
            <h2>Create a New Account</h2>
            {this.props.errors ? (
              <AlertMessage errors={this.props.errors} />
            ) : null}
          </div>

          <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input type='text' className='form-control text-center' name='username' onChange={this.handleChange} value={this.state.username} placeholder='Username' />

            <label>Email:</label>
            <input type='email' className='form-control text-center' name='email' onChange={this.handleChange} value={this.state.email} placeholder='Email' />

            <label>Password:</label>
            <input type='password' className='form-control text-center' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password' />

            <label>Confirm Password:</label>
            <input type='password' className='form-control text-center' name='password_confirmation' onChange={this.handleChange} value={this.state.passwordConfirmation} placeholder='Password Confirmation' />

            <div className='text-center mt-5'>
              <input type='submit' className='shadow btn btn-success' value='Create Account' />
            </div>
          </form>

          <div className='text-center'>
            Already have a account?  <Link to='/login'>Login Here</Link>
          </div>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch, currentProps) => {
  return {
    signup: (userInfo) => dispatch(registerUser(userInfo, currentProps)),
    clearErrors: () => dispatch({type: 'CLEAR_ERRORS'})
  }
}

const mapStateToProps = state => {
  if (state.currentUser.errors){
    return {errors: state.currentUser.errors}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
