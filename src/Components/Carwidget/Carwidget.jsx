import React, { useState } from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import './Carwidget.css';

const Carwidget = ({ cartCount, cartItems }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="container-cart">
            <button onClick={toggleCart}>
                <RiShoppingCartFill />
            </button>
            <span className="cart-counter">{cartCount}</span>
            {isCartOpen && (
                <div className="cart-content">
                    <h3>Carrito de Compras</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <span>Cantidad: {item.quantity}</span>
                                <span>Precio: ${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        Total: $
                        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                    </div>
                    <button>Ir al Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Carwidget;