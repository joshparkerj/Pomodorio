import React, {Component} from 'react';
import RC2 from 'react-chartjs2';
import './WeeklyTracker.css'

let today = new Date().getDay();

let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

let orderedDays = [
  days[today - 6] ? days[today - 6] : days[today + 1],
  days[today - 5] ? days[today - 5] : days[today + 2],
  days[today - 4] ? days[today - 4] : days[today + 3],
  days[today - 3] ? days[today - 3] : days[today + 4],
  days[today - 2] ? days[today - 2] : days[today + 5],
  days[today - 1] ? days[today - 1] : days[today + 6],
  days[today]
]

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

  // shouldComponentUpdate(nextProps){
    
  //   return nextProps.weekData[today] !== this.props.weekData[today];
  // }
  
  render() {

    let weekData = this.props.weekData;
    
    data.datasets[0].data = [
      weekData[today-6] ? weekData[today-6] : weekData[today+1], 
      weekData[today-5] ? weekData[today-5] : weekData[today+2],  
      weekData[today-4] ? weekData[today-4] : weekData[today+3], 
      weekData[today-3] ? weekData[today-3] : weekData[today+4],  
      weekData[today-2] ? weekData[today-2] : weekData[today+5],  
      weekData[today-1] ? weekData[today-1] : weekData[today+6],  
      weekData[today]
    ]
   
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
