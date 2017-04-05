import React from 'react';
import SideNav from './SideNav';
import PlusIcon from './Icons/PlusIcon';
import './Header.css'

const Header = () => {
  return (
    <div style={{ height:'50px',width:'100%', background: 'rgb(32, 36, 41)', color: 'rgb(193, 194, 195)', fontWeight: '500', fontSize: '15px', display:'flex'}}>
   
    <div className='hamburgerMenu'>
      <SideNav />
    </div>
    <div className='searchbar'></div>
    <div className='plus'>
      <PlusIcon />
    </div>


    </div>
  );
};

export default Header;