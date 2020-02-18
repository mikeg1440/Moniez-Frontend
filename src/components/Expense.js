import React from 'react';

const Expense = ({expense}) => (
  <div>
    <li>{expense.expense_category.title} - {expense.amount}</li>
  </div>
);

export default Expense;
