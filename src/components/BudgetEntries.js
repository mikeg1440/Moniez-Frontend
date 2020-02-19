import React, { PureComponent } from 'react';

class BudgetEntries extends PureComponent {

  render() {
    const {budget} = this.props
    return (
      <tr>
        <td> {budget.title} </td>
  			<td> $ {budget.total}</td>
      </tr>
    );
  }

}

export default BudgetEntries;
