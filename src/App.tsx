import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router basename="/PRJ2-MVP1">  
      <Routes>    
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
