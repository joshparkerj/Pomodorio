import React from 'react';
import './DailyTracker.css';

class DailyTracker extends React.Component{
  render(){
    let dailyCount = this.props.dailyCount;
    return(
      <div className='col-xs-12 col-sm-12 col-md-12'>
        <div className='dailyTracker'>{dailyCount}</div>
      </div>
    );
  }
}

export default DailyTracker;