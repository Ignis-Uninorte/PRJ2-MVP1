import React from 'react';
import Home from './pages/home';
import PLP from './pages/plp'; // Import the PLP component
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import ProductDetails from './components/pdp';

// A wrapper to pass state from route into the PLP component
const PlpWrapper: React.FC = () => {
  const location = useLocation();
  const typeOfProduct = location.state?.typeOfProduct; // Get typeOfProduct from state

  return <PLP typeOfProduct={typeOfProduct} />; // Pass it as a prop
};

const App: React.FC = () => {
  return (
    
    <Router basename='/PRJ2-MVP1/' >
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/plp" element={<PlpWrapper />} />
        </Routes>
    </Router>


  );
};

export default App;
