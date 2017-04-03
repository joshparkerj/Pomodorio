import React, {Component} from 'react';
import RC2 from 'react-chartjs2';
import './WeeklyTracker.css'


class WeeklyTracker extends Component {

  render() {
    return (
       <div className='col-xs-12 col-sm-12 col-md-12'>
        <div className='weeklyTracker'>
          <RC2 data={this.props.data} options={this.props.options} type='bar' />
        </div>
      </div>
    );
  }
}

export default WeeklyTracker;
