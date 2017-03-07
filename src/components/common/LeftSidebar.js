import React from 'react';

class LeftSidebar extends React.Component{
  render(){
    return(
      <div style={{borderRight: '1px solid #999', width:'200px', height: 'calc(100vh - 50px)'}}>
        LeftSidebar
      </div>
    );
  }
}

export default LeftSidebar;