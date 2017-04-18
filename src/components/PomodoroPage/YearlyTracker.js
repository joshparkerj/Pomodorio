import React from 'react';
import './YearlyTracker.css';

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

let thisMonth = new Date().getMonth();

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let orderedMonths = months.map((month, i, arr) => {
  return <p key={i}>{arr[thisMonth + i + 1] ? arr[thisMonth + i + 1] : arr[thisMonth - arr.length + i + 1]}</p>
});

let graph = []
for(let i = 1; i <= 370; i++){
  graph.push(
    <div id={i} key={i} className='daySquare'></div>
  )
}


class YearlyTracker extends React.Component{
  render(){
    

    

    

    return(
      <div className='col-xs-12 col-sm-12 col-md-12'>
       <div className='yearlyTracker'>
         <section style={{display: 'flex', width: '100%'}}>
           <div style={{fontSize: '11px', fontWeight: '100', textAlign: 'center', with: '25px', margin: '37px 5px 7px'}}>
             <p>Mon</p>
             <p>Wed</p>
             <p>Fri</p>
            </div>
           <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
             <div style={{display: 'flex', justifyContent: 'space-around', fontSize: '11px', fontWeight: '100', width: '100%'}}>
               {orderedMonths}
             </div>
             <section style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '95px', width: '90%'}}>
               {graph}
             </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default YearlyTracker;