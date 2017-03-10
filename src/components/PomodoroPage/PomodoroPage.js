import React from 'react';
import {Link} from 'react-router'; 
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import Start from './Start';
import Timer from './Timer';

class PomodoroPage extends React.Component {
  constructor() {
    super();
    this.startTimer = this.startTimer.bind(this);
    this.state = {
      minutes: '--',
      seconds: '--',
      blink: 'visible'
    };
  }  

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  startTimer(){
    let duration = 5;
    let timer = duration;
    let minutes; 
    let seconds;
    let interval = setInterval(() => {
    
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        console.log(minutes+':'+seconds)
        this.setState({
          minutes,
          seconds
        })

        if (--timer < 0) clearInterval(interval);
        
    }, 1000);
    
  }

  render(){



    return (
      <div>
        <section style={{display: 'flex', flexWrap:'wrap'}} >
          <Start startTime = {this.startTimer} />
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



