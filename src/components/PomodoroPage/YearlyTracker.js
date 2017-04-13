import React from 'react';
import './YearlyTracker.css';

let thisMonth = new Date().getMonth();

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let orderedMonths = [
  months[thisMonth - 11] ? months[thisMonth - 11] : months[thisMonth + 1],
  months[thisMonth - 10] ? months[thisMonth - 10] : months[thisMonth + 2],
  months[thisMonth - 9] ? months[thisMonth - 9] : months[thisMonth + 3],
  months[thisMonth - 8] ? months[thisMonth - 8] : months[thisMonth + 4],
  months[thisMonth - 7] ? months[thisMonth - 7] : months[thisMonth + 5],
  months[thisMonth - 6] ? months[thisMonth - 6] : months[thisMonth + 6],
  months[thisMonth - 5] ? months[thisMonth - 5] : months[thisMonth + 7],
  months[thisMonth - 4] ? months[thisMonth - 4] : months[thisMonth + 8],
  months[thisMonth - 3] ? months[thisMonth - 3] : months[thisMonth + 9],
  months[thisMonth - 2] ? months[thisMonth - 2] : months[thisMonth + 10],
  months[thisMonth - 1] ? months[thisMonth - 1] : months[thisMonth + 11],
  months[thisMonth]
]
.map((month, i) => {
  return <p key={i}>{month}</p>
});

class YearlyTracker extends React.Component{
  render(){
    

    let graph = []
    for(let i = 1; i <= 370; i++){
      graph.push(
        <div id={i} key={i} className='daySquare'></div>
      )
    }

    

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