import React from 'react';

const AppLayout = (props) => (
  <div className='flex-container'>
    <div className='flex-item'></div>

    <div className='flex-item'>
      <h1 className='text-center'>Moniez App</h1>
      {props.children}
    </div>

    <div className='flex-item'></div>
  </div>
);

export default AppLayout;
