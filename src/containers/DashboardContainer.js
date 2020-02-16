import React, { Component } from 'react';
import DashboardNav from '../components/DashboardNav';
import BudgetsContainer from './BudgetsContainer';
import {connect} from 'react-redux';

class DashboardContainer extends Component {


  render() {
    return (
      <div className='text-center'>
        <h2>Dashboard Container</h2>

        <div className='row mr-auto ml-auto'>
          <DashboardNav />
        </div>

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

const mapDispatchToProps = dispatch => {
  // userIsAuthed: () => dispatch(isAuthed())
  return {
    getBudgets: () => dispatch(getBudgets())
  }
}

export default connect(null, mapDispatchToProps)(DashboardContainer);
