import React from 'react';
import {Link, IndexLink} from 'react-router';
import SideNav from './SideNav';
import PlusIcon from './Icons/PlusIcon';
import HamIcon from './Icons/HamIcon';

const Header = () => {
  return (
    <div style={{paddingTop:'10px', height:'50px',width:'100vw', background: 'rgb(32, 36, 41)', color: 'rgb(193, 194, 195)', fontWeight: '500', fontSize: '15px', display:'flex'}}>
    <div style={{marginLeft: '15px'}}><SideNav /></div>
    <div style={{marginLeft: 'calc(100vw - 115px)'}}><PlusIcon /></div>


    </div>
  );
};

export default Header;