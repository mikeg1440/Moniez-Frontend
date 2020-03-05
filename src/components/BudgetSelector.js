import React, { Component } from 'react';

const currentBudgetId = () => (localStorage.getItem('current_budget_id') ? parseInt(localStorage.getItem('current_budget_id')) : null)

class BudgetSelector extends Component {
  constructor(props){
    super(props)
    this.state = {
      budgetId: currentBudgetId()
    }
  }

  handleChange = (e) => {
    const budgetId = e.target.options[e.target.selectedIndex].value
    this.setState({
      budgetId: budgetId
    })
    this.props.callback(budgetId)

  }

  render() {
    const {budgets} = this.props
    if (budgets.all.length === 0){
      return (
        <h2>You must first create a budget by clicking the Budgets button!</h2>
      )
    }
    return (
      <select onChange={this.handleChange} className="mdb-select md-form budget-selector" value={this.state.budgetId}>
        {currentBudgetId ? <option value="" disabled selected hidden>Select a Budget</option> : null}
        {budgets.all.map(budget => <option key={budget.id} value={budget.id}>{budget.title}</option>)}
      </select>
    );
  }

}

export default BudgetSelector;
