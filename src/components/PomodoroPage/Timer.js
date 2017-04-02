import React, {Component} from 'react'; 
import './Timer.css';

class Timer extends Component{

  
  render(){
    let min = this.props.min;
    let sec = this.props.sec;
    let blink = this.props.blink;
  
    return(
      <div  className='col-xs-12 col-sm-6 col-md-6'>
        <div className='components timer' >
          <svg className="digitalClock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 42">
              <path className="cls-1" d="M83.5,40.93h-71c-6.6,0-12-3.83-12-8.51V9C.5,4.33,5.9.5,12.5.5H83.4c6.6,0,12,3.83,12,8.51V32.35C95.5,37.1,90.1,40.93,83.5,40.93Z"/>
              <foreignObject width="100%" height="100%">
                  <div className='numbers' xmlns="http://www.w3.org/1999/xhtml">
                    <div style={{visibility: blink}} >
                      <span>{min}</span><span >:</span><span>{sec}</span>
                      </div>
                  </div>
              </foreignObject>
          </svg>
        </div>
      </div>
    );
  }
}


export default Timer;

