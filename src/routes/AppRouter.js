import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CategoryPage from '../pages/CategoryPage';
import CartPage from '../pages/CartPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
