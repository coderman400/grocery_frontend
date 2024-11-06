// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Adjust this if your backend runs on a different URL
});

export const registerUser = (userData) => api.post('/users/register', userData);
export const loginUser = (userData) => api.post('/users/login', userData);
export const fetchProducts = () => api.get('/products');
export const fetchProductDetails = (id) => api.get(`/products/${id}`);
export const addToCart = (cartData) => api.post('/cart/add', cartData);
export const fetchCart = () => api.get('/cart');
export const checkout = () => api.post('/orders/checkout');
