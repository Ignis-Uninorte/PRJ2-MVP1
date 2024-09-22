// src/components/Subheader.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Subheader: React.FC = () => {
  return (
    <nav className="subheader">
      <ul>
        <li>
          <Link to="/technology">Technology</Link>
          <ul className="dropdown">
            <li>
              <Link to="/technology/computers">Computers</Link>
            </li>
            <li>
              <Link to="/technology/televisions">Televisions</Link>
            </li>
            <li>
              <Link to="/technology/audio">Audio</Link>
            </li>
            <li>
              <Link to="/technology/video">Video</Link>
            </li>
            <li>
              <Link to="/technology/printing">Printing</Link>
            </li>
            <li>
              <Link to="/technology/cameras">Cameras</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/appliances">Appliances</Link>
          <ul className="dropdown">
            <li>
              <Link to="/appliances/air-conditioning">Air Conditioning</Link>
            </li>
            <li>
              <Link to="/appliances/refrigeration">Refrigeration</Link>
            </li>
            <li>
              <Link to="/appliances/washers-dryers">Washers/Dryers</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/mobile-devices">Mobile Devices</Link>
          <ul className="dropdown">
            <li>
              <Link to="/mobile-devices/phones">Phones</Link>
            </li>
            <li>
              <Link to="/mobile-devices/tablets">Tablets</Link>
            </li>
            <li>
              <Link to="/mobile-devices/smartwatches">Smartwatches</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Home</Link>
          <ul className="dropdown">
            <li>
              <Link to="/home/living-room">Living Room</Link>
            </li>
            <li>
              <Link to="/home/dining-room">Dining Room</Link>
            </li>
            <li>
              <Link to="/home/kitchen">Kitchen</Link>
            </li>
            <li>
              <Link to="/home/bathroom">Bathroom</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Subheader;
