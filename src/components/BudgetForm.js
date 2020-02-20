import React, {Component} from 'react';

const initialState = {
  title: '',
  description: ''
}

class BudgetForm extends Component {
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
    this.props.submitBudget(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <div className='container p-5' id='budgetForm'>
        <form onSubmit={this.handleSubmit}>

          <div className='row mb-2 '>
            <div className='col'>
              <label className='float-right'>Budget Title: </label>
            </div>

            <div className='col-10'>
              <input
                type='text'
                name='title'
                className='form-control text-center'
                value={this.state.title}
                onChange={this.handleChange}
                placeholder='Title'/>
              </div>
            </div>

            <div className='row'>
              <div className='col-2'>
                <label className='float-right'>Budget Description: </label>
              </div>

              <div className='col-10'>
                <textarea
                  name='description'
                  className='form-control'
                  value={this.state.description}
                  onChange={this.handleChange}
                  placeholder='Description' />
                </div>
              </div>


              <div className='row mt-5'>
                <div className='col text-center'>
                  <input type='submit' value='Create Budget' className='btn btn-primary' />
                </div>
              </div>

            </form>

          </div>
        )

  }
}

export default BudgetForm;
