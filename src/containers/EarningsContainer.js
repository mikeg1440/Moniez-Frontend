import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from '../components/Form';
import BudgetElement from '../components/BudgetElement';
import {getEarningCategories, getBudgetDetails, deleteEntry, addEntry, getEarnings} from '../actions/BudgetActions';
import MainNav from '../components/MainNav';

const budgetId = () => parseInt(localStorage.getItem('current_budget_id'))

class EarningsContainer extends Component {

  componentDidMount(){
    this.props.getBudgetDetails(budgetId())
    this.props.getCategories()
  }

  renderEarnings = () => {
    return this.props.earnings.map(earning => <BudgetElement key={earning.id} element={earning} category={earning.earning_category} deleteAction={this.handleDelete} />)
  }

  handleDelete = (earningId) => {
    this.props.deleteEarning(earningId)
  }

  handleSubmit = (earningInfo) => {
    earningInfo.budget_id = budgetId()
    this.props.addEarning(earningInfo)
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Earnings</h2>

        <MainNav location={this.props.location}  />
        <Form callback={this.handleSubmit} categories={this.props.categories} categoryName='earning' />
        <ul>
          {this.props.earnings && this.renderEarnings()}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    earnings: state.budgets.selected.earnings ? state.budgets.selected.earnings.sort((a,b) => b.amount - a.amount) : [],
    budget: state.budgets.selected,
    categories: state.categories.earnings
}}

const mapDispatchToProps = dispatch => {
  return {
    getEarnings: () => dispatch(getEarnings()),
    addEarning: (earningInfo) => dispatch(addEntry('earning', earningInfo)),
    deleteEarning: (id) => dispatch(deleteEntry('earning', id)),
    getCategories: () => dispatch(getEarningCategories()),
    getBudgetDetails: (id) => dispatch(getBudgetDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EarningsContainer);
