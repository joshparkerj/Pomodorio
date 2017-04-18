import React, {Component} from 'react';
import RC2 from 'react-chartjs2';
import './WeeklyTracker.css'

let today = new Date().getDay();

let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

let orderedDays = days.map((day, i, arr) => {
  return arr[today + i + 1] ? arr[today + i + 1] : arr[today - arr.length + i + 1];
});


let data = {
  labels: orderedDays,
  datasets: [{
    label: 'Pomodoros',
    backgroundColor: 'rgba(255,99,132,0.05)',
    borderColor: 'rgba(255,99,132,.9)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.3)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [],
  }]
};

let options = {
  responsive: true,
  scales: {
    yAxes: [{
      display: true,
      ticks: {
        stepSize: 1,
        min: 0,
        max: 8
      }
    }]
  },
  elements: {
    line: {
      tension: .2
    }
  },
  animation: false,
  legend: {
    display: false
  }
}


class WeeklyTracker extends Component {

  // shouldComponentUpdate(nextProps, nextState){

  //   if(nextProps.weekData[today] === this.props.weekData[today]) {
  //     return false
  //   }
  //   else return true
  // }
  
  render() {
    
    //this sets the data for the graph to match the days
    data.datasets[0].data  = this.props.weekData.map((day, i, arr) => {
      return arr[today + i + 1] ? arr[today + i + 1] : arr[today - arr.length + i + 1];
    });

    return (
       <div className='col-xs-12 col-sm-12 col-md-12'>
        <div className='weeklyTracker'>
          <RC2 data={data} options={options} type='line' />
        </div>
      </div>
    );
  }
}

export default WeeklyTracker;
