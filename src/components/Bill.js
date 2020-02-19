import React from 'react';

const Bill = ({bill, deleteAction}) => (
  <>
      <li>{bill.bill_category.title} - ${bill.amount} <button className='ml-3 btn btn-danger' onClick={() => deleteAction(bill.id)}>X</button></li>
  </>
);

export default Bill;
