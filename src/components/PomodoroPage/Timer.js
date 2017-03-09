import React from 'react'; 

class Timer extends React.Component{
  constructor(props) {
    super(props);
    let date = new Date();
    let min = date.getMinutes();
    let hour = date.getHours();
    this.setTime = this.setTime.bind(this);
    this.state = {
      min: min < 10 ? `0${min}` : min,
      hour: hour <= 12 ? hour : hour - 12,
      blink: 'visible'
    };
  }  

  componentDidMount(){
    this.handle = setInterval(this.setTime, 500);
  }

  componentWillUnmount(){
    clearInterval(this.handle);
  }

  setTime(){
    let date = new Date();
    let min = date.getMinutes();
    let hour = date.getHours();
    let blink = this.state.blink;
    this.setState({
      min: min < 10 ? `0${min}` : min,
      hour: hour <= 12 ? hour : hour - 12,
      blink: blink === 'visible' ? 'hidden' : 'visible'
    });
    
  }
  render(){
    let hour = this.state.hour;
    let min = this.state.min;
    let blink = this.state.blink;
    return(
      <div  className='col-xs-12 col-sm-6 col-md-6'>
        <div className='components timer' style={{display:'flex', justifyContent: 'center'}}>
          <svg className ="digitalClock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 42" style={{height: '100%'}}>
              <g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M83.5,40.93h-71c-6.6,0-12-3.83-12-8.51V9C.5,4.33,5.9.5,12.5.5H83.4c6.6,0,12,3.83,12,8.51V32.35C95.5,37.1,90.1,40.93,83.5,40.93Z"/></g>
              <foreignObject width="100%" height="100%">
                  <div xmlns="http://www.w3.org/1999/xhtml" className="f-object">
                    <div style={styles.numbers}>
                      <span>{hour}</span><span style={{visibility: blink}}>:</span><span>{min}</span>
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

let styles = {
  numbers: {
    padding: '10px',
    display:'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontFamily: 'digital-clock-font',
    letterSpacing: '2px',
    color:'rgb(51,	213,	229)'
  }
};