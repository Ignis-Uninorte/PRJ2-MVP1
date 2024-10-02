import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Home from './pages/home';
import PLP from './pages/plp';
import Pdp from './pages/pdp';
import ShoppingCart from './components/ShoppingCart';

// A wrapper to pass state from route into the PLP component
const PlpWrapper: React.FC = () => {
  const { typeOfProduct } = useParams<{ typeOfProduct: string }>();

  // Ensure typeOfProduct is always a string, fallback to an empty string if undefined
  return <PLP typeOfProduct={typeOfProduct ?? ''} />;
};

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category/:idProduct" element={<Pdp />} />
          <Route path="/plp/:typeOfProduct" element={<PlpWrapper />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
    </Router>
  );
};

export default App;
