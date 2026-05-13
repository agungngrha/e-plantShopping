import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <Routes>
        {/* Halaman Landing */}
        <Route path="/" element={
          <div className="landing-page background-image">
            <div className="content">
              <h1>e-plantShopping</h1>
              <div className="divider"></div>
              <p>Bring Nature into Your Living Space</p>
              <button className="get-started-button" onClick={() => navigate('/plants')}>
                Get Started
              </button>
            </div>
          </div>
        } />

        {/* Halaman Daftar Produk */}
        <Route path="/plants" element={<ProductList />} />

        {/* Halaman Keranjang Belanja */}
        <Route path="/cart" element={
          <CartItem onContinueShopping={() => navigate('/plants')} />
        } />
      </Routes>
    </div>
  );
}

export default App;