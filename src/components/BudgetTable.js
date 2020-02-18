import React from 'react';
import BudgetEntries from './BudgetEntries';

const BudgetTable = ({budgets}) =>{
  return (
  <table className='text-center' style={{width: '100%'}}>
  	<tbody>
      {budgets.map(budget => <BudgetEntries budget={budget} />)}
  	</tbody>
  </table>
 )
}
export default BudgetTable;
