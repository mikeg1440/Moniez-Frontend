import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Cell, Label} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const renderLabelContent = (props) => {
  const { value, percent, x, y, midAngle } = props;
  return (
    <g transform={`translate(${x}, ${y})`} textAnchor={ (midAngle < -90 || midAngle >= 90) ? 'end' : 'start'}>
      <text className='label-text' x={0} y={0}>{`$${value}`}</text>
      <text x={0} y={20}>{`(${props.name}: ${(percent * 100).toFixed(2)}%)`}</text>
    </g>
  );
};

export default class MyChart extends PureComponent {

  static displayName = 'Budget';

  state = {
    activeIndex: 0,
    animation: true,
  };



  getBudgetData = (budget) => {
    let data = []
    let earningsTotal = budget.earnings.reduce((total, entry) => total + entry.amount, 0)
    let expensesTotal = budget.expenses.reduce((total, entry) => total + entry.amount, 0)
    let billsTotal = budget.bills.reduce((total, entry) => total + entry.amount, 0)
    data.push({id: 1, name: 'earnings', value: earningsTotal})
    data.push({id: 2, name: 'expenses', value: expensesTotal})
    data.push({id: 3, name: 'bills', value: billsTotal})
    return data
  }

  render () {
    // const { data } = this.state;
    let data = this.getBudgetData(this.props.budget)
    if (data.reduce((a,o) => a + o.value, 0) === 0){
      return <h4 className='mt-5'>No Data to Graph Yet! <br/>  Add Earnings, Expenses or Bills first!</h4>
    }
    return (
      <div className="mx-auto">
        <PieChart width={600} height={400}>
          <Legend />
          <Pie
            data={data}
            dataKey="value"
            cx={250}
            cy={150}
            startAngle={180}
            endAngle={-180}
            innerRadius={60}
            outerRadius={80}
            label={renderLabelContent}
            paddingAngle={5}
            isAnimationActive={this.state.animation}
          >

            {
              data.map((entry, index) =>{
                return (
                  <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
                )
              })
            }
            <Label width={100} position="center">
              {this.props.budget.title} Budget
            </Label>
          </Pie>
        </PieChart>
      </div>
    );
  }
}
