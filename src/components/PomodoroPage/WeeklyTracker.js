import React, {Component} from 'react';
import RC2 from 'react-chartjs2';
import './WeeklyTracker.css'

let data;
class WeeklyTracker extends Component {
  shouldComponentUpdate(){
    return this.props.data.datasets[0].data[6] === data ? false : true;
  }
  render() {
    data = this.props.data.datasets[0].data[6]
    return (
       <div className='col-xs-12 col-sm-12 col-md-12'>
        <div className='weeklyTracker'>
          <RC2 data={this.props.data} options={this.props.options} type='line' />
        </div>
      </div>
    );
  }
}

export default WeeklyTracker;
