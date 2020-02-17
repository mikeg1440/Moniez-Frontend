import React, { Component } from 'react';
import DashboardNav from '../components/DashboardNav';
import BudgetsContainer from './BudgetsContainer';
import {connect} from 'react-redux';
import {getBudgets, selectBudget} from '../actions/BudgetActions';
import BudgetSelector from '../components/BudgetSelector';

class DashboardContainer extends Component {

  componentDidMount(){
    this.props.getBudgets()
  }

  isBudgetSelected = () => {
    return (Object.keys(this.props.budgets.selected).length !== 0)
  }



  onSelectChange = (e) => {
    const budgetId = e.target.options[e.target.selectedIndex].value
    this.props.selectBudget(budgetId)
  }

  render() {
    return (
      <div className='text-center'>
        <h2>Dashboard Container</h2>

        <div className='row mr-auto ml-auto'>
          <DashboardNav />
        </div>

        <BudgetSelector budgets={this.props.budgets} callback={this.onSelectChange}/>
        {/* {this.isBudgetSelected ? <BudgetSelector /> : 'Budget is selected'  } */}


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
    getBudgets: () => dispatch(getBudgets()),
    selectBudget: (budgetId) => dispatch(selectBudget(budgetId))
  }
}

const mapStateToProps = state => {
  return {
    budgets: state.budgets
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
