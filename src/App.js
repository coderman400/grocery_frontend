// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import OrderHistory from './components/Orders/OrderHistory';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
