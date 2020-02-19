import React, { PureComponent } from 'react';

class Expense extends PureComponent {

  render() {
    const {expense, deleteAction} = this.props
    return (
      <>
        <li>{expense.expense_category.title} - {expense.amount}  <button className='ml-3 btn btn-danger' onClick={() => deleteAction(expense.id)}>X</button></li>
      </>
    );
  }

}

export default Expense;
