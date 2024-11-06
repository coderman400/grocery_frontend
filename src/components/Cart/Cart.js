// src/components/Cart/Cart.js
import React, { useEffect, useState } from 'react';
import { fetchCart, checkout } from '../../api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const response = await fetchCart();
      setCartItems(response.data);
    };
    getCart();
  }, []);

  const handleCheckout = async () => {
    await checkout();
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item._id}>
          <h3>{item.product.name}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
