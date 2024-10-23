// src/components/Orders/OrderHistory.js
import React, { useEffect, useState } from 'react';
// Assume you have an API method to fetch order history

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      // Make API call to fetch user's order history
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.map(order => (
        <div key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
