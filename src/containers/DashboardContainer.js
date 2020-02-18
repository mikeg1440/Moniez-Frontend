import React, { Component } from 'react';
import DashboardNav from '../components/DashboardNav';
import MainNav from '../components/MainNav';
import {connect} from 'react-redux';
import {getBudgets, selectBudget} from '../actions/BudgetActions';
import BudgetSelector from '../components/BudgetSelector';
import BudgetTable from '../components/BudgetTable';

const budgetId = () => parseInt(localStorage.getItem('current_budget_id'))


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


         <MainNav location={this.props.location}>
          { this.isBudgetSelected() ? <DashboardNav /> : null}
        </MainNav>

        <BudgetSelector budgets={this.props.budgets} callback={this.onSelectChange}/>
        {/* {this.isBudgetSelected ? <BudgetSelector /> : 'Budget is selected'  } */}


        <div className='row'>
          <div className='col'>
            Budget Entries
            {this.props.budgets.all && <BudgetTable budgets={this.props.budgets.all} />}
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
