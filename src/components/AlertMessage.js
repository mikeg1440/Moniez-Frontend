import React from 'react';

const AlertMessage = ({errors}) => (
  <div className='alert alert-danger'>
    {errors.map(error => <h5>{error}</h5>)}
  </div>
);

export default AlertMessage;
