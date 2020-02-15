import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }


  handleChange = (e) => {
    debugger
    this.setState({

      })
  }


  render() {
    return (
      <div className='app-wrapper'>
        <div className='container p-5 form-group'>

          <div className='text-center'>
            <h2>New User Sign Up</h2>
          </div>

          <form>
            <label>Username:</label>
            <input type='text' className='form-control text-center' onChange={this.handleChange} value={this.state.username} placeholder='Username' />

            <label>Email:</label>
            <input type='email' className='form-control text-center' onChange={this.handleChange} value={this.state.email} placeholder='Email' />

            <label>Password:</label>
            <input type='password' className='form-control text-center' onChange={this.handleChange} value={this.state.password} placeholder='Password' />

            <label>Confirm Password:</label>
            <input type='password' className='form-control text-center' onChange={this.handleChange} value={this.state.passwordConfirmation} placeholder='Password Confirmation' />

            <div className='text-center pt-5'>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>

    );
  }

}

export default SignUp;