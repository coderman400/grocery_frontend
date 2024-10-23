// src/components/Products/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h2>Available Products</h2>
      {products.map(product => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => {/* add to cart logic */}}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
