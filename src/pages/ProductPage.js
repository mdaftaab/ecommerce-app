import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();

    // Fetch product details based on id (use state or API call)
    const product = {
        id,
        name: 'Sample Product',
        description: 'This is a sample product description.',
        price: 29.99,
        // Add more details as needed
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {/* Add more details and actions as needed */}
        </div>
    );
}

export default ProductPage;
