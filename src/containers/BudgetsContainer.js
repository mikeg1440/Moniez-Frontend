import React, { Component } from 'react';
import {connect} from 'react-redux';
import BudgetForm from '../components/BudgetForm';
import { getBudgets, deleteEntry, addEntry} from '../actions/BudgetActions';
import MainNav from '../components/MainNav';


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
    return this.props.budgets.all.map(budget => <Budget key={budget.id} budget={budget} deleteAction={this.props.deleteBudget} />)
  }

  componentDidMount(){
    this.props.getBudgets()
  }


  render() {
    return (
      <div>
        <h2 className='text-center'>Budgets</h2>

        <MainNav location={this.props.location} />
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
    getBudgets: () => dispatch(getBudgets()),
    addBudget: (budgetInfo) => dispatch(addEntry('budget', budgetInfo)),
    deleteBudget: (id) => dispatch(deleteEntry('budget', id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetsContainer);
