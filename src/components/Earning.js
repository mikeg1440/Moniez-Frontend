import React from 'react';

const Earning = ({earning, deleteAction}) => {
  return (
  <>
      <li>{earning.earning_category.title} - {earning.amount}  <button className='ml-3 btn btn-danger' onClick={() => deleteAction(earning.id)}>X</button></li>
  </>
);}

export default Earning;
