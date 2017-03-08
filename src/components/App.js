//This component handles the App template used on every page. 
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation'
import LeftSidebar from './common/LeftSidebar'
import { slide as Menu } from 'react-burger-menu';

class App extends React.Component {
  render() {
    return ( //props.chilren will be passed in from react-router 
      <div >
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
        <Header />
        <div style={{display: 'flex'}}>
          <section>
            <LeftSidebar />
          </section>
          <section style={{width: '100vw'}} >
            <Navigation />
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App; 