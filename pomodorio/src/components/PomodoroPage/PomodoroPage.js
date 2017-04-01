import React, {Component} from 'react'; 
import Start from './Start';
import Timer from './Timer';
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import './PomodoroPage.css';


class PomodoroPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateOfTimer: 'idle',
      blinkInterval: '',
      countInterval: '',
      minutes: '--',
      seconds: '--',
      blink: 'visible',
      text: 'Start',
      buttonStyle: {background:  'rgb(24,157,144)'}
    };
  }  

  timerDone(){
    this.state.stateOfTimer = 'finished';
    this.setState({
      buttonStyle : {background: 'rgb(81,179,112)'},
      text: 'Clear Timer'
    });
    this.state.blinkInterval = setInterval(()=> {
      this.setState({
        blink: this.state.blink === 'visible' ? 'hidden' : 'visible'
      });
    },500);
  }

  

  handleClick(){
    if(this.state.stateOfTimer === 'idle'){
     this.startTimer().bind(this);
    }
    if(this.state.stateOfTimer === 'running'){
      this.clearTimer().bind(this);
    }
    if(this.state.stateOfTimer === 'finished'){
      this.clearTimer().bind(this);
    }
  }

  startTimer(){
    
    clearInterval(this.state.blinkInterval);
    clearInterval(this.state.countInterval);
    let duration = 4;
    let timer = duration;
    let minutes; 
    let seconds;
    this.state.stateOfTimer = 'running';

  
    this.setState({
      buttonStyle: {background: 'rgb(241,71,65)'},
      text: 'Stop',
      minutes: '00',
      seconds: '05',
      blink: 'visible'
    });

    this.state.countInterval = setInterval(() => {
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
        
    }, 1000);
  }
  
  
  clearTimer(){
    clearInterval(this.state.blinkInterval);
    clearInterval(this.state.countInterval);
    this.state.stateOfTimer = 'idle';
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
          <Start handleClick = {this.handleClick.bind(this)} buttonStyle = {this.state.buttonStyle} text = {this.state.text}/>
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



