import React from 'react';

const Bill = ({bill}) => (
  <div>
    <li>{bill.bill_category.title} - {bill.amount}</li>
  </div>
);

export default Bill;
