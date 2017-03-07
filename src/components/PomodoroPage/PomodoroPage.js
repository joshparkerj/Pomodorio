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
      <div style={{display: 'flex'}}>
       
        <section style={{background: 'yellow'}}>
          <DailyTracker />
          <WeeklyTracker />
          <YearlyTracker />
          <Start />
          <Timer />
        </section>
      </div>
    );
  }
}
 
export default PomodoroPage; 



