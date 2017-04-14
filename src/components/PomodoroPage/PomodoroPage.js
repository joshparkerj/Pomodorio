import React, {Component} from 'react'; 
import Start from './Start';
import Timer from './Timer';
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import './PomodoroPage.css';



let today = new Date().getDay();

let setMin = .05;

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
      weekData: [1, 3, 2, 3, 2, 3, 1],
  };
  

  componentWillUnmount(){
    clearInterval(this.state.blinkInterval);
    clearInterval(this.state.countInterval);
  }

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
    let duration = setMin*60-1;
    let timer = duration;
    let minutes; 
    let seconds;

    newState = {
      stateOfTimer: 'running',
      buttonStyle: {background: 'rgb(241,71,65)'},
      text: 'Stop',
      minutes: setMin < 10 ? `0${setMin}` : setMin,
      seconds: '00',
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

    newState.weekData[today] += 1
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
          <DailyTracker dailyCount={this.state.weekData[today]} />
          <WeeklyTracker weekData={this.state.weekData}/>
          <YearlyTracker />
        </div>
    );
  }
} //end of PomodoroPage
 
export default PomodoroPage; 



