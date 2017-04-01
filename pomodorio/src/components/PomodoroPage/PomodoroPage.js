import React from 'react'; 
import Start from './Start';
import Timer from './Timer';
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import './PomodoroPage.css';

let blinkInterval;
let countInterval; 
let stateOfTimer = 'idle';

class PomodoroPage extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.timerDone = this.timerDone.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.state = {
      minutes: '--',
      seconds: '--',
      blink: 'visible',
      text: 'Start',
      buttonStyle: {background:  'rgb(24,157,144)'}
    };
  }  

  timerDone(){
    stateOfTimer = 'finished';
    this.setState({
      buttonStyle : {background: 'rgb(81,179,112)'},
      text: 'Clear Timer'
    });
    blinkInterval = setInterval(()=> {
      this.setState({
        blink: this.state.blink === 'visible' ? 'hidden' : 'visible'
      });
    },500);
  }

  

  handleClick(){
    if(stateOfTimer === 'idle'){
     this.startTimer();
    }
    if(stateOfTimer === 'running'){
      this.clearTimer();
    }
    if(stateOfTimer === 'finished'){
      this.clearTimer();
    }
  }

  startTimer(){
    
    clearInterval(blinkInterval);
    clearInterval(countInterval);
    let duration = 4;
    let timer = duration;
    let minutes; 
    let seconds;
    // stateOfTimer = 'running';

    
      this.setState({
        buttonStyle: {background: 'rgb(241,71,65)'},
        text: 'Stop',
        minutes: '00',
        seconds: '05',
        blink: 'visible'
      });

    countInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.setState({
          minutes,
          seconds
        });

        if (--timer < 0) {
          clearInterval(countInterval);
          this.timerDone();
        }
        
    }, 1000);
  }
  
  
  clearTimer(){
    clearInterval(blinkInterval);
    clearInterval(countInterval);
    stateOfTimer = 'idle';
      this.setState({
        buttonStyle: {background: 'rgb(24,157,144)'},
        text: 'Start',
        minutes: '--',
        seconds: '--',
        blink: 'visible'
      });
  }



  render(){

    return (
      <div>
        <section style={{display: 'flex', flexWrap:'wrap'}} >
          <Start handleClick = {this.handleClick} buttonStyle = {this.state.buttonStyle} text = {this.state.text}/>
          <Timer min = {this.state.minutes} sec = {this.state.seconds} blink = {this.state.blink}/>
          <DailyTracker />
          <WeeklyTracker />
          <YearlyTracker />
        </section>
      </div>
    );
  }
}
 
export default PomodoroPage; 



