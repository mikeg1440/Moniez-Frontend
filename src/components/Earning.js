import React from 'react';

const Earning = ({earning}) => (
  <div>
    <li>{earning.earning_category.title} - {earning.amount}</li>
  </div>
);

export default Earning;
