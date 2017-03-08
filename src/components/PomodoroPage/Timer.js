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
        <div className='components timer'>
          {/*<svg className ="digitalClock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 58">
            <g id="Layer1" data-name="Layer 2">
              <rect className="cls-1" x="0.5" y="0.5" width="94.95" height="56.94" rx="12" ry="12"/>
              <rect className="cls-2" x="14.66" y="17.47" width="68.74" height="24.19"/>
              <foreignObject width="100%" height="100%">
                  <div xmlns="http://www.w3.org/1999/xhtml" className="f-object">
                    <div style={styles.numbers}>
                      <span>{hour}</span><span style={{visibility: blink}}>:</span><span>{min}</span>
                      </div>
                  </div>
              </foreignObject>
            </g>
          </svg>*/}
        </div>
      </div>
    );
  }
}
//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.9 41.43"><defs><style>.cls-1{fill:#121212;stroke:#242424;stroke-miterlimit:10;}</style></defs><title>timer</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M83.5,40.93h-71c-6.6,0-12-3.83-12-8.51V9C.5,4.33,5.9.5,12.5.5H83.4c6.6,0,12,3.83,12,8.51V32.35C95.5,37.1,90.1,40.93,83.5,40.93Z"/></g></g></svg>
export default Timer;

let styles = {
  numbers: {
    fontSize: 20,
    fontFamily: 'digital-clock-font',
    letterSpacing: '2px',
    color:'rgb(51,	213,	229)'
  }
};