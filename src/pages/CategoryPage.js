import React from 'react';
import ProductList from '../components/ProductList';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { category } = useParams();

    // Fetch products based on category from an API or state
    const productsByCategory = [
        // Sample product data for a specific category
        { id: 1, name: 'Category Product 1', description: 'Description 1', price: 19.99 },
        { id: 2, name: 'Category Product 2', description: 'Description 2', price: 29.99 },
        { id: 3, name: 'Category Product 3', description: 'Description 3', price: 29.99 },
        // Add more products as needed
    ];

    return (
        <div>
            <h2>{category} Products</h2>
            <ProductList products={productsByCategory} />
        </div>
    );
}

export default CategoryPage;