import React from 'react';

const AlertMessage = ({errors}) =>{
  return (
  <div className='alert alert-danger'>
    {errors[0].map((error, index) => <h4 key={index}>{error}</h4>)}
  </div>
);}

export default AlertMessage;
