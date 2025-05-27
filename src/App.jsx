import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <DarkModeToggle /> {/* Toggle appears in header area */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
