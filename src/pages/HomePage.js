import React from 'react';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider'

const HomePage = () => {
    // Fetch featured products from an API or state
    const featuredProducts = [
        // Sample product data
        { id: 1, name: 'Product 1', description: 'Description 1', price: 19.99 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 29.99 },
        { id: 3, name: 'Product 3', description: 'Description 3', price: 29.99 },
        // Add more products as needed
    ];

    return (
        <div>
            
            <Slider/>
            <h2>Featured Products</h2>
            <ProductList products={featuredProducts} />
        </div>
    );
}

export default HomePage;
