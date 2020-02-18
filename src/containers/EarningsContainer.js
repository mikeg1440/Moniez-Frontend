import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getEarnings, addEarning} from '../actions/BudgetActions';
import EarningForm from '../components/EarningForm';
import Earning from '../components/Earning';
import {getEarningCategories} from '../actions/BudgetActions';
import MainNav from '../components/MainNav';

class EarningsContainer extends Component {

  componentDidMount(){
    this.props.getEarnings()
    this.props.getCategories()
  }

  renderEarnings = () => {
    return this.props.earnings.map(earning => <Earning earning={earning} />)
  }

  handleSubmit = (earningInfo) => {
    // earningInfo.budget_id = this.props.budget.id
    earningInfo.budget_id = localStorage.getItem('current_budget_id')
    this.props.addEarning(earningInfo)
  }

  render() {
    return (
      <div>
        <MainNav location={this.props.location}  />
        <EarningForm callback={this.handleSubmit} categories={this.props.categories} />
        <ul>
          {this.props.earnings && this.renderEarnings()}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
  earnings: state.budgets.earnings,
  budget: state.budgets.selected,
  categories: state.categories.earnings
}}

const mapDispatchToProps = dispatch => {
  return {
    getEarnings: () => dispatch(getEarnings()),
    addEarning: (earningInfo) => dispatch(addEarning(earningInfo)),
    getCategories: () => dispatch(getEarningCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EarningsContainer);
