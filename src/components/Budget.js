import React from 'react';

const Budget = ({budget, deleteAction}) => (
  <div className='col'>
    <div className="card mx-auto">
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

// import React, { Component } from 'react';
//
// class Budget extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       priority: 0
//     }
//   }
//
//   increasePriority = () => {
//     this.setState({
//       priority: this.state.priority+1
//     })
//   }
//
//
//   render() {
//     const {budget, deleteAction} = this.props
//     return (
//       <div className='col'>
//         <div className="card mx-auto">
//           <div className="card-body">
//             <h5 className="card-title">{budget.title}</h5>
//             <p className="card-text">{budget.description}</p>
//             <button onClick={this.increasePriority}>↑ Increase Priority ↑</button>
//             <div className='text-center'>
//               <h1>${budget.total}</h1>
//               <h3>Priority: {this.state.priority}</h3>
//             </div>
//           </div>
//           <button className='btn btn-danger' onClick={() => deleteAction(budget.id)}>Delete Budget</button>
//
//         </div>
//
//       </div>
//     );
//   }
//
// }
//
// export default Budget;
