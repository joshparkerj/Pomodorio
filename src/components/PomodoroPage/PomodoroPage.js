import React, {Component} from 'react'; 
import Start from './Start';
import Timer from './Timer';
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import './PomodoroPage.css';

let days = ['Sun','Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
let dayData = [1, 3, 0, 5, 2, 3, 1];
let today = new Date().getDay();

let orderedData = [
  dayData[today-6] ? dayData[today-6] : dayData[today+1], 
  dayData[today-5] ? dayData[today-5] : dayData[today+2],  
  dayData[today-4] ? dayData[today-4] : dayData[today+3], 
  dayData[today-3] ? dayData[today-3] : dayData[today+4],  
  dayData[today-2] ? dayData[today-2] : dayData[today+5],  
  dayData[today-1] ? dayData[today-1] : dayData[today+6],  
  dayData[today]
]

let orderedDays = [
  days[today-6] ? days[today-6] : days[today+1], 
  days[today-5] ? days[today-5] : days[today+2],  
  days[today-4] ? days[today-4] : days[today+3], 
  days[today-3] ? days[today-3] : days[today+4],  
  days[today-2] ? days[today-2] : days[today+5],  
  days[today-1] ? days[today-1] : days[today+6],  
  days[today]
]

class PomodoroPage extends Component {
  state = {
      stateOfTimer: 'idle',
      blinkInterval: '',
      countInterval: '',
      minutes: '--',
      seconds: '--',
      blink: 'visible',
      text: 'Start',
      buttonStyle: {background:  'rgb(24,157,144)'},
      data: orderedData,
  };
  
  componentDidMount(){

  }//end of componentDidMount

  componentWillUnmount(){
    clearInterval(this.state.blinkInterval);
    clearInterval(this.state.countInterval);
  }//end of componentDidMount

  handleClick(){
    if(this.state.stateOfTimer === 'idle'){
     this.startTimer.call(this);
    }
    if(this.state.stateOfTimer === 'running'){
      this.clearTimer.call(this);
    }
    if(this.state.stateOfTimer === 'finished'){
      this.clearTimer.call(this);
    }
  } 

  startTimer(){
    
    clearInterval(this.state.blinkInterval);
    clearInterval(this.state.countInterval);
    let newState = this.state
    let duration = 4;
    let timer = duration;
    let minutes; 
    let seconds;

    newState = {
      stateOfTimer: 'running',
      buttonStyle: {background: 'rgb(241,71,65)'},
      text: 'Stop',
      minutes: '00',
      seconds: '05',
      blink: 'visible',
      countInterval: setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.setState({
          minutes,
          seconds
        });

        if (--timer < 0) {
          clearInterval(this.state.countInterval);
          this.timerDone();
        }
      }, 1000)
     }

    this.setState(newState);

  } //end of startTimer
  
  timerDone(){
    
    let newState = this.state
    newState.data[newState.data.length-1] = newState.data[newState.data.length-1] + 1
    newState = {
    dailyCount: this.state.dailyCount + 1,
    stateOfTimer: 'finished',
    buttonStyle : {background: 'rgb(81,179,112)'},
    text: 'Clear Timer',
    blinkInterval: setInterval(()=> {
        this.setState({
          blink: this.state.blink === 'visible' ? 'hidden' : 'visible'
        });
      },500)
    }
    this.setState(newState);
  } //end of timerDone
  


  clearTimer(){
    clearInterval(this.state.blinkInterval);
    clearInterval(this.state.countInterval);
    let newState = this.state; 
    newState = {
        stateOfTimer: 'idle',
        buttonStyle: {background: 'rgb(24,157,144)'},
        text: 'Start',
        minutes: '--',
        seconds: '--',
        blink: 'visible'
      }

      this.setState(newState);
  } //end of clearTimer


  render(){

    

    let data = {
        labels: orderedDays,
        
        datasets: [
          {
            label: 'Pomodoros',
            backgroundColor: 'rgba(255,99,132,0.05)',
            borderColor: 'rgba(255,99,132,.9)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.3)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: this.state.data,
          }
        ]
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
                tension: 0
            }
        },
        animation : false,
        legend: {
          display: false
        }
      }

    return (
        <div style={{display: 'flex', flexWrap:'wrap'}} >
          <Start 
            handleClick={this.handleClick.bind(this)} 
            buttonStyle={this.state.buttonStyle} 
            text={this.state.text}/>
          <Timer 
            min={this.state.minutes} 
            sec={this.state.seconds} 
            blink={this.state.blink}/>
          <DailyTracker dailyCount={this.state.data[this.state.data.length-1]} />
          <WeeklyTracker data={data} options={options}/>
          <YearlyTracker />
        </div>
    );
  }
} //end of PomodoroPage
 
export default PomodoroPage; 



