import React from 'react';

const AlertMessage = ({errors}) =>{
  return (
  <div className='alert alert-danger'>
    {errors.length > 1 ? errors[0].map((error, index) => <h4 key={index}>{error}</h4>) : <h4 key='error'>{errors[0]}</h4> }
  </div>
);}

export default AlertMessage;
