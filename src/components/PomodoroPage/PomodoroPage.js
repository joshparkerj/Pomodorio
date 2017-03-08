import React from 'react';
import {Link} from 'react-router'; 
import DailyTracker from './DailyTracker';
import WeeklyTracker from './WeeklyTracker';
import YearlyTracker from './YearlyTracker';
import Start from './Start';
import Timer from './Timer';

class PomodoroPage extends React.Component {
  

  render(){
    return (
      <div>
        <h1>Pomodoro</h1>
        <section style={{display: 'flex', flexWrap:'wrap'}}>
          <Start />
          <Timer />
          <DailyTracker />
          <WeeklyTracker />
          <YearlyTracker />
        </section>
      </div>
    );
  }
}
 
export default PomodoroPage; 



