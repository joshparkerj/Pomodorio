import React from 'react';
import './LeftSidebar.css'

class LeftSidebar extends React.Component{
  render(){
    return(
      <div style={{borderRight: '1px solid rgb(230, 230, 230)', width:'200px', height: 'calc(100vh - 50px)'}} className='sidebar'>
        <img style={{height: '200px', marginTop: '15px'}} src={'http://www.iconskid.com/images/56/andrew-avatar-head-human-man-user-icon-search-engine-56456.png'}/>
      </div>
    );
  }
}

export default LeftSidebar;