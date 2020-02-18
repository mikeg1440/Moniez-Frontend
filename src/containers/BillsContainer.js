import React, { Component } from 'react';
import {connect} from 'react-redux';
import BillForm from '../components/BillForm';
import Bill from '../components/Bill';
import {getCategories, getBudgetDetails, addBill} from '../actions/BudgetActions';
import MainNav from '../components/MainNav';

const budgetId = () => parseInt(localStorage.getItem('current_budget_id'))

class BillsContainer extends Component {


  componentDidMount(){
    // this.props.getBudgetDetails(1)
    this.props.getBudgetDetails(budgetId())
    this.props.getCategories()
  }

  renderBills = () => {
    // return this.props.budget.bills.map(bill => <Bill key={bill.id} bill={bill} />)
    return this.props.bills.map(bill => <Bill key={bill.id} bill={bill} />)
  }

  handleSubmit = (billInfo) => {
    // billInfo.budget_id = this.props.budget.id
    // billInfo.budget_id = localStorage.getItem('current_budget_id')
    billInfo.budget_id = budgetId()
    this.props.addBill(billInfo)
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Bills</h2>
        <MainNav location={this.props.location}  />
        <BillForm callback={this.handleSubmit} categories={this.props.categories} />
        <ul>
          {this.props.budget.bills && this.renderBills()}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
  bills: state.budgets.selected.bills,
  budget: state.budgets.selected,
  categories: state.categories.bills
}}

const mapDispatchToProps = dispatch => {
  return {
    // getBills: () => dispatch(getBills()),
    addBill: (billInfo) => dispatch(addBill(billInfo)),
    getBudgetDetails: (id) => dispatch(getBudgetDetails(id)),
    getCategories: () => dispatch(getCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillsContainer);
