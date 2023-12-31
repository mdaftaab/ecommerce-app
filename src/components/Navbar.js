import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/category/:category">Category</Link></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
}

export default Navbar;