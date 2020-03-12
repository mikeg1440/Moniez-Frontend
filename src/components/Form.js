import React, { Component } from 'react';

// required props: categoryName, callback, categories


const initialState = (props) => ({
  [`${props.categoryName}_category_id`]: 1,
  amount: ''
})

class Form extends Component {
  constructor(props){
    super(props)
    this.state = initialState(props)
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

  capitalizeWord = (word) => (
    word.charAt(0).toUpperCase() + word.slice(1)
  )

  render() {
    const {categoryName} = this.props
    return (
      <div className='container p-5' id='budgetForm'>
        <form onSubmit={this.handleSubmit}>

          <div className='row mb-2 '>
            <div className='col'>
              <label className='float-right'>{this.capitalizeWord(categoryName)} Category: </label>
            </div>

            <div className='col-9'>
              <select name={`${categoryName}_category_id`} onChange={this.handleChange}>
                {this.props.categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
              </select>

            </div>
          </div>

          <div className='row'>
            <div className='col-3'>
              <label className='float-right'>{this.capitalizeWord(categoryName)} Amount: </label>
            </div>

            <div className='col-9'>
              <input
                name='amount'
                required
                className='form-control'
                value={this.state.amount}
                onChange={this.handleChange}
                placeholder='Amount' />
              </div>
          </div>


          <div className='row mt-2'>
            <div className='col text-center'>
              <input type='submit' value={`Create ${this.capitalizeWord(categoryName)}`} className='btn btn-primary' />
            </div>
          </div>


        </form>
      </div>
    )
  }
}

export default Form;
