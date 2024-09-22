import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ProductDetails from './components/pdp';

const App: React.FC = () => {
  return (
    <><div>
      <Home />
    </div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </Router></>

  );
};

export default App;
