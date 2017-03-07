import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav style={{height:'75px', width: 'calc(100vw - 200px)', padding: '25px'}}>
      <IndexLink to="/" activeClassName="active">Pomodoro </IndexLink>
      <Link to="/settings" activeClassname="active">Settings</Link>
    </nav>
  );
};

export default Header;