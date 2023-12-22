import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cartState } = useCart();

    return (
        <div>
            {cartState.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartState.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    {/* Add total and checkout button */}
                </div>
            )}
        </div>
    );
}

export default Cart;
