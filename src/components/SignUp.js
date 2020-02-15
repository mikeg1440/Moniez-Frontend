import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerUser} from '../actions/UserActions';


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


  render() {
    return (
      <div className='app-wrapper'>
        <div className='container p-5 form-group'>

          <div className='text-center'>
            <h2>New User Sign Up</h2>
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

            <div className='text-center pt-5'>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch, initialState) => {
  return {
    signup: (userInfo) => dispatch(registerUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
