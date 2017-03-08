import React from 'react';
let Menu = require('react-burger-menu').slide;

class Example extends React.Component{
  showSettings(event) {
    event.preventDefault();

  }
  render() {
    return (
      <Menu>
        <a id="home" className="menu-item">Home</a>
        <a id="about" className="menu-item">About</a>
        <a id="contact" className="menu-item">Contact</a>
        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default Example; 