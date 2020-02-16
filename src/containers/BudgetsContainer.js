import React, { Component } from 'react';
import {connect} from 'react-redux';

class BudgetsContainer extends Component {

  renderBudgets = () => {
    for (const budget in this.state.budgets){
      return (
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{budget.title}</h5>
            <p class="card-text">{budget.description}</p>
            <div className='text-center'>
              <h1>${budget.total}</h1>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderBudgets}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {budgets: state.budgets}
}

export default connect(mapStateToProps)(BudgetsContainer);
