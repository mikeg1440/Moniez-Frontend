import React from 'react';

const BudgetElement = ({element, deleteAction, category}) => {
  console.log(element)
  return (
  <>
      <li>{category.title} - ${element.amount} <button className='ml-3 btn btn-danger' onClick={() => deleteAction(element.id)}>X</button></li>
  </>
);}

export default BudgetElement;
