import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import BudgetElement from '../components/BudgetElement';
import {getCategories, getBudgetDetails, deleteEntry, addEntry} from '../actions/BudgetActions';
import MainNav from '../components/MainNav';


const budgetId = () => parseInt(localStorage.getItem('current_budget_id'))

class ExpensesContainer extends Component {


  componentDidMount(){
    this.props.getBudgetDetails(budgetId())
    this.props.getCategories()
  }

  renderExpenses = () => {
    return this.props.budget.expenses.map(expense => <BudgetElement key={expense.id} element={expense} category={expense.expense_category} deleteAction={this.props.deleteExpense}/>)
  }

  handleSubmit = (expenseInfo) => {
    // expenseInfo.budget_id = this.props.budget.id
    // expenseInfo.budget_id = localStorage.getItem('current_budget_id')
    expenseInfo.budget_id = budgetId()

    this.props.addExpense(expenseInfo)
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Expenses</h2>

        <MainNav location={this.props.location}  />
        <Form callback={this.handleSubmit} categories={this.props.categories} categoryName='expense' />
        <ul>
          {this.props.budget.expenses && this.renderExpenses()}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
  expenses: state.budgets.selected.expenses ? state.budgets.selected.expenses.sort((a,b) => b.amount - a.amount) : null,
  budget: state.budgets.selected,
  categories: state.categories.expenses
}}

const mapDispatchToProps = dispatch => {
  return {
    // getExpenses: () => dispatch(getExpenses()),
    addExpense: (expenseInfo) => dispatch(addEntry('expense', expenseInfo)),
    deleteExpense: (id) => dispatch(deleteEntry('expense', id)),
    getBudgetDetails: (id) => dispatch(getBudgetDetails(id)),
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);
