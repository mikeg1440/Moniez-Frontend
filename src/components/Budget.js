import React from 'react';

const Budget = ({budget}) => (
  <div className='col'>
    <div class="card" style={{width: '18rem'}}>
      <div class="card-body">
        <h5 class="card-title">{budget.title}</h5>
        <p class="card-text">{budget.description}</p>
        <div className='text-center'>
          <h1>${budget.total}</h1>
        </div>
      </div>
    </div>

  </div>
);

export default Budget;
