import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = () => {
    // Add logic for displaying toasts based on application events
    return (
        <ToastContainer position="bottom-right" autoClose={3000} />
    );
}

export const showToast = (message, type = 'success') => {
    toast[type](message);
};

export default ToastNotification;
