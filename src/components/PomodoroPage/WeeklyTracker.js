import React, {Component} from 'react';
import RC2 from 'react-chartjs2';
import './WeeklyTracker.css'


class WeeklyTracker extends Component {

  state = {
    data: {},
    options: {}
  }

  componentDidMount(){

    let newState = this.state;

    newState.data = {
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55],
        }
      ]
    };

    newState.options= {
      animation : false,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      }
    }

    this.setState(newState)

  }//end of componentDidMount

  render() {
    return (
       <div className='col-xs-12 col-sm-12 col-md-12'>
        <div className='weeklyTracker'>
          <RC2 data={this.state.data} options={this.state.options} type='bar' />
        </div>
      </div>
    );
  }
}

export default WeeklyTracker;
