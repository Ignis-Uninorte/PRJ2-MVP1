import React from 'react';
import Home from './pages/home';
import PLP from './pages/plp'; // Import the PLP component
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import ProductDetails from './components/pdp';
import ShoppingCart from './components/ShoppingCart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// A wrapper to pass state from route into the PLP component

const queryClient = new QueryClient();

const PlpWrapper: React.FC = () => {
  const { typeOfProduct } = useParams<{ typeOfProduct: string }>();

  // Ensure typeOfProduct is always a string, fallback to an empty string if undefined
  return <PLP typeOfProduct={typeOfProduct ?? ''} />;
};

const App: React.FC = () => {
  return (
   <QueryClientProvider client={queryClient}>
    <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/plp/:typeOfProduct" element={<PlpWrapper />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
    </Router>
   </QueryClientProvider>
   </QueryClientProvider>

  );
};

export default App;
