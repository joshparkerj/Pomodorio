//This component handles the App template used on every page. 
import React, {Component} from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation'
import LeftSidebar from './common/LeftSidebar'


class App extends Component {
  render() {
    return ( //props.chilren will be passed in from react-router 
      <div >
        <Header />
        <div style={{display: 'flex'}}>
          <section>
            <LeftSidebar />
          </section>
          <section className='mainSection' >
            <Navigation />
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}


export default App; 