import React, { Component } from 'react';
import DashboardNav from '../components/DashboardNav';
import BudgetsContainer from './BudgetsContainer';
import {connect} from 'react-redux';
import {getBudgets} from '../actions/BudgetActions';

class DashboardContainer extends Component {

  // componentDidMount(){
  //   this.props.getBudgets()
  // }

  render() {
    return (
      <div className='text-center'>
        <h2>Dashboard Container</h2>

        <div className='row mr-auto ml-auto'>
          <DashboardNav />
        </div>

        {/* conditionally render budgets container depending if a budget exists or not */}
        <BudgetsContainer />

        <div className='row'>
          <div className='col'>
            Budget Entries
          </div>

          <div className='col'>
            Budget Graph
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // userIsAuthed: () => dispatch(isAuthed())
  return {
    getBudgets: () => dispatch(getBudgets())

const mapStateToProps = state => {
  return {
    budgets: state.budgets
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
