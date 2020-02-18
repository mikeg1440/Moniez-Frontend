import React, { Component } from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import Expense from '../components/Expense';
import {getCategories, getBudgetDetails, addExpense} from '../actions/BudgetActions';
import MainNav from '../components/MainNav';

const budgetId = () => parseInt(localStorage.getItem('current_budget_id'))

class ExpensesContainer extends Component {


  componentDidMount(){
    // this.props.getBudgetDetails(1)
    this.props.getBudgetDetails(budgetId())
    this.props.getCategories()
  }

  renderExpenses = () => {
    return this.props.budget.expenses.map(expense => <Expense key={expense.id} expense={expense} />)
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
        <ExpenseForm callback={this.handleSubmit} categories={this.props.categories} />
        <ul>
          {this.props.budget.expenses && this.renderExpenses()}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
  expenses: state.budgets.selected.expenses,
  budget: state.budgets.selected,
  categories: state.categories.expenses
}}

const mapDispatchToProps = dispatch => {
  return {
    // getExpenses: () => dispatch(getExpenses()),
    addExpense: (expenseInfo) => dispatch(addExpense(expenseInfo)),
    getBudgetDetails: (id) => dispatch(getBudgetDetails(id)),
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesContainer);
