import React, { Component } from 'react';

class DashboardContainer extends Component {

  render() {
    return (
      <div className='text-center'>
        <h2>Dashboard Conatiner</h2>
        <div className='row'>
          <div className='col'>
            Budget Entries
          </div>

          <div className='col'>
            Budget Graph
          </div>
        </div>
      </div>
    );
  }

}

export default DashboardContainer;
