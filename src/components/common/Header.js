import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <div style={{paddingTop:'10px', height:'50px',width:'100vw', background: 'rgb(32, 36, 41)', color: 'rgb(193, 194, 195)', fontWeight: '500', fontSize: '15px', display:'flex'}}>


     <svg style={{height:'20px', marginLeft: '25px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80.15"><defs></defs><title>hamburger</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="cls-3" x="0.5" y="0.5" width="99" height="18.13" rx="5.74" ry="5.74"/><path className="cls-3" d="M93.76,1A5.24,5.24,0,0,1,99,6.24v6.66a5.24,5.24,0,0,1-5.24,5.24H6.24A5.24,5.24,0,0,1,1,12.89V6.24A5.24,5.24,0,0,1,6.24,1H93.76m0-1H6.24A6.26,6.26,0,0,0,0,6.24v6.66a6.26,6.26,0,0,0,6.24,6.24H93.76A6.26,6.26,0,0,0,100,12.89V6.24A6.26,6.26,0,0,0,93.76,0Z"/><rect className="cls-3" x="0.5" y="31.01" width="99" height="18.13" rx="5.74" ry="5.74"/><path className="cls-3" d="M93.76,31.51A5.24,5.24,0,0,1,99,36.75V43.4a5.24,5.24,0,0,1-5.24,5.24H6.24A5.24,5.24,0,0,1,1,43.4V36.75a5.24,5.24,0,0,1,5.24-5.24H93.76m0-1H6.24A6.26,6.26,0,0,0,0,36.75V43.4a6.26,6.26,0,0,0,6.24,6.24H93.76A6.26,6.26,0,0,0,100,43.4V36.75a6.26,6.26,0,0,0-6.24-6.24Z"/><rect className="cls-3" x="0.5" y="61.52" width="99" height="18.13" rx="5.74" ry="5.74"/><path className="cls-3" d="M93.76,62A5.24,5.24,0,0,1,99,67.26v6.66a5.24,5.24,0,0,1-5.24,5.24H6.24A5.24,5.24,0,0,1,1,73.91V67.26A5.24,5.24,0,0,1,6.24,62H93.76m0-1H6.24A6.26,6.26,0,0,0,0,67.26v6.66a6.26,6.26,0,0,0,6.24,6.24H93.76A6.26,6.26,0,0,0,100,73.91V67.26A6.26,6.26,0,0,0,93.76,61Z"/></g></g></svg>


     <svg style={{height:'20px', marginLeft: 'calc(100vw - 100px)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs></defs><title>add</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="cls-3" x="41.09" y="0.5" width="17.81" height="99"/><path className="cls-3" d="M58.41,1V99H41.59V1H58.41m1-1H40.59V100H59.41V0Z"/><rect className="cls-3" x="0.5" y="41.09" width="99" height="17.81"/><path className="cls-3" d="M99,41.59V58.41H1V41.59H99m1-1H0V59.41H100V40.59Z"/></g></g></svg>



    </div>
  );
};

export default Header;