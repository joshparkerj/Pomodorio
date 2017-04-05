import React from 'react';
import './LeftSidebar.css'

class LeftSidebar extends React.Component{
  render(){
    return(
      <div style={{ width:'200px', height: 'calc(100vh - 50px)'}} className='sidebar'>
        <img style={{ height: '200px', marginTop: '15px'}} src={'http://www.iconskid.com/images/56/andrew-avatar-head-human-man-user-icon-search-engine-56456.png'} alt=''/>
      <section style={{margin:'0px 10px'}}>     
        <h2>Jon Myrick</h2>
        <p>jonmyrick7401@gmail.com</p>
      </section>
      <section style={{ margin: '20px 10px',padding: '20px 0px', borderTop: '1px solid rgb(230, 230, 230)',borderBottom: '1px solid rgb(230, 230, 230)', color: 'blue'}}>
        jonmyrick.com
      </section>
      </div>
    );
  }
}

export default LeftSidebar;