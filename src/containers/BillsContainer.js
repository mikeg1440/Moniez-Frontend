import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import BudgetElement from '../components/BudgetElement';
import {getCategories, getBudgetDetails, deleteEntry, addEntry, removeErrors} from '../actions/BudgetActions';
import MainNav from '../components/MainNav';

const budgetId = () => parseInt(localStorage.getItem('current_budget_id'))

class BillsContainer extends Component {


  componentDidMount(){
    this.props.getBudgetDetails(budgetId())
    this.props.getCategories()
  }

  renderBills = () => {
    return this.props.bills.map(bill => <BudgetElement key={bill.id} element={bill} category={bill.bill_category} deleteAction={this.props.deleteBill} />)
  }

  renderErrors = (errors) => {
    return errors.map((error, i) => <h4 className='text-center alert-danger' key={i}>{error}</h4>)
  }

  handleSubmit = (billInfo) => {
    // billInfo.budget_id = this.props.budget.id
    billInfo.budget_id = budgetId()
    this.props.addBill(billInfo)
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Bills</h2>
        {this.props.errors.length > 0 ? this.renderErrors(this.props.errors) : null}
        <MainNav location={this.props.location}  />
        <Form callback={this.handleSubmit} categories={this.props.categories} categoryName='bill' />
        <ul>
          {this.props.budget.bills && this.renderBills()}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
  bills: state.budgets.selected.bills ? state.budgets.selected.bills.sort((a,b) => b.amount - a.amount) : null,
  budget: state.budgets.selected,
  categories: state.categories.bills,
  errors: state.budgets.errors
}}

const mapDispatchToProps = dispatch => {
  return {
    // getBills: () => dispatch(getBills()),
    addBill: (billInfo) => dispatch(addEntry('bill', billInfo)),
    deleteBill: (id) => dispatch(deleteEntry('bill', id)),
    getBudgetDetails: (id) => dispatch(getBudgetDetails(id)),
    getCategories: () => dispatch(getCategories()),
    removeErrors: () => dispatch(removeErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillsContainer);
