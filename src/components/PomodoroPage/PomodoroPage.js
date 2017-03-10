import React from 'react';
import {Link} from 'react-router'; 
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import Start from './Start';
import Timer from './Timer';

let button = {
  outline: 'none',
  width:'200px', 
  height:'70px',
  background: 'rgb(24,157,144)'
};

class PomodoroPage extends React.Component {
  constructor() {
    super();
    this.startTimer = this.startTimer.bind(this);
    this.timerDone = this.timerDone.bind(this);
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
          this.setState({
            buttonStyle : button,
            text: 'Restart'
          });
    this.blink = setInterval(()=> {
      this.setState({
        blink: this.state.blink === 'visible' ? 'hidden' : 'visible'
      })
      console.log('blinking')
    },500)
  }

  clearTimer(){

  }

  startTimer(){
    let duration = 5;
    let timer = duration;
    let minutes; 
    let seconds;

    button.background = 'rgb(241,71,65)';

    this.setState({
      buttonStyle: button,
      text: 'Stop',
      minutes: '00',
      seconds: '00'
    });

    let interval = setInterval(() => {
    
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.setState({
          minutes,
          seconds
        });

        if (--timer < 0) {
          clearInterval(interval);
          this.timerDone();
        }
        
    }, 1000);
    
  }

  render(){



    return (
      <div>
        <section style={{display: 'flex', flexWrap:'wrap'}} >
          <Start startTime = {this.startTimer} buttonStyle = {this.state.buttonStyle} text = {this.state.text}/>
          <Timer min = {this.state.minutes} sec = {this.state.seconds}/>
          <DailyTracker />
          <WeeklyTracker />
          <YearlyTracker />
        </section>
      </div>
    );
  }
}
 
export default PomodoroPage; 



