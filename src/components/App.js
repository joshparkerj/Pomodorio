//This component handles the App template used on every page. 
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Navigation from './common/Navigation'
import LeftSidebar from './common/LeftSidebar'

class App extends React.Component {
  render() {
    return ( //props.chilren will be passed in from react-router 
      <div >
        <Header />
        <div style={{display: 'flex'}} className='maxWidth'>
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