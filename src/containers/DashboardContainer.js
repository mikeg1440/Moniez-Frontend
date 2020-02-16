import React, { Component } from 'react';
import DashboardNav from '../components/DashboardNav';

class DashboardContainer extends Component {


  render() {
    return (
      <div className='text-center'>
        <h2>Dashboard Container</h2>

        <div className='row mr-auto ml-auto'>
          <DashboardNav />
        </div>

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
