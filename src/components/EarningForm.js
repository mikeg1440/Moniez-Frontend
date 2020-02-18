import React, { Component } from 'react';
import {connect} from 'react-redux';



const initialState = {
  earning_category_id: 0,
  amount: 0
}

class EarningForm extends Component {
  constructor(props){
    super(props)
    this.state = initialState
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.callback(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <div className='container p-5' id='budgetForm'>
        <form onSubmit={this.handleSubmit}>

          <div className='row mb-2 '>
            <div className='col'>
              <label className='float-right'>Earning Category: </label>
            </div>

            <div className='col-9'>
              <select name='earning_category_id' onChange={this.handleChange}>
                {this.props.categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
              </select>

            </div>
          </div>

          <div className='row'>
            <div className='col-3'>
              <label className='float-right'>Earning Amount: </label>
            </div>

            <div className='col-9'>
              <input
                name='amount'
                className='form-control'
                value={this.state.amount}
                onChange={this.handleChange}
                placeholder='Amount' />
              </div>
          </div>


          <div className='row mt-2'>
            <div className='col text-center'>
              <input type='submit' value='Create Earning' className='btn btn-primary' />
            </div>
          </div>


        </form>
      </div>
    )
  }
}

export default EarningForm;
