import React from 'react';

const BudgetSelector = ({budgets, callback}) => {


  return (
    <div>
      <select onChange={callback} className="mdb-select md-form">
        <option value="" disabled selected hidden>Select a Budget</option>
        {budgets.all.map(budget => <option key={budget.id} value={budget.id}>{budget.title}</option>)}
      </select>
    </div>
  )
}

export default BudgetSelector;
