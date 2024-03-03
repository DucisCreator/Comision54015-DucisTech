import React from 'react';
import CheckoutForm from './CheckoutForm';
import ResumenPedido from './ResumenPedido';

const Checkout = ({ cartItems }) => {
    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-content">
                <CheckoutForm />
                <ResumenPedido cartItems={cartItems} />
            </div>
        </div>
    );
};

export default Checkout;