import React from 'react'; 
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import Start from './Start';
import Timer from './Timer';
// import './PomodoroPage.css';

let blinkInterval;
let countInterval; 
let stateOfTimer = 'idle';
let button = {
  outline:  'none',
  width: '200px', 
  height: '70px',
  background:  'rgb(24,157,144)' 
}
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
      buttonStyle: button
    };
  }  

  timerDone(){
    button.background = 'rgb(81,179,112)';
    stateOfTimer = 'finished';
    this.setState({
      buttonStyle : button,
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
  
    button.background = 'rgb(241,71,65)';
    
      this.setState({
        buttonStyle: button,
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
    button.background = 'rgb(24,157,144)';
    stateOfTimer = 'idle';
      this.setState({
        buttonStyle: button,
        text: 'Start',
        minutes: '--',
        seconds: '--',
        blink: 'visible'
      });
  }



  render(){

    return (
      <div>
        <h1>Hello</h1>
        {/*<section style={{display: 'flex', flexWrap:'wrap'}} >
          <Start handleClick = {this.handleClick} buttonStyle = {this.state.buttonStyle} text = {this.state.text}/>
          <Timer min = {this.state.minutes} sec = {this.state.seconds} blink = {this.state.blink}/>
          <DailyTracker />
          <WeeklyTracker />
          <YearlyTracker />
        </section>*/}
      </div>
    );
  }
}
 
export default PomodoroPage; 



