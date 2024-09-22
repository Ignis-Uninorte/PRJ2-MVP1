// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumb';
import Subheader from './components/Subheader';
import Home from './pages/Home';
import PLP from './pages/PLP';

const App: React.FC = () => {
  return (
    <Router>
      <Subheader />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<PLP />} />
        <Route path="/technology/computers" element={<PLP />} />
        <Route path="/technology/televisions" element={<PLP />} />
        <Route path="/technology/audio" element={<PLP />} />
        <Route path="/technology/video" element={<PLP />} />
        <Route path="/technology/printing" element={<PLP />} />
        <Route path="/technology/cameras" element={<PLP />} />
        <Route path="/appliances" element={<PLP />} />
        <Route path="/appliances/air-conditioning" element={<PLP />} />
        <Route path="/appliances/refrigeration" element={<PLP />} />
        <Route path="/appliances/washers-dryers" element={<PLP />} />
        <Route path="/mobile-devices" element={<PLP />} />
        <Route path="/mobile-devices/phones" element={<PLP />} />
        <Route path="/mobile-devices/tablets" element={<PLP />} />
        <Route path="/mobile-devices/smartwatches" element={<PLP />} />
        <Route path="/home/living-room" element={<PLP />} />
        <Route path="/home/dining-room" element={<PLP />} />
        <Route path="/home/kitchen" element={<PLP />} />
        <Route path="/home/bathroom" element={<PLP />} />
      </Routes>
    </Router>
  );
};

export default App;
