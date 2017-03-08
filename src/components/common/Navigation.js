import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <section className='navbar' style={{ margin:'0px 20px 20px', height:'65px', width: 'calc(100vw - 230px)', fontSize: '15px', fontWeight: '300', borderBottom: '1px solid grey', borderRadius: 'initial'}} >
      <div className='hover'><IndexLink to="/" style={{textDecoration: 'none', margin: '5px'}}>Pomodoro</IndexLink></div>
      <div className='hover'><Link to="/settings" style={{textDecoration: 'none', margin: '5px'}}>Settings</Link></div>
    </section>
  );
};

export default Header;