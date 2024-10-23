import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import './HomePage.css'; // Import CSS for this page
import './App.css'; // Import fade-in CSS

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="homepage fade-in">
            <h1>Welcome to Grocery Store</h1>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="product-list">
                    {products.map((product) => (
                        <div key={product._id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <Button onClick={() => console.log(`Add ${product.name} to cart`)}>
                                Add to Cart
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
