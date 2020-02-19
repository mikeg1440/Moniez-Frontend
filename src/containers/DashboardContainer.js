import React, { Component } from 'react';
import DashboardNav from '../components/DashboardNav';
import MainNav from '../components/MainNav';
import {connect} from 'react-redux';
import {getBudgets, selectBudget} from '../actions/BudgetActions';
import BudgetSelector from '../components/BudgetSelector';
import BudgetTable from '../components/BudgetTable';
import BudgetPieChart from '../components/BudgetPieChart';

const budgetId = () => parseInt(localStorage.getItem('current_budget_id'))


class DashboardContainer extends Component {

  componentWillMount(){
    this.props.getBudgets()
    // this.props.selectBudget(localStorage.getItem('current_budget_id'))
  }


  isBudgetSelected = () => {
    return !!budgetId()
  }

  isCurrentBudgetSelected = (currentBudget) => {
    if (!!currentBudget){
      return (!!Object.keys(currentBudget).length)
    }
  }

  onBudgetSelect = (budgetId) => {
    this.props.selectBudget(budgetId)
  }


  render() {
    return (
      <div className='text-center'>
        <h2>Dashboard</h2>


         <MainNav location={this.props.location}>
          { this.isBudgetSelected() ? <DashboardNav /> : null}
        </MainNav>

        <BudgetSelector budgets={this.props.budgets} callback={this.onBudgetSelect}/>


        <div className='row'>
          <div className='col'>
            <h4>Budgets</h4>
            {this.props.budgets.all && <BudgetTable budgets={this.props.budgets.all} />}
          </div>

          <div className='col'>
            <h4>{this.props.budgets.selected.title} Graph</h4>
            {this.isCurrentBudgetSelected(this.props.budgets.selected) ? <BudgetPieChart budget={this.props.budgets.selected}/> : (
              <div>
                Select a budget to see graph..
              </div>
            )}

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
    selectBudget: (id) => dispatch(selectBudget(id))
  }
}

const mapStateToProps = state => {

  return {
    budgets: state.budgets,
    currentBudget: state.budgets.selected
    // currentBudget: state.budgets.all.filter(budget => budget.id === budgetId())[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
