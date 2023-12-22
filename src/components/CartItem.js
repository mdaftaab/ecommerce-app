import React from 'react';

const CartItem = ({ item }) => {
    // Add logic for handling quantity changes and removing items from the cart
    return (
        <div className="cart-item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            {/* Add buttons or inputs for quantity changes and item removal */}
        </div>
    );
}

export default CartItem;
