import React from 'react';

const BudgetSelector = ({budgets, callback}) => {


  return (
    <div>
      <select onChange={callback} className="mdb-select md-form" defaultValue='Select a Budget'>
        {/* <option value="" disabled selected></option> */}
        {budgets.all.map(budget => <option key={budget.id} value={budget.id}>{budget.title}</option>)}
      </select>
    </div>
  )
}

export default BudgetSelector;
