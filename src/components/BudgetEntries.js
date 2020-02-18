import React, { Component } from 'react';

class BudgetEntries extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <tr>
        <td> {this.props.budget.title} </td>
  			<td> $ {this.props.budget.total}</td>
      </tr>
    );
  }

}

export default BudgetEntries;
