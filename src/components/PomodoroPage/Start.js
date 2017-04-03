import React, {Component} from 'react';
import {Button} from 'react-materialize';
import './Start.css';

class Start extends Component{
  render(){

    let handleClick = this.props.handleClick;
    let buttonStyle = this.props.buttonStyle;
    let text = this.props.text;

    return(
      <div  className='col-xs-12 col-sm-6 col-md-6'>
        <div className='start'>
          <Button onClick={handleClick} style={buttonStyle}>{text}</Button> 
        </div>
      </div>
    );
  }
}

export default Start;