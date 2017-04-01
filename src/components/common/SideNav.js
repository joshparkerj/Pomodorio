import React from 'react';
import {SideNav, SideNavItem, Button} from 'react-materialize';
import {Link} from 'react-router';
import HamIcon from './Icons/HamIcon';

export default () => {
  return (
   <SideNav
      trigger={<div><HamIcon /></div>}
      options={{ closeOnClick: true }}
      >
      <SideNavItem userView
        user={{
          background: 'http://www.footballreplay.net/wp-content/uploads/2016/06/metal-grill-background-1024x1024-300x300.jpg',
          image: 'http://www.iconskid.com/images/56/andrew-avatar-head-human-man-user-icon-search-engine-56456.png',
          name: 'Jon Myrick',
          email: 'jonmyrick@gmail.com'
        }}
      />
     
      <Link to='/'><SideNavItem >Pomodoro</SideNavItem></Link>
      <Link to='settings'><SideNavItem >Settings</SideNavItem></Link>
      <SideNavItem divider />
      
      <SideNavItem waves>Logout</SideNavItem>
    </SideNav>
  );
};

