import React from 'react';
import { Link } from 'react-router-dom';
import Palace from '../media/grid/the-palace.jpg';
import Invitation from '../media/grid/the-invitation.jpg';
import PeterRachel from '../media/grid/rachel-peter-cropped.jpg';
import Hotel from '../media/grid/fairfield-cropped-1.jpg';
import Transportation from '../media/grid/transportation-cropped.jpg';
import Flowers from '../media/grid/flowers-cropped.jpg';

const SelectionGrid = () => (
 <div className="SelectionGrid">
  <div className="cell cell-1 shadow"> 
     <Link to='/schedule-events'>
       <img src={Palace} alt="the palace" className="cell-image shadow"/>
       <div className="cell-content">
       	<h3>Events</h3>
        <p>What time is the Church? What time is the reception? All your answers here.</p>
       </div>
     </Link>
  </div>
  <div className="cell cell-2 shadow">
   <Link to="/rsvp">
      <img src={Invitation} alt="rsvp" className="cell-image shadow"/>
      <div className="cell-content">
         <h3>RSVP</h3>
         <p>We hope to see you here! Please let us know if you can make it:</p>
      </div>
    </Link>
  </div>
  <div className="cell cell-3"> 
    <Link to="/about-us">
       <img src={PeterRachel} alt="peter rachel" className="cell-image shadow" />
       <div className="cell-content">
       	<h3>About Us</h3>
        <p>Rachel and Peter have been together four and half years</p>
       </div>
    </Link>
  </div>
  <div className="cell cell-4"> 
    <Link to="/accomodations">
       <img src={Hotel} alt="fairfield inn" className="cell-image shadow" />
       <div className="cell-content">
       	<h3>Accomodations</h3>
        <p>Reserve your night(s) at the Fairfield Inn & Suites Marriot</p>
       </div>
    </Link>
  </div>
  <div className="cell cell-5">
   <Link to="/registry">
      <img src={Flowers} alt="registry" className="cell-image shadow" />
      <div className="cell-content">
      	<h3>Registry</h3>
        <p>Your presence is the great gift we could ever ask for and is more than enough to offer for our wedding.</p>
      </div>
    </Link>
  </div>
  <div className="cell cell-6"> 
   <Link to="/transportation">
      <img src={Transportation} alt="transportation" className="cell-image shadow" />
      <div className="cell-content">
        <h3>Transportation</h3>
        <p>Directions how to from St. Cecilia's Church in Dayton to The Palace in Somerset.</p>
      </div>
    </Link>
  </div>
 </div>
 
);

export default SelectionGrid;