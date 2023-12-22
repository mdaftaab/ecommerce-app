import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        // Add cases for managing the cart state (add item, remove item, etc.)
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, /* initial state */);

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };