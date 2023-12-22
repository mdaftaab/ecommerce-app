// src/App.js
import React from 'react';
import AppRouter from './routes/AppRouter';
import { CartProvider } from './context/CartContext';
import ToastNotification from './components/ToastNotification';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRouter />
        <ToastNotification />
      </CartProvider>
    </div>
  );
}

export default App;
