import React from 'react';
import SideNav from './SideNav';
import PlusIcon from './Icons/PlusIcon';
import './Header.css'

const Header = () => {
  return (
    <div style={{paddingTop:'10px', height:'50px',width:'100vw', background: 'rgb(32, 36, 41)', color: 'rgb(193, 194, 195)', fontWeight: '500', fontSize: '15px', display:'flex'}}>
    <div style={{marginLeft: '25px'}}><SideNav /></div>
    <div style={{marginLeft: 'calc(100vw - 100px)'}}><PlusIcon /></div>


    </div>
  );
};

export default Header;