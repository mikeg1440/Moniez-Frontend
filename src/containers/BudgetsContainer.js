import React, { Component } from 'react';
import {connect} from 'react-redux';
import BudgetForm from '../components/BudgetForm';
import {addBudget} from '../actions/BudgetActions';
import Budget from '../components/Budget';

const initialState = {
  title: '',
  description: ''
}

class BudgetsContainer extends Component {

  state = initialState

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  submitBudget = (budgetInfo) => {
    this.props.addBudget(budgetInfo)
  }

  renderBudgets = () => {
    return this.props.budgets.map(budget => <Budget budget={budget} />)
  }

  render() {
    return (
      <div>
        <BudgetForm submitBudget={this.submitBudget} />

        <h2 className='text-center'>Budgets</h2>


        <div className='row'>
          {this.renderBudgets()}
        </div>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {budgets: state.budgets}
}

const mapDispatchToProps = dispatch => {
  return {
    addBudget: (budgetInfo) => dispatch(addBudget(budgetInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsContainer);
