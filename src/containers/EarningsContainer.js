import React, { Component } from 'react';
import {connect} from 'react-redux';

class EarningsContainer extends Component {

  render() {
    return (
      <div>

      </div>
    );
  }

}

const mapStateToProps = state => (
  earnings: state.budgets.selected.earnings
)

export default connect(mapStateToProps)(EarningsContainer);
