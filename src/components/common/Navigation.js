import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav style={{height:'65px', width: 'calc(100vw - 230px)', padding: '25px', fontSize: '15px', fontWeight: '300', borderBottom: '1px solid grey'}}>
      <IndexLink to="/" style={{textDecoration: 'none', margin: '5px'}}>Pomodoro </IndexLink>
      <Link to="/settings" style={{textDecoration: 'none', margin: '5px'}}>Settings</Link>
    </nav>
  );
};

export default Header;