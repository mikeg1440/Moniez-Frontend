import React from 'react';

const Budget = ({budget, deleteAction}) => (
  <div className='col'>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{budget.title}</h5>
        <p className="card-text">{budget.description}</p>
        <div className='text-center'>
          <h1>${budget.total}</h1>
        </div>
      </div>
      <button className='btn btn-danger' onClick={() => deleteAction(budget.id)}>Delete Budget</button>

    </div>

  </div>
);

export default Budget;
