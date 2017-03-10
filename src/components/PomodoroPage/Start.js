import React from 'react';
import {Button} from 'react-materialize';
class Start extends React.Component{
  render(){
    return(
      <div  className='col-xs-12 col-sm-6 col-md-6'>
        <div className='components start'style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Button onClick={this.props.startTime} style={{width:'200px', height:'70px'}}>Start</Button>
        </div>
      </div>
    );
  }
}

export default Start;